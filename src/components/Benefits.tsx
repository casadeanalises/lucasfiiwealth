import { Shield, Users, TrendingUp } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const benefits = [
  {
    icon: Shield,
    title: "Consultoria Independente",
    description: "Recomendações imparciais focadas exclusivamente nos seus objetivos financeiros, sem conflitos de interesse."
  },
  {
    icon: Users,
    title: "Atendimento Exclusivo",
    description: "Equipe dedicada que conhece profundamente seu perfil e suas necessidades, disponível sempre que precisar."
  },
  {
    icon: TrendingUp,
    title: "Carteiras Personalizadas",
    description: "Portfólios construídos sob medida para seu perfil de risco, objetivos e horizonte de investimento."
  }
];

const Benefits = () => {
  return (
    <section id="diferenciais" className="py-24">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <div className="inline-block w-16 h-1 bg-primary mb-6" />
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Benefícios da <span className="text-primary">Lucas FII Wealth</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Contamos com uma equipe especializada para trazer soluções personalizadas
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {benefits.map((benefit, index) => (
            <Card 
              key={index}
              className="bg-card border-border hover:border-primary/50 transition-all duration-300 hover:shadow-[0_0_30px_rgba(0,191,255,0.2)] group animate-fade-in-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardHeader>
                <div className="w-16 h-16 rounded-xl bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                  <benefit.icon className="w-8 h-8 text-primary" />
                </div>
                <CardTitle className="text-2xl">{benefit.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground leading-relaxed">
                  {benefit.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Benefits;
