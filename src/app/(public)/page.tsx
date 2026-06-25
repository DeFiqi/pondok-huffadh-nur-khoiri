import Navbar from "@/components/public/Navbar";
import Footer from "@/components/public/Footer";
import Hero from "@/components/public/Hero";
import Stats from "@/components/public/Stats";
import FeaturedNews from "@/components/public/FeaturedNews";
import HomeGallery from "@/components/public/HomeGallery";
import ContactCTA from "@/components/public/ContactCTA";
import AboutSection from "@/components/public/AboutSection";
import WelcomeSection from "@/components/public/WelcomeSection";
import ProgramSection from "@/components/public/ProgramSection";

export default function HomePage() {
return (
<>  
    <Hero />

    <AboutSection />

    <WelcomeSection />

    <ProgramSection />

    <Stats />

    <FeaturedNews />

    <HomeGallery />

    <ContactCTA />

</>


);
}
