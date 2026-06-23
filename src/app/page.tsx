import Navbar from "@/components/public/Navbar";
import Footer from "@/components/public/Footer";
import Hero from "@/components/public/Hero";
import Stats from "@/components/public/Stats";
import FeaturedNews from "@/components/public/FeaturedNews";
import HomeGallery from "@/components/public/HomeGallery";
import ContactCTA from "@/components/public/ContactCTA";

export default function HomePage() {
return (
<>  <Navbar />

    <Hero />

    <Stats />

    <FeaturedNews />

    <HomeGallery />

    <ContactCTA />

    <Footer />
</>


);
}
