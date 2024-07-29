"use client";

import Image from "next/image";
import Section from "./Section";
import Link from "next/link";
// import { Booker } from "@calcom/atoms";

export default function CalCom() {
  return (
    <Section>
      <h2 className="text-2xl lg:text-3xl font-bold">
        Schedule a call with me
      </h2>
      <p className="text-[15px] text-muted-foreground mt-2 lg:mt-4">
        10 minutes to talk about your fututre project.
      </p>
      {/* <Booker username={"melvynx"} eventSlug="call-with-melvynx" /> */}
      <Image
        src="/Calcom.png"
        alt="showcase"
        width={400}
        height={200}
        className="w-full h-auto mt-6 lg:mt-8"
      />
      <h3 className="text-[14px] font-light text-center my-6 text-neutral-600">
        Call with yao | <Link href="https://cal.com/melvynx" className="hover:underline hover:text-white transition-all underline-offset-2 font-semibold">Cal.com</Link>
      </h3>
    </Section>
  );
}
