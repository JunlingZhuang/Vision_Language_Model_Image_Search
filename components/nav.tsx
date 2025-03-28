"use client";

import * as React from "react";
import Link from "next/link";
import Image from "next/image";
import corganLogo from "@/public/icons/corgan_logo_2.jpg";

import { cn } from "@/lib/utils";
// import { Icons } from "@/components/icons"
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";

const reports: { title: string; href: string; description: string }[] = [
  {
    title: "Report 1",
    href: "/reports/report-1",
    description:
      "A modal dialog that interrupts the user with important content and expects a response.",
  },
  {
    title: "Report 2",
    href: "/reports/report-2",
    description:
      "For sighted users to preview content available behind a link.",
  },
  {
    title: "Report 3",
    href: "/reports/report-3",
    description:
      "Displays an indicator showing the completion progress of a task, typically displayed as a progress bar.",
  },
  {
    title: "Report 4",
    href: "/reports/report-4",
    description: "Visually or semantically separates content.",
  },
  {
    title: "Report 5",
    href: "/reports/report-5",
    description:
      "A set of layered sections of content—known as tab panels—that are displayed one at a time.",
  },
  {
    title: "Report 6",
    href: "/reports/report-6",
    description:
      "A popup that displays information related to an element when the element receives keyboard focus or the mouse hovers over it.",
  },
];

const tutorials: { title: string; href: string; description: string }[] = [
  {
    title: "Tutorial 1",
    href: "/tutorials/tutorial-1",
    description: "A tutorial about how to use the tool",
  },
  {
    title: "Tutorial 2",
    href: "/tutorials/tutorial-2",
    description: "A tutorial about how to use the tool",
  },
  {
    title: "Tutorial 3",
    href: "/tutorials/tutorial-3",
    description: "A tutorial about how to use the tool",
  },
];

export default function NavigationBar() {
  return (
    <div className="w-full border-b h-16 flex items-center justify-between pl-[20px] pr-48">
      <NavigationMenu>
        <NavigationMenuList>
          <NavigationMenuItem>
            <Link href="/" legacyBehavior passHref>
              <NavigationMenuLink>
                <Image
                  src={corganLogo}
                  alt="Corgan Icon"
                  width={200}
                  height={150}
                />
              </NavigationMenuLink>
            </Link>
          </NavigationMenuItem>
        </NavigationMenuList>
      </NavigationMenu>

      <NavigationMenu>
        <NavigationMenuList>
          <NavigationMenuItem>
            <Link href="/about" legacyBehavior passHref>
              <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                About
              </NavigationMenuLink>
            </Link>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <Link href="/compare" legacyBehavior passHref>
              <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                Compare
              </NavigationMenuLink>
            </Link>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <NavigationMenuTrigger>Tutorials</NavigationMenuTrigger>
            <NavigationMenuContent>
              <ul className="grid w-[200px] gap-3 p-4 md:w-[250px] md:grid-cols-1 lg:w-[300px] ">
                {tutorials.map((tutorial) => (
                  <ListItem
                    key={tutorial.title}
                    title={tutorial.title}
                    href={tutorial.href}
                  >
                    {tutorial.description}
                  </ListItem>
                ))}
              </ul>
            </NavigationMenuContent>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <NavigationMenuTrigger>Report Collection</NavigationMenuTrigger>
            <NavigationMenuContent>
              <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px] ">
                {reports.map((report) => (
                  <ListItem
                    key={report.title}
                    title={report.title}
                    href={report.href}
                  >
                    {report.description}
                  </ListItem>
                ))}
              </ul>
            </NavigationMenuContent>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <NavigationMenuTrigger>Tools</NavigationMenuTrigger>
            <NavigationMenuContent>
              <ul className="grid gap-3 p-4 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]">
                <li className="row-span-3">
                  <NavigationMenuLink asChild>
                    <Link href="/" className="flex items-center gap-2">
                      {/* <Icons.logo className="h-6 w-6" /> */}
                      <div className="mb-2 mt-4 text-lg font-medium">
                        shadcn/ui
                      </div>
                      <p className="text-sm leading-tight text-muted-foreground">
                        Beautifully designed components built with Radix UI and
                        Tailwind CSS.
                      </p>
                    </Link>
                  </NavigationMenuLink>
                </li>
                <ListItem
                  href="/tools/social-media-scan-tool"
                  title="Social Media Scan Tool"
                >
                  Sentimental analysis of various media as data source.
                </ListItem>
                <ListItem
                  href="/tools/location-score-tool"
                  title="Location Score Tool"
                >
                  Quickly gain given site analysis, insight and unearthed the
                  best program.
                </ListItem>
                <ListItem href="/tools/other-tool" title="Other Tools">
                  Interesting in other hugo tools?
                </ListItem>
              </ul>
            </NavigationMenuContent>
          </NavigationMenuItem>
        </NavigationMenuList>
      </NavigationMenu>
    </div>
  );
}

const ListItem = React.forwardRef<
  React.ElementRef<"a">,
  React.ComponentPropsWithoutRef<"a">
>(({ className, title, children, ...props }, ref) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <a
          ref={ref}
          className={cn(
            "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
            className
          )}
          {...props}
        >
          <div className="text-sm font-medium leading-none">{title}</div>
          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
            {children}
          </p>
        </a>
      </NavigationMenuLink>
    </li>
  );
});
ListItem.displayName = "ListItem";
