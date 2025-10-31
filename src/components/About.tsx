const About = () => {
  return (
    <section id="sobre" className="py-24 bg-secondary/30">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12 animate-fade-in">
            <div className="inline-block w-16 h-1 bg-primary mb-6" />
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              O que é <span className="text-primary">Lucas FII Wealth?</span>
            </h2>
          </div>
          
          <div className="bg-card rounded-2xl p-8 md:p-12 shadow-2xl border border-border animate-fade-in-up">
            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed text-center">
              Lucas FII Wealth é uma abordagem completa de gestão de patrimônio que une 
              <span className="text-primary font-semibold"> planejamento financeiro</span>, 
              <span className="text-primary font-semibold"> investimentos personalizados</span> e 
              <span className="text-primary font-semibold"> estratégias de proteção</span> para 
              crescer e preservar seus ativos ao longo do tempo.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
