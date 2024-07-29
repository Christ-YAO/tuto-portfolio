import CalCom from "./_components/CalCom";
import Footer from "./_components/Footer";
import Hero from "./_components/Hero";
import { Nav } from "./_components/Nav";
import Showcase from "./_components/Showcase";
import Work from "./_components/Work";

export default function Home() {
  return (
    <main className="h-full text-base">
      <Nav />
      <Hero />
      <Work />
      <Showcase />
      <CalCom />
      <Footer />
    </main>
  );
}
