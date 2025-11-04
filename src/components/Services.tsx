import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Briefcase, PieChart, FileText, Globe, Home, Heart } from "lucide-react";

const services = [
  {
    icon: Briefcase,
    title: "Planejamento Financeiro",
    description: "Análise completa da sua situação financeira com estratégias personalizadas para alcançar seus objetivos."
  },
  {
    icon: PieChart,
    title: "Gestão de Investimentos",
    description: "Alocação estratégica de ativos com diversificação global e monitoramento contínuo."
  },
  {
    icon: FileText,
    title: "Planejamento Sucessório",
    description: "Estruturação patrimonial para garantir a transmissão eficiente do seu legado."
  },
  {
    icon: Globe,
    title: "Investimentos Internacionais",
    description: "Acesso aos melhores mercados e produtos de investimento ao redor do mundo."
  },
  {
    icon: Home,
    title: "Planejamento Imobiliário",
    description: "Estratégias para investimentos em imóveis e gestão do patrimônio imobiliário."
  },
  {
    icon: Heart,
    title: "Proteção Patrimonial",
    description: "Seguros e estruturas para proteger seu patrimônio e sua família."
  }
];

const Services = () => {
  return (
    <section id="servicos" className="py-24" style={{ backgroundColor: '#0f1921' }}>
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <div className="inline-block w-16 h-1 bg-primary mb-6" />
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Nossos <span className="text-primary">Serviços</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Soluções completas para gestão e crescimento do seu patrimônio
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
          {services.map((service, index) => (
            <Card 
              key={index}
              className="bg-card border-border hover:border-primary/50 transition-all duration-300 hover:shadow-[0_0_20px_rgba(0,191,255,0.15)] group animate-fade-in-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardHeader>
                <div className="w-14 h-14 rounded-lg bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                  <service.icon className="w-7 h-7 text-primary" />
                </div>
                <CardTitle className="text-xl">{service.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  {service.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
