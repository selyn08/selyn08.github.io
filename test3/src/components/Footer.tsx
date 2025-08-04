import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Separator } from "@/components/ui/separator";
import { 
  Facebook, 
  Twitter, 
  Linkedin, 
  Instagram,
  Mail,
  Phone,
  MapPin,
  ArrowRight
} from "lucide-react";

const Footer = () => {
  const footerLinks = {
    services: [
      { name: "Consulting", href: "#services" },
      { name: "SELYN Suite", href: "#services" },
      { name: "Coworking", href: "#services" },
      { name: "Formation", href: "#" },
    ],
    company: [
      { name: "À propos", href: "#about" },
      { name: "Notre équipe", href: "#" },
      { name: "Carrières", href: "#" },
      { name: "Presse", href: "#" },
    ],
    support: [
      { name: "Centre d'aide", href: "#" },
      { name: "Documentation", href: "#" },
      { name: "Contact", href: "#contact" },
      { name: "Status", href: "#" },
    ],
    legal: [
      { name: "Confidentialité", href: "#" },
      { name: "Conditions", href: "#" },
      { name: "Cookies", href: "#" },
      { name: "RGPD", href: "#" },
    ],
  };

  const socialLinks = [
    { icon: Facebook, href: "#", label: "Facebook" },
    { icon: Twitter, href: "#", label: "Twitter" },
    { icon: Linkedin, href: "#", label: "LinkedIn" },
    { icon: Instagram, href: "#", label: "Instagram" },
  ];

  return (
    <footer className="bg-primary text-primary-foreground">
      {/* Newsletter Section */}
      <div className="border-b border-white/10">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="max-w-4xl mx-auto text-center">
            <h3 className="text-2xl md:text-3xl font-bold mb-4">
              Restez informé de nos dernières actualités
            </h3>
            <p className="text-white/80 mb-8 max-w-2xl mx-auto">
              Recevez en avant-première nos conseils d'experts, nouvelles fonctionnalités 
              et success stories de nos clients.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <Input 
                placeholder="Votre adresse email"
                className="bg-white/10 border-white/20 text-white placeholder:text-white/60 h-12"
              />
              <Button variant="secondary" className="h-12 px-8 group">
                S'abonner
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Main Footer Content */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <div className="text-3xl font-bold mb-6 text-secondary">SELYN</div>
            <p className="text-white/80 mb-6 leading-relaxed">
              Votre partenaire de transformation digitale au Maroc. 
              Nous combinons conseil expert, technologie innovante et espaces collaboratifs 
              pour accélérer votre succès.
            </p>
            <div className="space-y-3">
              <div className="flex items-center gap-3 text-white/80">
                <Phone className="h-4 w-4" />
                <span>+212 5 22 XX XX XX</span>
              </div>
              <div className="flex items-center gap-3 text-white/80">
                <Mail className="h-4 w-4" />
                <span>contact@selyn.ma</span>
              </div>
              <div className="flex items-center gap-3 text-white/80">
                <MapPin className="h-4 w-4" />
                <span>Casablanca, Maroc</span>
              </div>
            </div>
          </div>

          {/* Links Sections */}
          <div>
            <h4 className="font-semibold mb-4 text-secondary">Services</h4>
            <ul className="space-y-3">
              {footerLinks.services.map((link) => (
                <li key={link.name}>
                  <a 
                    href={link.href}
                    className="text-white/80 hover:text-secondary transition-colors"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4 text-secondary">Entreprise</h4>
            <ul className="space-y-3">
              {footerLinks.company.map((link) => (
                <li key={link.name}>
                  <a 
                    href={link.href}
                    className="text-white/80 hover:text-secondary transition-colors"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4 text-secondary">Support</h4>
            <ul className="space-y-3">
              {footerLinks.support.map((link) => (
                <li key={link.name}>
                  <a 
                    href={link.href}
                    className="text-white/80 hover:text-secondary transition-colors"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4 text-secondary">Légal</h4>
            <ul className="space-y-3">
              {footerLinks.legal.map((link) => (
                <li key={link.name}>
                  <a 
                    href={link.href}
                    className="text-white/80 hover:text-secondary transition-colors"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Footer */}
      <div className="border-t border-white/10">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-white/60 text-sm">
              © 2024 SELYN. Tous droits réservés.
            </p>
            
            {/* Social Links */}
            <div className="flex space-x-4">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-secondary hover:text-primary transition-all duration-300 group"
                  aria-label={social.label}
                >
                  <social.icon className="h-5 w-5 group-hover:scale-110 transition-transform" />
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;