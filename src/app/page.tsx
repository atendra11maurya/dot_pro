import { Navigation } from "@/components/Navigation/Navigation";
import { HeroSection } from "@/components/HeroSection/HeroSection";
import { HomeClient } from "@/components/HomeClient/HomeClient";
import styles from "./page.module.css";

export default function Home() {
  return (
    <main className={styles.main}>
      <Navigation />
      <HeroSection />
      <HomeClient />
    </main>
  );
}
