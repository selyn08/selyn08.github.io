import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Check, Star, ArrowRight } from "lucide-react";

const PricingSection = () => {
  const plans = [
    {
      name: "Panier 0",
      price: "0",
      period: "Gratuit",
      description: "Découverte",
      badge: null,
      features: [
        "1ère consultation gratuite",
        "1 module SELYN Suite (1 mois)",
        "1h/semaine de coworking",
        "Profil publié 15 jours",
        "Participation aux événements"
      ],
      cta: "Commencer",
      variant: "outline" as const
    },
    {
      name: "Panier 1",
      price: "3 000",
      period: "DH HT / Mois",
      description: "Accompagnement Continu",
      badge: "Populaire",
      features: [
        "Gestion de projet, RH, pré-comptabilité",
        "Modules SELYN Suite (compta, tréso)",
        "Coworking quotidien",
        "Salle de réunion 1h/semaine",
        "Services de secrétariat"
      ],
      cta: "Choisir cette offre",
      variant: "default" as const
    },
    {
      name: "Panier 2",
      price: "10 000",
      period: "DH HT / Trimestre",
      description: "Solution Complète",
      badge: "Personnalisé",
      features: [
        "Étude et suivi de projets",
        "RH, optimisation, modules avancés",
        "Accès coworking 2 pers.",
        "Salle de réunion 3h/semaine",
        "Secrétariat inclus"
      ],
      cta: "Nous Contacter",
      variant: "secondary" as const
    }
  ];

  return (
    <section id="pricing" className="py-24 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            Nos{" "}
            <span className="bg-gradient-primary bg-clip-text text-transparent">
              Offres & Tarifs
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Des solutions adaptées à chaque étape de votre croissance, 
            avec la flexibilité de faire évoluer votre offre selon vos besoins.
          </p>
        </div>

        {/* Pricing Grid */}
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {plans.map((plan, index) => (
            <Card 
              key={index}
              className={`relative group hover:shadow-elegant transition-all duration-300 hover:-translate-y-2 ${
                plan.badge === "Populaire" 
                  ? "border-2 border-primary shadow-glow scale-105" 
                  : "bg-gradient-card border-0"
              }`}
            >
              {/* Badge */}
              {plan.badge && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <Badge 
                    className={`px-4 py-1 ${
                      plan.badge === "Populaire" 
                        ? "bg-gradient-primary text-white" 
                        : "bg-secondary text-secondary-foreground"
                    }`}
                  >
                    {plan.badge === "Populaire" && <Star className="w-3 h-3 mr-1" />}
                    {plan.badge}
                  </Badge>
                </div>
              )}

              <CardHeader className="text-center pb-8">
                <CardTitle className="text-2xl mb-2">{plan.name}</CardTitle>
                <CardDescription className="text-base mb-4">{plan.description}</CardDescription>
                
                <div className="mb-4">
                  <span className="text-4xl md:text-5xl font-bold text-primary">
                    {plan.price}
                  </span>
                  {plan.price !== "0" && (
                    <span className="text-muted-foreground ml-1">DH</span>
                  )}
                </div>
                <p className="text-muted-foreground">{plan.period}</p>
              </CardHeader>

              <CardContent className="pt-0">
                <ul className="space-y-4 mb-8">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-start gap-3">
                      <Check className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                      <span className="text-muted-foreground">{feature}</span>
                    </li>
                  ))}
                </ul>

                <Button 
                  variant={plan.variant}
                  className={`w-full group/btn text-lg py-6 ${
                    plan.variant === "default" 
                      ? "bg-gradient-primary hover:shadow-glow" 
                      : ""
                  }`}
                >
                  {plan.cta}
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover/btn:translate-x-1" />
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Additional Info */}
        <div className="text-center mt-16 p-8 bg-muted/50 rounded-2xl">
          <h3 className="text-2xl font-bold mb-4">
            Besoin d'une solution sur mesure ?
          </h3>
          <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
            Nos experts sont là pour concevoir une offre parfaitement adaptée à vos besoins spécifiques 
            et à votre secteur d'activité.
          </p>
          <Button size="lg" variant="outline" className="hover:bg-primary hover:text-primary-foreground">
            Planifier un entretien
          </Button>
        </div>
      </div>
    </section>
  );
};

export default PricingSection;