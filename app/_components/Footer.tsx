import Link from "next/link";
import { Code } from "./Hero";
import Section from "./Section";

export default function Footer() {
  return (
    <Section className="border-t flex flex-col gap-4 border-accent max-w-full h-0 max-h-[0px]">
        <p className="mx-auto pt-6 lg:pt-12 pb-0 text-xs text-neutral-600">
          Made with ❤️ by <Link
          href={"/"}
          className=" group hover:text-[#60a5fa66] transition-all"
        >
          <Code className="group-hover:bg-[#60a5fa22] italic group-hover:underline underline-offset-2 text-xs">
            @yaodev
          </Code>
        </Link> 
        </p>
        <p className="mx-auto text-[13px] font-extralight">© {new Date().getFullYear()} <Code className="italic">yao</Code>. All rights reserved.</p>
    </Section>
  );
}
