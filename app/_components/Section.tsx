import { cn } from "@/lib/utils";
import { PropsWithChildren } from "react";

export type SectionProps = PropsWithChildren<{className?: string}>

export default function Section(props: SectionProps) {
    return (
        <section className={cn("max-w-2xl md:my-20 lg:my-32 px-4 sm:px-12 md:px-4 md:pl-4 m-auto my-16", props.className)}>
            {props.children}
        </section>
    );
}