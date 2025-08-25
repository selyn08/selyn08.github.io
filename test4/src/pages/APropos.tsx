import { Card, CardContent } from "@/components/ui/card";
import { motion } from "framer-motion";
import { Target, Users, Award, Globe } from "lucide-react";

const APropos = () => {
  const milestones = [
    { year: "2020", title: "Fondation", description: "Création de SELYN avec une vision claire" },
    { year: "2021", title: "Premiers clients", description: "100 entreprises nous font confiance" },
    { year: "2022", title: "Expansion", description: "Ouverture du premier espace de coworking" },
    { year: "2023", title: "Innovation", description: "Lancement de la suite digitale complète" },
    { year: "2024", title: "Croissance", description: "Plus de 500 entreprises accompagnées" }
  ];

  const values = [
    {
      icon: <Target className="h-8 w-8 text-primary" />,
      title: "Excellence",
      description: "Nous visons l'excellence dans chaque projet"
    },
    {
      icon: <Users className="h-8 w-8 text-primary" />,
      title: "Collaboration", 
      description: "Le succès naît de la collaboration"
    },
    {
      icon: <Award className="h-8 w-8 text-primary" />,
      title: "Innovation",
      description: "Toujours à la pointe de l'innovation"
    },
    {
      icon: <Globe className="h-8 w-8 text-primary" />,
      title: "Impact",
      description: "Créer un impact positif durable"
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
          À Propos de SELYN
        </motion.h1>

        {/* Mission */}
        <motion.section
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="text-center mb-20"
        >
          <p className="text-2xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
            SELYN accompagne les entrepreneurs et entreprises dans leur transformation digitale 
            et leur croissance grâce à un écosystème complet de services et d'espaces de travail.
          </p>
        </motion.section>

        {/* Timeline */}
        <section className="mb-20">
          <h2 className="text-4xl font-bold text-center mb-16 text-gradient-selyn">Notre Histoire</h2>
          <div className="space-y-8">
            {milestones.map((milestone, index) => (
              <motion.div
                key={milestone.year}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                className={`flex items-center ${index % 2 === 0 ? 'justify-start' : 'justify-end'}`}
              >
                <Card className="selyn-card max-w-md">
                  <CardContent className="pt-6">
                    <div className="flex items-center gap-4">
                      <div className="w-16 h-16 bg-gradient-selyn rounded-full flex items-center justify-center text-white font-bold text-xl">
                        {milestone.year}
                      </div>
                      <div>
                        <h3 className="text-xl font-bold text-gradient-selyn">{milestone.title}</h3>
                        <p className="text-muted-foreground">{milestone.description}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Values */}
        <section>
          <h2 className="text-4xl font-bold text-center mb-16 text-gradient-selyn">Nos Valeurs</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <Card className="selyn-card text-center h-full">
                  <CardContent className="pt-8">
                    <div className="flex justify-center mb-4">
                      {value.icon}
                    </div>
                    <h3 className="text-xl font-bold mb-4 text-gradient-selyn">{value.title}</h3>
                    <p className="text-muted-foreground">{value.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
};

export default APropos;