import { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight, Users, Building, Lightbulb } from "lucide-react";

// Three.js animated background component
function AnimatedPlane() {
  return (
    <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, -2, 0]}>
      <planeGeometry args={[20, 20, 32, 32]} />
      <meshStandardMaterial color="#4CA771" wireframe opacity={0.3} transparent />
    </mesh>
  );
}

const Home = () => {
  return (
    <div className="relative min-h-screen">
      {/* Three.js Background */}
      <div className="absolute inset-0 z-0">
        <Canvas camera={{ position: [0, 5, 5] }}>
          <Suspense fallback={null}>
            <ambientLight intensity={0.5} />
            <pointLight position={[10, 10, 10]} />
            <AnimatedPlane />
            <OrbitControls enableZoom={false} enablePan={false} />
          </Suspense>
        </Canvas>
      </div>

      {/* Hero Section */}
      <section className="hero-section relative z-10">
        <div className="hero-content">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="hero-title"
          >
            SELYN Business Center
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="hero-subtitle"
          >
            Conseil expert, Hub digital innovant, Espaces de travail modernes.
            Accompagnons ensemble votre réussite entrepreneuriale.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <Button asChild size="lg" className="btn-selyn">
              <Link to="/offres">
                Découvrir nos offres <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
            <Button asChild variant="outline" size="lg" className="bg-white/80">
              <Link to="/contact">Nous contacter</Link>
            </Button>
          </motion.div>
        </div>
      </section>

      {/* Three Pillars Section */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <motion.h2
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="text-4xl font-bold text-center mb-16 text-gradient-selyn"
          >
            Nos Trois Piliers
          </motion.h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: <Lightbulb className="h-12 w-12 text-primary" />,
                title: "SELYN Conseil",
                description: "Expertise stratégique et accompagnement personnalisé pour votre croissance",
                link: "/conseil"
              },
              {
                icon: <Building className="h-12 w-12 text-primary" />,
                title: "SELYN Hub",
                description: "Suite digitale complète et espaces de coworking connectés",
                link: "/hub"
              },
              {
                icon: <Users className="h-12 w-12 text-primary" />,
                title: "SELYN Space",
                description: "Bureaux privatifs et espaces collaboratifs modernes",
                link: "/space"
              }
            ].map((pillar, index) => (
              <motion.div
                key={pillar.title}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
              >
                <Card className="selyn-card h-full group cursor-pointer">
                  <CardHeader className="text-center">
                    <div className="flex justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                      {pillar.icon}
                    </div>
                    <CardTitle className="text-xl text-gradient-selyn">{pillar.title}</CardTitle>
                  </CardHeader>
                  <CardContent className="text-center">
                    <CardDescription className="text-base mb-6">
                      {pillar.description}
                    </CardDescription>
                    <Button asChild variant="outline" className="w-full">
                      <Link to={pillar.link}>
                        En savoir plus <ArrowRight className="ml-2 h-4 w-4" />
                      </Link>
                    </Button>
                  </CardContent>
                </Card>
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
            Prêt à transformer votre entreprise ?
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-xl text-white/90 mb-8"
          >
            Rejoignez des centaines d'entrepreneurs qui nous font confiance
          </motion.p>
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <Button asChild size="lg" variant="secondary">
              <Link to="/offres">Voir nos tarifs</Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="bg-white text-primary hover:bg-white/90">
              <Link to="/communaute">Rejoindre la communauté</Link>
            </Button>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Home;