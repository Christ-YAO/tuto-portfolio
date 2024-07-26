import Link from "next/link";
import { Code } from "./Hero";
import Section from "./Section";
import Image from "next/image";

export default function Showcase() {
  return (
    <Section>
      <h2 className="text-2xl lg:text-3xl font-bold">
        From 3K followers to 41K subscribers
      </h2>
      <p className="text-[15px] text-muted-foreground mt-2 lg:mt-4">
        It's the story of{" "}
        <Link
          href={"/"}
          className=" group hover:text-[#60a5fa66] transition-all"
        >
          <Code className="group-hover:bg-[#60a5fa22] group-hover:underline underline-offset-2">
            Marc Lou
          </Code>
        </Link>
        . He was making his own videos, but it was not growing FAST. So he
        called me and I fixed his channel.
      </p>
      <Image
        src="/showcase.webp"
        alt="showcase"
        width={400}
        height={200}
        className="w-full h-auto mt-6 lg:mt-8"
      />
    </Section>
  );
}
