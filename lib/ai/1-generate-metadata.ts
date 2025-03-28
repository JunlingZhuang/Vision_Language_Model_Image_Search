import { openai } from "@ai-sdk/openai";
import { generateObject } from "ai";
import dotenv from "dotenv";
import { z } from "zod";
import { ImageMetadata, writeAllMetadataToFile } from "./utils";
import { list } from "@vercel/blob";

dotenv.config();

async function main() {
  const blobs = await list();
  const files = blobs.blobs.map((b) => b.url);

  console.log("files to process:\n", files);

  const images: ImageMetadata[] = [];

  for (const file of files) {
    console.clear();
    console.log(
      `Generating description for ${file} (${files.indexOf(file) + 1}/${
        files.length
      })`
    );
    const result = await generateObject({
      model: openai("gpt-4o"),
      schema: z.object({
        image: z.object({
          title: z
            .string()
            .describe(
              "an title for the image, mark with 'floorplan' if it is a floorplan, mark with 'photo' if it is a photo. Add necessary details to the title to help with search."
            ),
          description: z
            .string()
            // .describe("A one sentence description of the image,"),
            .describe(
              "A one sentence description of the image, if it is a photo, including the furniture, vibe, and any other relevant details. If it is a floorplan, describe the layout of the room, including the furniture, vibe, and any other relevant details."
            ),
        }),
      }),
      maxTokens: 512,
      messages: [
        {
          role: "user",
          content: [
            { type: "text", text: "Describe the image in detail." },
            {
              type: "image",
              image: file,
            },
          ],
        },
      ],
    });
    images.push({ path: file, metadata: result.object.image });
  }
  await writeAllMetadataToFile(images, "images-with-metadata.json");
  console.log("All images processed!");
}

main().catch(console.error);
