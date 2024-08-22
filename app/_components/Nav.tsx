"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import clsx from "clsx";
// import Headroom from "react-headroom";
import Section from "./Section";
import { ThemeToggle } from "@/components/ui/theme/ThemeToggle";
import useDetectScroll, { Direction } from "@smakss/react-scroll-direction";
import { cn } from "@/lib/utils";

export const Nav = () => {
  const pathname = usePathname();
  const { scrollDir } = useDetectScroll();

  return (
    // <Headroom>
    <header className={cn("top-0 py-6 backdrop-blur-lg z-50 fixed w-full overflow-hidden transition-all", scrollDir === Direction.Down && "py-4")}>
      <div className="flex justify-between items-baseline max-w-2xl m-auto relative">
        <h5
          className="text-[16px] font-black px-1 sm:px-3 relative rounded-sm dark:text-neutral-300 bg-accent/50 italic"
        >
          christ yao
        </h5>
        <div className={cn("absolute right-0 top-1/2 -translate-y-1/2 transition-all duration-300", scrollDir === Direction.Down && "absolute right-0 -top-10 opacity-0")}>
          <div className="flex items-center gap-2 text-primary dark:dark:text-neutral-300 text-[13px]">
            <Link
              href={"/#skills"}
              className={clsx("px-2 transition dark:font-extralight hover:bg-accent rounded", {
                "font-bold dark:font-semibold bg-accent/50": pathname === "/",
              })}
            >
              <span className="font-mono">0.</span> Skills
            </Link>
            <Link
              href={"/tools"}
              className={clsx("px-2 transition dark:font-extralight hover:bg-accent rounded", {
                "font-bold dark:font-semibold bg-accent/50": pathname === "/tools",
              })}
            >
              <span className="font-mono">1.</span> tools
            </Link>
            <ThemeToggle />
          </div>
        </div>
      </div>
    </header>
    // </Headroom>
  );
};
