import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { Intro } from "@/components/Intro";
import { SignatureDrinks } from "@/components/SignatureDrinks";
import { MenuTabs } from "@/components/MenuTabs";
import { PastrySection } from "@/components/PastrySection";
import { MoodGallery } from "@/components/MoodGallery";
import { Experience } from "@/components/Experience";
import { Visit } from "@/components/Visit";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Intro />
        <SignatureDrinks />
        <MenuTabs />
        <PastrySection />
        <MoodGallery />
        <Experience />
        <Visit />
      </main>
      <Footer />
    </>
  );
}
