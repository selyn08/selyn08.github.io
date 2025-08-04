import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Badge } from "@/components/ui/badge";
import { 
  MapPin, 
  Phone, 
  Mail, 
  Clock,
  Send,
  MessageCircle,
  Calendar
} from "lucide-react";

const ContactSection = () => {
  const contactInfo = [
    {
      icon: MapPin,
      title: "Adresse",
      details: ["123 Avenue Mohammed V", "Casablanca, Maroc"],
      color: "text-blue-600"
    },
    {
      icon: Phone,
      title: "Téléphone",
      details: ["+212 5 22 XX XX XX", "+212 6 XX XX XX XX"],
      color: "text-green-600"
    },
    {
      icon: Mail,
      title: "Email",
      details: ["contact@selyn.ma", "info@selyn.ma"],
      color: "text-purple-600"
    },
    {
      icon: Clock,
      title: "Horaires",
      details: ["Lun - Ven: 9h - 18h", "Sam: 9h - 12h"],
      color: "text-orange-600"
    }
  ];

  return (
    <section id="contact" className="py-24 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <Badge className="mb-4 bg-gradient-primary text-white">
            Parlons de votre projet
          </Badge>
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            Contactez{" "}
            <span className="bg-gradient-primary bg-clip-text text-transparent">
              Nos Experts
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Prêt à transformer votre entreprise ? Notre équipe d'experts est là pour vous accompagner 
            dans chaque étape de votre projet.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Contact Form */}
          <Card className="bg-gradient-card border-0 shadow-elegant">
            <CardHeader>
              <CardTitle className="text-2xl flex items-center gap-2">
                <MessageCircle className="h-6 w-6 text-primary" />
                Envoyez-nous un message
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="text-sm font-medium text-foreground mb-2 block">
                    Prénom *
                  </label>
                  <Input placeholder="Votre prénom" className="h-12" />
                </div>
                <div>
                  <label className="text-sm font-medium text-foreground mb-2 block">
                    Nom *
                  </label>
                  <Input placeholder="Votre nom" className="h-12" />
                </div>
              </div>
              
              <div>
                <label className="text-sm font-medium text-foreground mb-2 block">
                  Email *
                </label>
                <Input type="email" placeholder="votre.email@exemple.com" className="h-12" />
              </div>
              
              <div>
                <label className="text-sm font-medium text-foreground mb-2 block">
                  Téléphone
                </label>
                <Input placeholder="+212 X XX XX XX XX" className="h-12" />
              </div>
              
              <div>
                <label className="text-sm font-medium text-foreground mb-2 block">
                  Entreprise
                </label>
                <Input placeholder="Nom de votre entreprise" className="h-12" />
              </div>
              
              <div>
                <label className="text-sm font-medium text-foreground mb-2 block">
                  Message *
                </label>
                <Textarea 
                  placeholder="Décrivez votre projet et vos besoins..."
                  className="min-h-[120px] resize-none"
                />
              </div>
              
              <Button className="w-full bg-gradient-primary hover:shadow-glow text-lg py-6 group">
                <Send className="mr-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
                Envoyer le message
              </Button>
            </CardContent>
          </Card>

          {/* Contact Information */}
          <div className="space-y-8">
            {/* Contact Cards */}
            <div className="grid gap-6">
              {contactInfo.map((info, index) => (
                <Card key={index} className="group hover:shadow-card transition-all duration-300 hover:-translate-y-1 bg-gradient-card border-0">
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <div className={`w-12 h-12 rounded-full bg-gradient-primary p-3 flex items-center justify-center group-hover:shadow-glow transition-all duration-300`}>
                        <info.icon className="h-6 w-6 text-white" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-foreground mb-2">{info.title}</h3>
                        {info.details.map((detail, detailIndex) => (
                          <p key={detailIndex} className="text-muted-foreground">
                            {detail}
                          </p>
                        ))}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* CTA Cards */}
            <div className="space-y-4">
              <Card className="bg-gradient-primary text-white border-0 hover:shadow-glow transition-all duration-300 cursor-pointer group">
                <CardContent className="p-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <h3 className="font-semibold mb-1">Consultation gratuite</h3>
                      <p className="text-white/90 text-sm">30 minutes avec nos experts</p>
                    </div>
                    <Calendar className="h-8 w-8 text-white group-hover:scale-110 transition-transform" />
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-secondary text-secondary-foreground border-0 hover:shadow-card transition-all duration-300 cursor-pointer group">
                <CardContent className="p-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <h3 className="font-semibold mb-1">Visite de nos locaux</h3>
                      <p className="text-secondary-foreground/80 text-sm">Découvrez notre espace coworking</p>
                    </div>
                    <MapPin className="h-8 w-8 text-secondary-foreground group-hover:scale-110 transition-transform" />
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;