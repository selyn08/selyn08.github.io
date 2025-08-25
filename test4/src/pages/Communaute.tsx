import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Calendar, MapPin, Users, MessageCircle } from "lucide-react";

const Communaute = () => {
  const events = [
    {
      title: "Networking Entrepreneurs",
      date: "15 Mars 2024",
      time: "18h00 - 20h00",
      location: "SELYN Space",
      attendees: 25
    },
    {
      title: "Workshop Digital Marketing",
      date: "22 Mars 2024", 
      time: "14h00 - 17h00",
      location: "En ligne",
      attendees: 45
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
          Communauté SELYN
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="text-xl text-center text-muted-foreground mb-16"
        >
          Rejoignez une communauté dynamique d'entrepreneurs et d'innovateurs
        </motion.p>

        {/* Events Section */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-gradient-selyn mb-8">Événements à venir</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {events.map((event, index) => (
              <motion.div
                key={event.title}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <Card className="selyn-card">
                  <CardHeader>
                    <CardTitle className="text-xl">{event.title}</CardTitle>
                    <div className="flex items-center gap-4 text-sm text-muted-foreground">
                      <div className="flex items-center gap-1">
                        <Calendar className="h-4 w-4" />
                        {event.date}
                      </div>
                      <div className="flex items-center gap-1">
                        <MapPin className="h-4 w-4" />
                        {event.location}
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <Users className="h-4 w-4 text-primary" />
                        <span className="text-sm">{event.attendees} participants</span>
                      </div>
                      <Button size="sm" className="btn-selyn">
                        S'inscrire
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Community Wall */}
        <section>
          <h2 className="text-3xl font-bold text-gradient-selyn mb-8">Mur de la communauté</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[1, 2, 3, 4, 5, 6].map((post) => (
              <motion.div
                key={post}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: post * 0.1 }}
              >
                <Card className="selyn-card">
                  <CardContent className="pt-6">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="w-10 h-10 bg-gradient-selyn rounded-full"></div>
                      <div>
                        <p className="font-semibold">Membre #{post}</p>
                        <p className="text-sm text-muted-foreground">Il y a 2h</p>
                      </div>
                    </div>
                    <p className="text-sm mb-4">
                      Partage d'expérience ou question de la communauté...
                    </p>
                    <div className="flex items-center gap-4 text-sm text-muted-foreground">
                      <Button variant="ghost" size="sm">
                        <MessageCircle className="h-4 w-4 mr-1" />
                        5 commentaires
                      </Button>
                    </div>
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

export default Communaute;