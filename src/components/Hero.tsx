import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import ContactDialog from "./ContactDialog";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div 
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: "url('/hero-wealth.jpg')",
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat'
        }}
      >
        <div className="absolute inset-0 bg-slate-900/80" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(0,191,255,0.1),transparent_50%)]" />
      </div>
      
      <div className="container mx-auto px-4 py-32 relative z-10">
        <div className="max-w-4xl mx-auto text-center space-y-8 animate-fade-in-up">
          <h1 className="text-5xl md:text-7xl font-bold leading-tight">
            <span className="text-foreground">Lucas FII Wealth:</span>
            <br />
            <span className="text-primary">gestão de patrimônio personalizada</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-muted-foreground max-w-2xl mx-auto">
            Planejamento financeiro, investimentos sob medida e estratégias de proteção para crescer e preservar seus ativos.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-8">
            <ContactDialog>
              <Button variant="hero" size="lg" className="group">
                Fale com nossa equipe
                <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
            </ContactDialog>
            <Button 
              variant="outline" 
              size="lg" 
              className="border-primary/30 hover:border-primary"
              onClick={() => document.getElementById('sobre')?.scrollIntoView({ behavior: 'smooth' })}
            >
              Saiba mais
            </Button>
          </div>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 rounded-full border-2 border-primary/50 flex justify-center p-2">
          <div className="w-1 h-3 rounded-full bg-primary animate-pulse" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
