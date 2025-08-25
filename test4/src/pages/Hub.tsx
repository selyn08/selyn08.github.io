import { Suspense, useRef, useState } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Points, PointMaterial } from "@react-three/drei";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import * as random from "maath/random/dist/maath-random.esm";
import { 
  Monitor, 
  Users, 
  Coffee, 
  Wifi, 
  Calendar,
  BarChart3,
  UserPlus,
  Building2,
  ArrowRight,
  Play,
  Check
} from "lucide-react";

// Floating particles component
function Particles(props: any) {
  const ref = useRef<any>();
  const [sphere] = useState(() => random.inSphere(new Float32Array(5000), { radius: 1.5 }));

  useFrame((state, delta) => {
    ref.current.rotation.x -= delta / 10;
    ref.current.rotation.y -= delta / 15;
  });

  return (
    <group rotation={[0, 0, Math.PI / 4]}>
      <Points ref={ref} positions={sphere} stride={3} frustumCulled={false} {...props}>
        <PointMaterial transparent color="#4CA771" size={0.005} sizeAttenuation={true} depthWrite={false} />
      </Points>
    </group>
  );
}

const Hub = () => {
  const suiteModules = [
    {
      icon: <BarChart3 className="h-8 w-8 text-primary" />,
      title: "Finance & Comptabilité",
      description: "Gestion financière complète, facturation automatisée, tableaux de bord"
    },
    {
      icon: <UserPlus className="h-8 w-8 text-primary" />,
      title: "Ressources Humaines",
      description: "Gestion des talents, paie, formation et évaluation des performances"
    },
    {
      icon: <Users className="h-8 w-8 text-primary" />,
      title: "CRM & Ventes",
      description: "Relation client, pipeline commercial, automatisation marketing"
    }
  ];

  const workspaceFeatures = [
    {
      icon: <Building2 className="h-6 w-6" />,
      title: "Bureaux Privatifs",
      description: "Espaces dédiés de 10 à 50 personnes"
    },
    {
      icon: <Coffee className="h-6 w-6" />,
      title: "Espaces Coworking",
      description: "Open space collaboratif et flexible"
    },
    {
      icon: <Calendar className="h-6 w-6" />,
      title: "Salles de Réunion",
      description: "Espaces équipés pour vos présentations"
    },
    {
      icon: <Wifi className="h-6 w-6" />,
      title: "Connectivité Premium",
      description: "Fibre optique haut débit et WiFi 6"
    }
  ];

  return (
    <div className="relative min-h-screen">
      {/* Hero Section with Particles */}
      <section className="hero-section relative overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Canvas camera={{ position: [0, 0, 1] }}>
            <Suspense fallback={null}>
              <Particles />
            </Suspense>
          </Canvas>
        </div>
        
        <div className="hero-content relative z-10">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="hero-title"
          >
            SELYN Hub
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="hero-subtitle"
          >
            Suite digitale intégrée et espaces de coworking modernes pour une productivité maximale
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <Button asChild size="lg" className="btn-selyn">
              <Link to="/offres">
                Découvrir nos solutions <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </motion.div>
        </div>
      </section>

      {/* Hub Sections */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <Tabs defaultValue="digital" className="w-full">
            <TabsList className="grid w-full grid-cols-2 mb-16">
              <TabsTrigger value="digital" className="text-lg py-4">
                <Monitor className="mr-2 h-5 w-5" />
                Hub Digital (Suite)
              </TabsTrigger>
              <TabsTrigger value="physical" className="text-lg py-4">
                <Building2 className="mr-2 h-5 w-5" />
                Hub Physique (Workspaces)
              </TabsTrigger>
            </TabsList>

            {/* Digital Hub */}
            <TabsContent value="digital" className="space-y-16">
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                className="text-center mb-12"
              >
                <h2 className="text-4xl font-bold text-gradient-selyn mb-6">
                  Suite Digitale Complète
                </h2>
                <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                  Tous les outils dont vous avez besoin pour gérer et développer votre entreprise dans une seule plateforme
                </p>
              </motion.div>

              {/* Demo Video Placeholder */}
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                className="relative bg-gradient-selyn rounded-2xl p-8 text-white text-center mb-16"
              >
                <div className="aspect-video bg-white/10 rounded-xl flex items-center justify-center mb-6">
                  <div className="text-center">
                    <Play className="h-16 w-16 mx-auto mb-4 opacity-80" />
                    <p className="text-lg">Démonstration de la Suite SELYN</p>
                  </div>
                </div>
                <Button variant="secondary" size="lg">
                  <Link to="/contact">Demander une démo</Link>
                </Button>
              </motion.div>

              {/* Suite Modules */}
              <div className="grid md:grid-cols-3 gap-8">
                {suiteModules.map((module, index) => (
                  <motion.div
                    key={module.title}
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                  >
                    <Card className="selyn-card h-full">
                      <CardHeader>
                        <div className="flex items-center gap-3 mb-4">
                          {module.icon}
                          <CardTitle className="text-xl">{module.title}</CardTitle>
                        </div>
                      </CardHeader>
                      <CardContent>
                        <CardDescription className="text-base mb-4">
                          {module.description}
                        </CardDescription>
                        <ul className="space-y-2">
                          <li className="flex items-center gap-2 text-sm">
                            <Check className="h-4 w-4 text-primary" />
                            <span>Interface intuitive</span>
                          </li>
                          <li className="flex items-center gap-2 text-sm">
                            <Check className="h-4 w-4 text-primary" />
                            <span>Rapports automatisés</span>
                          </li>
                          <li className="flex items-center gap-2 text-sm">
                            <Check className="h-4 w-4 text-primary" />
                            <span>Intégration complète</span>
                          </li>
                        </ul>
                      </CardContent>
                    </Card>
                  </motion.div>
                ))}
              </div>
            </TabsContent>

            {/* Physical Hub */}
            <TabsContent value="physical" className="space-y-16">
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                className="text-center mb-12"
              >
                <h2 className="text-4xl font-bold text-gradient-selyn mb-6">
                  Espaces de Travail Modernes
                </h2>
                <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                  Environnements de travail flexibles et connectés pour optimiser votre productivité
                </p>
              </motion.div>

              {/* Workspace Features */}
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                {workspaceFeatures.map((feature, index) => (
                  <motion.div
                    key={feature.title}
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                  >
                    <Card className="selyn-card text-center h-full">
                      <CardHeader>
                        <div className="flex justify-center mb-3">
                          <div className="w-12 h-12 bg-gradient-selyn rounded-full flex items-center justify-center text-white">
                            {feature.icon}
                          </div>
                        </div>
                        <CardTitle className="text-lg">{feature.title}</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <CardDescription className="text-base">
                          {feature.description}
                        </CardDescription>
                      </CardContent>
                    </Card>
                  </motion.div>
                ))}
              </div>

              {/* Gallery Placeholder */}
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                className="grid md:grid-cols-3 gap-6 mt-16"
              >
                {[1, 2, 3].map((i) => (
                  <div key={i} className="aspect-square bg-gradient-selyn/20 rounded-xl flex items-center justify-center">
                    <span className="text-muted-foreground">Photo {i}</span>
                  </div>
                ))}
              </motion.div>
            </TabsContent>
          </Tabs>
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
            Rejoignez l'Écosystème SELYN Hub
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-xl text-white/90 mb-8"
          >
            Réservez votre espace ou demandez une démonstration de notre suite
          </motion.p>
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <Button asChild size="lg" variant="secondary">
              <Link to="/contact">Réserver un espace</Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="bg-white text-primary hover:bg-white/90">
              <Link to="/contact">Demander une démo</Link>
            </Button>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Hub;