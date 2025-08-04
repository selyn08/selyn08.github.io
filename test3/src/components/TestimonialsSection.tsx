import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Star, Quote } from "lucide-react";

const TestimonialsSection = () => {
  const testimonials = [
    {
      name: "Sarah Benali",
      role: "CEO",
      company: "TechStart Morocco",
      image: "https://i.pravatar.cc/100?img=1",
      content: "L'accompagnement de SELYN a été déterminant dans notre croissance. Leur approche intégrée nous a permis de structurer notre entreprise tout en gardant notre agilité.",
      rating: 5
    },
    {
      name: "Mohamed Alami",
      role: "Directeur Général",
      company: "InnovCorp",
      image: "https://i.pravatar.cc/100?img=2", 
      content: "La SELYN Suite a révolutionné notre gestion quotidienne. Avoir tous nos processus centralisés nous fait gagner un temps précieux et améliore notre efficacité.",
      rating: 5
    },
    {
      name: "Fatima Zahra",
      role: "Fondatrice",
      company: "EcoSolutions",
      image: "https://i.pravatar.cc/100?img=3",
      content: "L'espace coworking de SELYN offre un environnement stimulant. Les connexions que j'y ai faites ont ouvert de nouvelles opportunités business inattendues.",
      rating: 5
    },
    {
      name: "Ahmed Filali",
      role: "Directeur Innovation",
      company: "DigitalGroup",
      image: "https://i.pravatar.cc/100?img=4",
      content: "Le niveau d'expertise des consultants SELYN est exceptionnel. Ils comprennent vraiment les enjeux de transformation digitale au Maroc.",
      rating: 5
    },
    {
      name: "Leila Ouali",
      role: "Entrepreneure",
      company: "CreativeHub",
      image: "https://i.pravatar.cc/100?img=5",
      content: "Depuis que nous utilisons les services SELYN, notre startup a triplé son chiffre d'affaires. Leur accompagnement sur mesure fait vraiment la différence.",
      rating: 5
    },
    {
      name: "Youssef Tazi",
      role: "CTO",
      company: "DataFlow",
      image: "https://i.pravatar.cc/100?img=6",
      content: "L'écosystème SELYN nous permet de nous concentrer sur notre cœur de métier tout en bénéficiant d'un support complet pour notre développement.",
      rating: 5
    }
  ];

  return (
    <section className="py-24 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <Badge className="mb-4 bg-gradient-primary text-white">
            Témoignages clients
          </Badge>
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            Communauté &{" "}
            <span className="bg-gradient-primary bg-clip-text text-transparent">
              Réseautage
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Découvrez les retours de nos clients qui ont transformé leur vision 
            en succès grâce à notre écosystème intégré.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card 
              key={index}
              className="group hover:shadow-elegant transition-all duration-300 hover:-translate-y-1 bg-gradient-card border-0 relative overflow-hidden"
            >
              {/* Quote Icon */}
              <div className="absolute top-4 right-4 text-primary/20">
                <Quote className="h-8 w-8" />
              </div>

              <CardContent className="p-6">
                {/* Rating */}
                <div className="flex space-x-1 mb-4">
                  {Array.from({ length: testimonial.rating }).map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-current text-secondary" />
                  ))}
                </div>

                {/* Content */}
                <blockquote className="text-muted-foreground mb-6 leading-relaxed">
                  "{testimonial.content}"
                </blockquote>

                {/* Author */}
                <div className="flex items-center gap-4">
                  <img 
                    src={testimonial.image} 
                    alt={testimonial.name}
                    className="w-12 h-12 rounded-full object-cover border-2 border-primary/20"
                  />
                  <div>
                    <div className="font-semibold text-foreground">{testimonial.name}</div>
                    <div className="text-sm text-muted-foreground">
                      {testimonial.role} • {testimonial.company}
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Stats Section */}
        <div className="mt-16 pt-16 border-t border-border">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div className="group">
              <div className="text-3xl md:text-4xl font-bold text-primary mb-2 group-hover:scale-110 transition-transform">
                4.9/5
              </div>
              <p className="text-muted-foreground">Note moyenne</p>
            </div>
            <div className="group">
              <div className="text-3xl md:text-4xl font-bold text-primary mb-2 group-hover:scale-110 transition-transform">
                500+
              </div>
              <p className="text-muted-foreground">Avis clients</p>
            </div>
            <div className="group">
              <div className="text-3xl md:text-4xl font-bold text-primary mb-2 group-hover:scale-110 transition-transform">
                95%
              </div>
              <p className="text-muted-foreground">Clients satisfaits</p>
            </div>
            <div className="group">
              <div className="text-3xl md:text-4xl font-bold text-primary mb-2 group-hover:scale-110 transition-transform">
                200%
              </div>
              <p className="text-muted-foreground">Croissance moyenne</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;