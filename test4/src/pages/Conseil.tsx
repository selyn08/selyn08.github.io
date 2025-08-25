import { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { 
  TrendingUp, 
  Users, 
  Cog, 
  Target, 
  Briefcase,
  ArrowRight,
  CheckCircle
} from "lucide-react";

// Three.js rotating torus component
function RotatingTorus() {
  return (
    <mesh>
      <torusKnotGeometry args={[2, 0.6, 100, 16]} />
      <meshStandardMaterial color="#4CA771" wireframe />
    </mesh>
  );
}

const Conseil = () => {
  const expertises = [
    {
      icon: <TrendingUp className="h-8 w-8 text-primary" />,
      title: "Stratégie d'entreprise",
      description: "Élaboration de stratégies sur mesure pour accélérer votre croissance"
    },
    {
      icon: <Users className="h-8 w-8 text-primary" />,
      title: "Transformation organisationnelle",
      description: "Accompagnement dans la modernisation de vos processus internes"
    },
    {
      icon: <Cog className="h-8 w-8 text-primary" />,
      title: "Optimisation opérationnelle",
      description: "Amélioration de l'efficacité et réduction des coûts opérationnels"
    },
    {
      icon: <Target className="h-8 w-8 text-primary" />,
      title: "Développement commercial",
      description: "Stratégies de vente et expansion sur de nouveaux marchés"
    },
    {
      icon: <Briefcase className="h-8 w-8 text-primary" />,
      title: "Gestion financière",
      description: "Optimisation de la gestion financière et recherche de financement"
    }
  ];

  const stats = [
    { number: "500+", label: "Entreprises accompagnées" },
    { number: "95%", label: "Taux de satisfaction" },
    { number: "15+", label: "Années d'expérience" },
    { number: "50+", label: "Experts consultants" }
  ];

  return (
    <div className="relative min-h-screen">
      {/* Hero Section with Three.js */}
      <section className="hero-section relative overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Canvas camera={{ position: [0, 0, 5] }}>
            <Suspense fallback={null}>
              <ambientLight intensity={0.6} />
              <pointLight position={[10, 10, 10]} />
              <RotatingTorus />
            </Suspense>
          </Canvas>
        </div>
        
        <div className="hero-content relative z-10">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="hero-title"
          >
            SELYN Conseil
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="hero-subtitle"
          >
            Expertise stratégique et accompagnement personnalisé pour propulser votre entreprise vers le succès
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <Button asChild size="lg" className="btn-selyn">
              <Link to="/contact">
                Demander un audit <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </motion.div>
        </div>
      </section>

      {/* Expertises Section */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <motion.h2
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="text-4xl font-bold text-center mb-16 text-gradient-selyn"
          >
            Nos Domaines d'Expertise
          </motion.h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {expertises.map((expertise, index) => (
              <motion.div
                key={expertise.title}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <Card className="selyn-card h-full">
                  <CardHeader>
                    <div className="flex items-center gap-3">
                      {expertise.icon}
                      <CardTitle className="text-lg">{expertise.title}</CardTitle>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-base">
                      {expertise.description}
                    </CardDescription>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-gradient-selyn">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, scale: 0.5 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="text-center text-white"
              >
                <div className="text-4xl md:text-5xl font-bold mb-2">{stat.number}</div>
                <div className="text-sm md:text-base text-white/90">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <motion.h2
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="text-4xl font-bold text-center mb-16 text-gradient-selyn"
          >
            Notre Processus d'Accompagnement
          </motion.h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                step: "01",
                title: "Audit & Diagnostic",
                description: "Analyse approfondie de votre situation actuelle et identification des opportunités"
              },
              {
                step: "02",
                title: "Stratégie Sur-Mesure",
                description: "Élaboration d'un plan d'action personnalisé adapté à vos objectifs"
              },
              {
                step: "03",
                title: "Accompagnement",
                description: "Mise en œuvre et suivi des recommandations avec notre équipe d'experts"
              }
            ].map((process, index) => (
              <motion.div
                key={process.step}
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className="relative"
              >
                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 bg-gradient-selyn rounded-full flex items-center justify-center text-white font-bold text-lg mr-4">
                    {process.step}
                  </div>
                  <h3 className="text-2xl font-bold text-gradient-selyn">{process.title}</h3>
                </div>
                <p className="text-muted-foreground text-lg leading-relaxed">
                  {process.description}
                </p>
                {index < 2 && (
                  <div className="hidden md:block absolute top-6 -right-4 w-8 h-0.5 bg-gradient-selyn"></div>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 bg-selyn-light">
        <div className="max-w-4xl mx-auto text-center">
          <motion.h2
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="text-4xl font-bold text-gradient-selyn mb-6"
          >
            Transformons Ensemble Votre Vision en Réalité
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-xl text-muted-foreground mb-8"
          >
            Bénéficiez d'un audit gratuit de 30 minutes avec nos experts
          </motion.p>
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <Button asChild size="lg" className="btn-selyn">
              <Link to="/contact">
                <CheckCircle className="mr-2 h-5 w-5" />
                Réserver votre audit gratuit
              </Link>
            </Button>
            <Button asChild size="lg" variant="outline">
              <Link to="/offres">Voir nos tarifs</Link>
            </Button>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Conseil;