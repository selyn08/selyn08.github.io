import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import { AppSidebar } from "@/components/AppSidebar";
import HeroSection from "@/components/HeroSection";
import ServicesSection from "@/components/ServicesSection";
import PricingSection from "@/components/PricingSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <SidebarProvider>
      <div className="min-h-screen flex w-full">
        <AppSidebar />
        <div className="flex-1">
          <header className="h-16 flex items-center border-b bg-background/80 backdrop-blur-lg sticky top-0 z-50">
            <SidebarTrigger className="ml-4" />
            <div className="ml-4 text-2xl font-bold bg-gradient-primary bg-clip-text text-transparent">
              SELYN
            </div>
          </header>
          <main>
            <HeroSection />
            <ServicesSection />
            <PricingSection />
            <TestimonialsSection />
            <ContactSection />
            <Footer />
          </main>
        </div>
      </div>
    </SidebarProvider>
  );
};

export default Index;
