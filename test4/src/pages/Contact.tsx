import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { motion } from "framer-motion";
import { MapPin, Phone, Mail, Clock } from "lucide-react";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  return (
    <div className="min-h-screen pt-20 px-4">
      <div className="max-w-6xl mx-auto py-20">
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-5xl font-bold text-center mb-16 text-gradient-selyn"
        >
          Contactez-nous
        </motion.h1>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
            className="space-y-8"
          >
            <Card className="selyn-card">
              <CardHeader>
                <CardTitle className="text-2xl text-gradient-selyn">Nos Coordonnées</CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="flex items-center gap-4">
                  <MapPin className="h-6 w-6 text-primary" />
                  <div>
                    <p className="font-semibold">Adresse</p>
                    <p className="text-muted-foreground">123 Avenue de l'Innovation<br />75001 Paris, France</p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <Phone className="h-6 w-6 text-primary" />
                  <div>
                    <p className="font-semibold">Téléphone</p>
                    <p className="text-muted-foreground">+33 1 23 45 67 89</p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <Mail className="h-6 w-6 text-primary" />
                  <div>
                    <p className="font-semibold">Email</p>
                    <p className="text-muted-foreground">contact@selyn.fr</p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <Clock className="h-6 w-6 text-primary" />
                  <div>
                    <p className="font-semibold">Horaires</p>
                    <p className="text-muted-foreground">Lun-Ven: 9h-18h<br />Sam: 9h-12h</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Map Placeholder */}
            <Card className="selyn-card">
              <CardContent className="pt-6">
                <div className="aspect-video bg-gradient-selyn/20 rounded-lg flex items-center justify-center">
                  <p className="text-muted-foreground">Google Maps Intégrée</p>
                </div>
              </CardContent>
            </Card>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4 }}
          >
            <Card className="selyn-card">
              <CardHeader>
                <CardTitle className="text-2xl text-gradient-selyn">Envoyez-nous un message</CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="name">Nom complet *</Label>
                    <Input id="name" placeholder="John Doe" required />
                  </div>
                  <div>
                    <Label htmlFor="email">Email *</Label>
                    <Input id="email" type="email" placeholder="john@example.com" required />
                  </div>
                </div>
                <div>
                  <Label htmlFor="subject">Sujet *</Label>
                  <Input id="subject" placeholder="Comment pouvons-nous vous aider ?" required />
                </div>
                <div>
                  <Label htmlFor="message">Message *</Label>
                  <Textarea 
                    id="message" 
                    placeholder="Décrivez votre projet ou votre question..." 
                    rows={6}
                    required 
                  />
                </div>
                <Button className="w-full btn-selyn" size="lg">
                  Envoyer le message
                </Button>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Contact;