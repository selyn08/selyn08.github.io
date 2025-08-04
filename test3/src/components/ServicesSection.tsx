import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { 
  Brain, 
  Laptop, 
  Building, 
  TrendingUp, 
  Users, 
  Database,
  Coffee,
  Calendar,
  ArrowRight
} from "lucide-react";

const ServicesSection = () => {
  const services = [
    {
      icon: Brain,
      title: "Consulting & Accompagnement",
      description: "Un accompagnement stratégique complet pour transformer vos ambitions en succès.",
      features: [
        "Étude & montage de projets",
        "Optimisation financière & fiscale", 
        "Stratégie RH & Formation",
        "Recherche de financement"
      ],
      color: "text-blue-600"
    },
    {
      icon: Laptop,
      title: "SELYN Suite – Super App SaaS", 
      description: "Pilotez toute votre entreprise depuis une seule plateforme évolutive et intelligente.",
      features: [
        "Gestion financière & comptable",
        "CRM, Ventes, Achats, Stock",
        "RH, Paie & Planification", 
        "Tableaux de bord en temps réel"
      ],
      color: "text-purple-600"
    },
    {
      icon: Building,
      title: "Espace Coworking",
      description: "Un environnement de travail moderne et connecté pour inspirer l'innovation.",
      features: [
        "25 postes en espace partagé",
        "8 bureaux privatifs équipés",
        "Salle de réunion & événements",
        "Services de secrétariat & cafétéria"
      ],
      color: "text-green-600"
    }
  ];

  return (
    <section id="services" className="py-24 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            Nos Pôles –{" "}
            <span className="bg-gradient-primary bg-clip-text text-transparent">
              Produits, Services & Solutions
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Une approche intégrée qui combine conseil expert, technologie avancée et espaces collaboratifs 
            pour accélérer votre transformation digitale.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {services.map((service, index) => (
            <Card 
              key={index} 
              className="group hover:shadow-elegant transition-all duration-300 hover:-translate-y-2 bg-gradient-card border-0"
            >
              <CardHeader className="text-center pb-4">
                <div className={`w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-primary p-4 flex items-center justify-center group-hover:shadow-glow transition-all duration-300`}>
                  <service.icon className="h-8 w-8 text-white" />
                </div>
                <CardTitle className="text-xl mb-2">{service.title}</CardTitle>
                <CardDescription className="text-base">{service.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3 mb-6">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-start gap-3">
                      <div className="w-2 h-2 rounded-full bg-primary mt-2 flex-shrink-0"></div>
                      <span className="text-muted-foreground">{feature}</span>
                    </li>
                  ))}
                </ul>
                <Button 
                  variant="outline" 
                  className="w-full group/btn hover:bg-primary hover:text-primary-foreground"
                >
                  En savoir plus
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover/btn:translate-x-1" />
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Stats Section */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          <div className="group">
            <div className="text-3xl md:text-4xl font-bold text-primary mb-2 group-hover:scale-110 transition-transform">500+</div>
            <p className="text-muted-foreground">Clients accompagnés</p>
          </div>
          <div className="group">
            <div className="text-3xl md:text-4xl font-bold text-primary mb-2 group-hover:scale-110 transition-transform">50+</div>
            <p className="text-muted-foreground">Modules SaaS</p>
          </div>
          <div className="group">
            <div className="text-3xl md:text-4xl font-bold text-primary mb-2 group-hover:scale-110 transition-transform">25</div>
            <p className="text-muted-foreground">Postes coworking</p>
          </div>
          <div className="group">
            <div className="text-3xl md:text-4xl font-bold text-primary mb-2 group-hover:scale-110 transition-transform">98%</div>
            <p className="text-muted-foreground">Satisfaction client</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;