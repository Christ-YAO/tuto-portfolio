import Section from "./Section";
import { YouTubeEmbed } from "@next/third-parties/google";

export default function Work() {
  return (
    <Section>
      <h2 className="text-2xl lg:text-3xl font-bold">My best work</h2>
      <p className="text-base text-muted-foreground mt-2 lg:mt-4">These videos make thousands of view and grow the channel of my clients.</p>
      <div className="mt-4 lg:mt-6 gap-4 video">
        <div className="rounded-[3px] overflow-hidden shadow-md">
          <YouTubeEmbed videoid="b_ANHgTHNSI" />
        </div>
        <div className="rounded-[3px] overflow-hidden shadow-md">
          <YouTubeEmbed videoid="exI5pHmGe6A" />
        </div>
        <div className="rounded-[3px] overflow-hidden shadow-md">
          <YouTubeEmbed videoid="PzmpXf9w4Hw" />
        </div>
        <div className="rounded-[3px] overflow-hidden shadow-md">
          <YouTubeEmbed videoid="o3uxODN1Y-g" />
        </div>
      </div>
    </Section>
  );
}
