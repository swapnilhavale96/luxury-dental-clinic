import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import TrustIndicators from "@/components/TrustIndicators";
import Services from "@/components/Services";
import BeforeAfterGallery from "@/components/BeforeAfterGallery";
import TheExperience from "@/components/TheExperience";
import Technology from "@/components/Technology";
import Testimonials from "@/components/Testimonials";
import BookingCTA from "@/components/BookingCTA";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="flex-grow">
        <Hero />
        <TrustIndicators />
        <Services />
        <BeforeAfterGallery />
        <TheExperience />
        <Technology />
        <Testimonials />
        <BookingCTA />
      </main>
      <Footer />
    </>
  );
}
