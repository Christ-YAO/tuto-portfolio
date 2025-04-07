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
    <header
      className={cn(
        "top-0 py-6 backdrop-blur-3xl z-50 fixed w-full overflow-hidden transition-all px-4 xl:px-0"
      )}
    >
      <div className="flex justify-between items-baseline max-w-6xl m-auto relative">
        <div
          className={cn(
            "relative transition-all duration-500",
            scrollDir === Direction.Down && "ml-8 font-bold"
          )}
        >
          <Link
            href={"/"}
            className={cn(
              "text-xl group dark:font-medium relative transition-all duration-500"
            )}
          >
            T
            <span
              className={cn(
                "absolute opacity-0 group-hover:relative group-hover:opacity-100 transition-all duration-300 ease-in-out",
                scrollDir === Direction.Down && "relative opacity-100"
              )}
            >
              héo
            </span>{" "}
            <span
              className={cn(
                "absolute left-3 group-hover:left-[56px] transition-all duration-300 ease-in-out",
                scrollDir === Direction.Down && "left-[56px]"
              )}
            >
              D
            </span>
            <span
              className={cn(
                "absolute opacity-0 group-hover:relative group-hover:opacity-100 transition-all duration-300 ease-in-out ml-5",
                scrollDir === Direction.Down && "relative opacity-100 ml-[20px]"
              )}
            >
              iame
            </span>
            <span
              className={cn(
                "absolute left-7 group-hover:left-[120px] transition-all dura delay-150 ease-in-out",
                scrollDir === Direction.Down && "left-[120px]"
              )}
            >
              .
            </span>
          </Link>
        </div>
        <div
          className={cn(
            "absolute right-0 top-1/2 -translate-y-1/2 transition-all duration-300",
            scrollDir === Direction.Down && "absolute right-0 -top-10 opacity-0"
          )}
        >
          <div className="flex items-center gap-2 text-primary dark:dark:text-neutral-300 text-[14px]">
            <a
              href={"/#services"}
              className={clsx(
                "py-2 px-4 transition font-medium hover:bg-accent rounded",
                {
                  "font-extrabold bg-accent/50": pathname === "/#services",
                }
              )}
            >
              <span className="font-mono">0.</span> Services
            </a>
            <a
              href={"/#about"}
              className={clsx(
                "py-2 px-4 transition font-medium hover:bg-accent rounded mr-10",
                {
                  "font-extrabold bg-accent/50": pathname === "/#about",
                }
              )}
            >
              <span className="font-mono">1.</span> A Propos
            </a>
            <a
              href={"/#contact"}
              className="cursor-pointer font-medium rounded-4xl bg-[#2c99b7] text-white hover:brightness-90 hover:bg-[#2c99b7] transition-all px-4 py-2"
            >
              Prendre contact
            </a>
            {/* <ThemeToggle /> */}
          </div>
        </div>
      </div>
    </header>
    // </Headroom>
  );
};
