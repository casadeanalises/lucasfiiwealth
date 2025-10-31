import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import advisoryImage from "@/assets/advisory-team.jpg";
import ContactDialog from "./ContactDialog";

const CTA = () => {
  return (
    <section id="contato" className="py-24 bg-secondary/30">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6 animate-fade-in">
              <div className="inline-block w-16 h-1 bg-primary mb-2" />
              <h2 className="text-4xl md:text-5xl font-bold leading-tight">
                Pronto para transformar a gestão do seu <span className="text-primary">patrimônio?</span>
              </h2>
              <p className="text-xl text-muted-foreground">
                Nossa equipe de especialistas está pronta para desenvolver uma estratégia personalizada para você.
              </p>
              <div className="pt-4">
                <ContactDialog>
                  <Button variant="hero" size="lg" className="group">
                    Agendar consulta
                    <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </ContactDialog>
              </div>
            </div>

            <div className="relative animate-fade-in-up">
              <div className="absolute inset-0 bg-primary/20 rounded-2xl blur-3xl" />
              <img 
                src={advisoryImage} 
                alt="Equipe de consultoria" 
                className="relative rounded-2xl shadow-2xl border border-border"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTA;
