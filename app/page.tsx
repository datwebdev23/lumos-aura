import HeroSection from "@/components/home/HeroSection";
import CategoryCards from "@/components/home/CategoryCards";
import ProductGrid from "@/components/home/ProductGrid";
import PromoBanner from "@/components/home/PromoBanner";

export default function Home() {
  return (
    <>
      <HeroSection />
      <CategoryCards />
      <ProductGrid />
      <PromoBanner />
    </>
  );
}