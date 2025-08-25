import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { 
  MapPin, 
  Wifi, 
  Coffee, 
  Car,
  Shield,
  Clock,
  Users,
  Check,
  ArrowRight
} from "lucide-react";

const Space = () => {
  const services = [
    {
      icon: <Wifi className="h-6 w-6" />,
      title: "Internet Haut Débit",
      description: "Fibre optique 1Gb/s symétrique"
    },
    {
      icon: <Coffee className="h-6 w-6" />,
      title: "Espaces Détente",
      description: "Cafétéria, terrasse et espaces lounge"
    },
    {
      icon: <Car className="h-6 w-6" />,
      title: "Parking Gratuit",
      description: "Places sécurisées pour véhicules"
    },
    {
      icon: <Shield className="h-6 w-6" />,
      title: "Sécurité 24/7",
      description: "Accès contrôlé et vidéosurveillance"
    },
    {
      icon: <Clock className="h-6 w-6" />,
      title: "Accès 24/7",
      description: "Disponible selon votre forfait"
    },
    {
      icon: <Users className="h-6 w-6" />,
      title: "Salles de Réunion",
      description: "Équipées technologie moderne"
    }
  ];

  const pricingPlans = [
    {
      name: "Nomade",
      price: "29€",
      period: "/jour",
      description: "Parfait pour les freelances",
      features: [
        "Accès coworking 1 jour",
        "WiFi haut débit",
        "Café/thé illimité",
        "1h salle de réunion offerte"
      ],
      popular: false
    },
    {
      name: "Mensuel",
      price: "189€",
      period: "/mois",
      description: "Idéal pour les entrepreneurs",
      features: [
        "Accès coworking illimité",
        "Poste fixe dédié",
        "5h salles de réunion/mois",
        "Adresse de domiciliation",
        "Casier personnel"
      ],
      popular: true
    },
    {
      name: "Privatif",
      price: "À partir de 599€",
      period: "/mois",
      description: "Pour les équipes de 2-10 personnes",
      features: [
        "Bureau privé meublé",
        "Accès 24/7",
        "Salles de réunion illimitées",
        "Services de secrétariat",
        "Parking réservé"
      ],
      popular: false
    }
  ];

  return (
    <div className="relative min-h-screen">
      {/* Hero Section */}
      <section className="hero-section bg-gradient-hero">
        <div className="hero-content">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="hero-title"
          >
            SELYN Space
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="hero-subtitle"
          >
            Espaces de travail modernes et flexibles au cœur de la ville. Bureaux privatifs, coworking et salles de réunion équipées.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="flex items-center justify-center gap-2 text-muted-foreground mb-8"
          >
            <MapPin className="h-5 w-5 text-primary" />
            <span>Centre-ville, accès métro direct</span>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <Button asChild size="lg" className="btn-selyn">
              <Link to="/contact">
                Réserver une visite <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </motion.div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <motion.h2
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="text-4xl font-bold text-center mb-16 text-gradient-selyn"
          >
            Services & Équipements
          </motion.h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <Card className="selyn-card text-center h-full">
                  <CardHeader>
                    <div className="flex justify-center mb-4">
                      <div className="w-14 h-14 bg-gradient-selyn rounded-full flex items-center justify-center text-white">
                        {service.icon}
                      </div>
                    </div>
                    <CardTitle className="text-xl">{service.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-base">
                      {service.description}
                    </CardDescription>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-20 px-4 bg-selyn-light">
        <div className="max-w-6xl mx-auto">
          <motion.h2
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="text-4xl font-bold text-center mb-16 text-gradient-selyn"
          >
            Nos Formules
          </motion.h2>
          <div className="grid md:grid-cols-3 gap-8">
            {pricingPlans.map((plan, index) => (
              <motion.div
                key={plan.name}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="relative"
              >
                {plan.popular && (
                  <Badge className="absolute -top-3 left-1/2 -translate-x-1/2 bg-gradient-selyn text-white px-4 py-1">
                    Le plus populaire
                  </Badge>
                )}
                <Card className={`selyn-card h-full text-center ${plan.popular ? 'ring-2 ring-primary' : ''}`}>
                  <CardHeader>
                    <CardTitle className="text-2xl text-gradient-selyn">{plan.name}</CardTitle>
                    <div className="text-4xl font-bold text-foreground mt-4">
                      {plan.price}
                      <span className="text-lg font-normal text-muted-foreground">{plan.period}</span>
                    </div>
                    <CardDescription className="text-base mt-2">
                      {plan.description}
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    <ul className="space-y-3">
                      {plan.features.map((feature, i) => (
                        <li key={i} className="flex items-center gap-3">
                          <Check className="h-5 w-5 text-primary flex-shrink-0" />
                          <span className="text-sm">{feature}</span>
                        </li>
                      ))}
                    </ul>
                    <Button asChild className={`w-full ${plan.popular ? 'btn-selyn' : ''}`} variant={plan.popular ? 'default' : 'outline'}>
                      <Link to="/contact">
                        {plan.name === "Privatif" ? "Nous contacter" : "Réserver maintenant"}
                      </Link>
                    </Button>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <motion.h2
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="text-4xl font-bold text-center mb-16 text-gradient-selyn"
          >
            Découvrez Nos Espaces
          </motion.h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              "Espace Coworking Principal",
              "Bureau Privatif Type",
              "Salle de Réunion Premium",
              "Espace Détente & Café",
              "Cabines Phone Box",
              "Terrasse Extérieure"
            ].map((title, index) => (
              <motion.div
                key={title}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="relative group"
              >
                <div className="aspect-square bg-gradient-selyn/20 rounded-xl overflow-hidden cursor-pointer">
                  <div className="w-full h-full flex items-center justify-center text-muted-foreground group-hover:bg-gradient-selyn/30 transition-colors">
                    <span className="text-center px-4">{title}</span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 bg-gradient-selyn">
        <div className="max-w-4xl mx-auto text-center">
          <motion.h2
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="text-4xl font-bold text-white mb-6"
          >
            Visitez SELYN Space Dès Aujourd'hui
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-xl text-white/90 mb-8"
          >
            Découvrez nos espaces lors d'une visite guidée gratuite
          </motion.p>
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <Button asChild size="lg" variant="secondary">
              <Link to="/contact">Planifier une visite</Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="bg-white text-primary hover:bg-white/90">
              <Link to="/offres">Voir toutes nos offres</Link>
            </Button>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Space;