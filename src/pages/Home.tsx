import { CTASection } from "@/components/CTASection";
import { CategorySection } from "@/components/CategorySection";
import { FeaturedBusinesses } from "@/components/FeaturedBusinesses";
import { Footer } from "@/components/Footer";
import { Hero } from "@/components/Hero";
import { Navbar } from "@/components/Navbar";
import { NearbyBusinesses } from "@/components/NearbyBusinesses";
import { WhyDSupply } from "@/components/WhyDSupply";

export default function Home() {
  return (
    <div className="min-h-screen scroll-smooth bg-background font-sans antialiased">
      <Navbar />
      <main>
        <Hero />
        <CategorySection />
        <FeaturedBusinesses />
        <NearbyBusinesses />
        <WhyDSupply />
        <CTASection />
      </main>
      <Footer />
    </div>
  );
}
