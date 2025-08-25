import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Check, ArrowRight } from "lucide-react";

const Offres = () => {
  const plans = [
    {
      name: "Freemium",
      price: "0€",
      period: "/mois",
      description: "Pour découvrir SELYN",
      features: ["Accès limité aux outils", "Support communautaire", "1 projet"],
      popular: false
    },
    {
      name: "Pro",
      price: "99€",
      period: "/mois",
      description: "Pour les professionnels",
      features: ["Tous les outils SELYN", "Support prioritaire", "Projets illimités", "Intégrations avancées"],
      popular: true
    },
    {
      name: "Business",
      price: "299€",
      period: "/mois",
      description: "Pour les équipes",
      features: ["Tout de Pro", "Gestion multi-utilisateurs", "Analytics avancés", "API complète"],
      popular: false
    },
    {
      name: "Personnalisée",
      price: "Sur devis",
      period: "",
      description: "Solutions sur mesure",
      features: ["Configuration personnalisée", "Support dédié", "Formation équipe", "Intégration complète"],
      popular: false
    }
  ];

  return (
    <div className="min-h-screen pt-20 px-4">
      <div className="max-w-6xl mx-auto py-20">
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-5xl font-bold text-center mb-8 text-gradient-selyn"
        >
          Nos Offres & Tarifs
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="text-xl text-center text-muted-foreground mb-16 max-w-3xl mx-auto"
        >
          Choisissez la formule qui correspond le mieux à vos besoins et votre budget
        </motion.p>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {plans.map((plan, index) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="relative"
            >
              {plan.popular && (
                <Badge className="absolute -top-3 left-1/2 -translate-x-1/2 bg-gradient-selyn text-white">
                  Recommandé
                </Badge>
              )}
              <Card className={`selyn-card h-full text-center ${plan.popular ? 'ring-2 ring-primary' : ''}`}>
                <CardHeader>
                  <CardTitle className="text-2xl text-gradient-selyn">{plan.name}</CardTitle>
                  <div className="text-3xl font-bold text-foreground mt-4">
                    {plan.price}
                    {plan.period && <span className="text-lg font-normal text-muted-foreground">{plan.period}</span>}
                  </div>
                  <p className="text-muted-foreground">{plan.description}</p>
                </CardHeader>
                <CardContent className="space-y-6">
                  <ul className="space-y-3">
                    {plan.features.map((feature, i) => (
                      <li key={i} className="flex items-center gap-3">
                        <Check className="h-4 w-4 text-primary" />
                        <span className="text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Button asChild className={`w-full ${plan.popular ? 'btn-selyn' : ''}`} variant={plan.popular ? 'default' : 'outline'}>
                    <Link to={`/checkout?plan=${plan.name.toLowerCase()}`}>
                      {plan.name === "Personnalisée" ? "Nous contacter" : "Choisir cette offre"}
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Offres;