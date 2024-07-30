import { PropsWithChildren } from "react";
import Section from "./Section";
import { CustomIcon } from "./icons/CustomIcon";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export default function Hero() {
  return (
    <Section className="flex flex-col gap-2 lg:gap-4 mt-32 md:mt-32 lg:mt-44">
      <div
        className="absolute inset-x-0 -z-10 transform-gpu overflow-hidden blur-3xl"
        aria-hidden="true"
      >
        <div
          className="relative aspect-[1155/678] w-[36.125rem] -translate-x-1/2 bg-gradient-to-tr dark:from-accent dark:to-accent from-[#a5f3fc] to-[#7dd3fc] opacity-30 sm:w-[72.1875rem]"
          style={{
            clipPath:
              "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
          }}
        ></div>
      </div>
      <h1 className="text-4xl lg:text-5xl font-bold">Hey, I am Yao 🫡</h1>
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
        <Button size={"lg"} className="rounded w-fit">
          Schedule a call
        </Button>
        <Button size={"lg"} className="rounded w-fit" variant={"secondary"}>
          <CustomIcon className="inline" name="github" size={34} /> Christ-Yao
        </Button>
      </div>
      <div
        className="absolute inset-x-0 top-[calc(80%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(80%-30rem)]"
        aria-hidden="true"
      >
        <div
          className="relative aspect-[1155/678] w-[36.125rem] -translate-x-1/2 bg-gradient-to-tr from-[#059669] to-[#22c55e] opacity-30 sm:w-[72.1875rem]"
          style={{
            clipPath:
              "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
          }}
        ></div>
      </div>
      <div
        className="absolute inset-x-0 top-96 -z-10 transform-gpu overflow-hidden blur-3xl sm:top-96"
        aria-hidden="true"
      >
        <div
          className="relative aspect-[1155/678] w-[36.125rem] -translate-x-1/2 bg-gradient-to-tr from-[#22c55e] to-[#059669] opacity-30 sm:left-[calc(50%+36rem)] sm:w-[72.1875rem]"
          style={{
            clipPath:
              "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
          }}
        ></div>
      </div>
      <div
        className="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]"
        aria-hidden="true"
      >
        <div
          className="relative left-[calc(50%+3rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 bg-gradient-to-tr from-[#a5f3fc] to-[#7dd3fc] dark:from-accent dark:to-accent opacity-30 sm:left-[calc(50%+36rem)] sm:w-[72.1875rem]"
          style={{clipPath: "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)"}}
        ></div>
      </div>
    </Section>
  );
}

export const Code = (props: PropsWithChildren<{ className?: string }>) => {
  return (
    <code
      className={cn(
        "px-1 mx-0.5 bg-accent/30 border border-accent py-1 rounded-[3px] items-center font-mono text-sm text-nowrap",
        props.className
      )}
    >
      {props.children}
    </code>
  );
};
