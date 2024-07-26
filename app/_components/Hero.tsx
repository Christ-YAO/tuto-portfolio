import { PropsWithChildren } from "react";
import Section from "./Section";
import { CustomIcon } from "./icons/CustomIcon";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export default function Hero() {
  return (
    <Section className="flex flex-col gap-2 lg:gap-4">
      <h1 className="text-4xl lg:text-5xl font-bold">
        Hey, I am Yao 🫡
      </h1>
      <p className="text-[15px] leading-7">
        I help{" "}
        <Code>
          <CustomIcon className="inline" name="youtube" size={16} /> Youtubers
        </Code>{" "}
        grow on Youtube with captivating{" "}
        <Code>
          <CustomIcon className="inline" name="videoEditing" size={16} /> video
          editing
        </Code>
        .
      </p>
      <div className="mt-4 lg:mt-6 flex items-center flex-wrap gap-4">
      <Button size={'lg'} className="rounded w-fit">Schedule a call</Button>
      <Button size={'lg'} className="rounded w-fit" variant={'secondary'}><CustomIcon className="inline" name="github" size={34} /> @yaodev</Button>
      </div>
    </Section>
  );
}

export const Code = (props: PropsWithChildren<{ className?: string }>) => {
  return (
    <code className={cn("px-1 mx-0.5 bg-accent/30 border border-accent py-1 rounded-[3px] items-center font-mono text-sm text-nowrap", props.className)}>
      {props.children}
    </code>
  );
};
