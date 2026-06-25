import Navbar from "@/components/public/Navbar";
import Footer from "@/components/public/Footer";
import FloatingWhatsApp from "@/components/public/FloatingWhatsApp";

export default function PublicLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <Navbar />
      {children}
      <Footer />
      <FloatingWhatsApp />
    </>
  );
}