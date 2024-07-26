"use client";

import Section from "./Section";
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
    </Section>
  );
}
