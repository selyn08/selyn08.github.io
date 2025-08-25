import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { CheckCircle, Home } from "lucide-react";

const Confirmation = () => {
  return (
    <div className="min-h-screen pt-20 px-4 bg-gradient-hero flex items-center">
      <div className="max-w-2xl mx-auto w-full">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <Card className="selyn-card">
            <CardContent className="pt-16 pb-16 px-8">
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: 0.3, type: "spring", stiffness: 200 }}
                className="w-20 h-20 bg-gradient-selyn rounded-full flex items-center justify-center mx-auto mb-8"
              >
                <CheckCircle className="h-10 w-10 text-white" />
              </motion.div>
              
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
                className="text-4xl font-bold text-gradient-selyn mb-6"
              >
                Commande Confirmée !
              </motion.h1>
              
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.7 }}
                className="text-xl text-muted-foreground mb-8"
              >
                Merci pour votre confiance. Vous recevrez un email de confirmation dans quelques minutes.
              </motion.p>
              
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.9 }}
                className="space-y-4"
              >
                <Button asChild size="lg" className="btn-selyn w-full sm:w-auto">
                  <Link to="/">
                    <Home className="mr-2 h-5 w-5" />
                    Retour à l'accueil
                  </Link>
                </Button>
              </motion.div>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </div>
  );
};

export default Confirmation;