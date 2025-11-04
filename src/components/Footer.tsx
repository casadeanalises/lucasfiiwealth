import { Mail, Phone, MapPin, Linkedin, Instagram } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-card border-t border-border py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              {/* <div className="w-10 h-10 bg-primary rounded-full flex items-center justify-center">
                <span className="text-primary-foreground font-bold text-lg">W</span>
              </div> */}
              <span className="text-xl font-bold">LUCAS FII <span style={{ color: '#00bfff' }}>WEALTH</span></span>
            </div>
            <p className="text-muted-foreground">
              Gestão de patrimônios.
            </p>
             <ul className="space-y-3 text-muted-foreground">
              <li className="flex items-center space-x-2">
                <Mail className="w-4 h-4 text-primary" />
                <span>lucasfiiresearch@gmail.com</span>
              </li>
              {/* <li className="flex items-center space-x-2">
                <Phone className="w-4 h-4 text-primary" />
                <span>(11) 3000-0000</span>
              </li> */}
              </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-4 text-foreground">Links Rápidos</h3>
            <ul className="space-y-2 text-muted-foreground">
              <li><a href="#sobre" className="hover:text-primary transition-colors">Sobre</a></li>
              <li><a href="#servicos" className="hover:text-primary transition-colors">Serviços</a></li>
              <li><a href="#diferenciais" className="hover:text-primary transition-colors">Diferenciais</a></li>
              {/* <li><a href="#contato" className="hover:text-primary transition-colors">Contato</a></li> */}
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-4 text-foreground">Serviços</h3>
            <ul className="space-y-2 text-muted-foreground">
              <li><a href="#" className="hover:text-primary transition-colors">Planejamento Financeiro</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Gestão de Investimentos</a></li>
            </ul>
          </div>

           <div>
            <h3 className="font-semibold mb-4 text-foreground">Grupo Lucas FII</h3>
            <ul className="space-y-2 text-muted-foreground">
              <li><a href="https://www.lucasfiiresearch.com.br" className="hover:text-primary transition-colors">Lucas FII Research</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Canal Lucas FII</a></li>
            </ul>
          </div>

          {/* <div>
            <h3 className="font-semibold mb-4 text-foreground">Contato</h3>
            <ul className="space-y-3 text-muted-foreground">
              <li className="flex items-center space-x-2">
                <Mail className="w-4 h-4 text-primary" />
                <span>contato@lucasfiiwealth.com.br</span>
              </li>
              <li className="flex items-center space-x-2">
                <Phone className="w-4 h-4 text-primary" />
                <span>(11) 3000-0000</span>
              </li>
              <li className="flex items-center space-x-2">
                <MapPin className="w-4 h-4 text-primary" />
                <span>São Paulo, SP</span>
              </li>
            </ul>
            <div className="flex space-x-4 mt-4">
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                <Linkedin className="w-5 h-5" />
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
            </div>
          </div> */}
        </div>

        <div className="border-t border-border pt-8 text-center text-muted-foreground">
          <p>&copy; 2025 Lucas FII Wealth. Todos os direitos reservados.</p>
          <div className="mt-2 text-sm opacity-75">
            <p>Site v1.0.0 • Desenvolvido por <a href="https://www.devrocha.com.br" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors underline">DevRocha</a></p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
