import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X, Home, Users, Package, Building, DollarSign, MessageSquare, Info, Phone } from "lucide-react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    { name: "Accueil", href: "#hero", icon: Home },
    { name: "Consulting & Accompagnement", href: "#consulting", icon: Users },
    { name: "SELYN Suite (Super App SaaS)", href: "#suite", icon: Package },
    { name: "Espace Coworking", href: "#coworking", icon: Building },
    { name: "Nos Offres & Tarifs", href: "#pricing", icon: DollarSign },
    { name: "Communauté & Réseautage", href: "#community", icon: MessageSquare },
    { name: "À propos", href: "#about", icon: Info },
    { name: "Contact", href: "#contact", icon: Phone },
  ];

  return (
    <header className="fixed top-0 w-full bg-background/80 backdrop-blur-lg border-b border-border z-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <div className="text-2xl font-bold bg-gradient-primary bg-clip-text text-transparent">
              SELYN
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-2">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="flex items-center gap-2 px-3 py-2 rounded-md text-foreground hover:bg-muted hover:text-primary transition-colors font-medium"
              >
                <item.icon className="h-4 w-4" />
                <span>{item.name}</span>
              </a>
            ))}
          </nav>

          {/* CTA Button */}
          <div className="hidden md:flex">
            <Button variant="default" size="sm" className="bg-gradient-primary hover:shadow-glow">
              Commencer maintenant
            </Button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 bg-card rounded-lg mt-2 shadow-card">
              {navItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="flex items-center gap-3 px-3 py-2 text-foreground hover:text-primary hover:bg-muted rounded-md transition-colors"
                  onClick={() => setIsMenuOpen(false)}
                >
                  <item.icon className="h-4 w-4" />
                  <span>{item.name}</span>
                </a>
              ))}
              <div className="px-3 py-2">
                <Button className="w-full bg-gradient-primary">
                  Commencer maintenant
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;