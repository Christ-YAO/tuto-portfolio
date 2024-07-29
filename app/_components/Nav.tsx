"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import clsx from "clsx";
// import Headroom from "react-headroom";
import Section from "./Section";
import { ThemeToggle } from "@/components/ui/theme/ThemeToggle";

export const Nav = () => {
  const pathname = usePathname();

  return (
    // <Headroom>
      <header className="top-0 py-4 backdrop-blur-md z-50 fixed w-full">
        <div className="flex justify-between items-baseline max-w-2xl m-auto">
          <Link
            href={"/"}
            className="text-[16px] font-black px-1 sm:px-3 relative rounded text-accent-foreground hover:bg-accent transition-all italic"
          >
            Christ yao
          </Link>
          <div className="flex items-center gap-2 text-primary font-semibold text-[13px]">
            <Link
              href={"/#skills"}
              className={clsx("px-2 py-1 transition font-extralight", {
                "font-medium": pathname === "/",
              })}
            >
              <span className="font-mono">0.</span> Skills
            </Link>
            <Link
              href={"/tools"}
              className={clsx("px-2 py-1 transition font-extralight", {
                "font-medium": pathname === "/tools",
              })}
            >
              <span className="font-mono">1.</span> tools
            </Link>
            <ThemeToggle />
          </div>
        </div>
      </header>
    // </Headroom>
  );
};
