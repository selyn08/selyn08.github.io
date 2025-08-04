import { Button } from "@/components/ui/button";
import { ArrowRight, Play } from "lucide-react";
import heroImage from "@/assets/hero-bg.jpg";

const HeroSection = () => {
  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src={heroImage} 
          alt="Hero Background" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-hero opacity-90"></div>
      </div>
      
      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="max-w-4xl mx-auto">
          {/* Badge */}
          <div className="inline-flex items-center px-4 py-2 bg-background/10 backdrop-blur-sm border border-white/20 rounded-full text-white mb-6 animate-fade-in">
            <span className="text-sm font-medium">🚀 Écosystème d'innovation</span>
          </div>
          
          {/* Main Heading */}
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 animate-fade-in [animation-delay:200ms]">
            Une transformation{" "}
            <span className="bg-gradient-to-r from-secondary to-white bg-clip-text text-transparent">
              globale
            </span>
            <br />
            portée par l'intelligence
          </h1>
          
          {/* Subtitle */}
          <p className="text-xl md:text-2xl text-white/90 mb-10 max-w-3xl mx-auto leading-relaxed animate-fade-in [animation-delay:400ms]">
            Découvrez un écosystème connecté où vos idées prennent vie grâce à notre expertise en conseil, 
            notre super app SaaS et nos espaces de coworking innovants.
          </p>
          
          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-fade-in [animation-delay:600ms]">
            <Button 
              size="lg" 
              className="bg-gradient-primary hover:shadow-glow transition-all duration-300 group px-8 py-6 text-lg"
            >
              Commencer maintenant
              <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
            </Button>
            
            <Button 
              variant="outline" 
              size="lg" 
              className="border-white/30 text-white hover:bg-white/10 backdrop-blur-sm px-8 py-6 text-lg group"
            >
              <Play className="mr-2 h-5 w-5 transition-transform group-hover:scale-110" />
              Explorer nos solutions
            </Button>
          </div>
          
          {/* Trust Indicators */}
          <div className="mt-16 pt-8 border-t border-white/20 animate-fade-in [animation-delay:800ms]">
            <p className="text-white/70 text-sm mb-4">Fait confiance par plus de 500+ entreprises</p>
            <div className="flex justify-center items-center space-x-8 opacity-60">
              <div className="w-20 h-8 bg-white/20 rounded"></div>
              <div className="w-20 h-8 bg-white/20 rounded"></div>
              <div className="w-20 h-8 bg-white/20 rounded"></div>
              <div className="w-20 h-8 bg-white/20 rounded"></div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white/70 rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;