"use client";

import { Button } from "@/components/ui/button";
import { Menu } from "lucide-react";
import { useState } from "react";
import ContactDialog from "./ContactDialog";
import ConsultationForm from "./ConsultationForm";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            {/* <div className="w-10 h-10 bg-primary rounded-full flex items-center justify-center">
              <span className="text-primary-foreground font-bold text-lg">W</span>
            </div> */}
            <a 
              href="#" 
              onClick={(e) => {
                e.preventDefault();
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              className="text-xl font-bold text-foreground hover:opacity-80 transition-opacity cursor-pointer flex items-center space-x-2"
            >
              <span>LUCAS FII</span>
              <span 
                className="px-1 py-0 border-2 rounded"
                style={{ 
                  color: '#00bfff',
                  borderColor: '#00bfff'
                }}
              >
                WEALTH
              </span>
            </a>
          </div>

          <div className="hidden md:flex items-center space-x-8">

            {/* <a href="/" className="text-foreground hover:text-primary transition-colors">
              Inicio
            </a> */}
            <a href="#servicos" className="text-foreground hover:text-primary transition-colors">
              Serviços
            </a>
            {/* <a href="#diferenciais" className="text-foreground hover:text-primary transition-colors">
              Diferenciais
            </a> */}
            {/* <a href="#consultoria" className="text-foreground hover:text-primary transition-colors">
              Consultoria
            </a> */}
            <a href="#contato" className="text-foreground hover:text-primary transition-colors">
              Contato
            </a>
             <a href="#sobre" className="text-foreground hover:text-primary transition-colors">
              Sobre
            </a>
          </div>

          <div className="hidden md:flex items-center gap-4">
            <Button 
              variant="cta" 
              size="lg"
              className="animate-bounce hover:animate-none"
              style={{ 
                animationDuration: '2s',
                animationIterationCount: 'infinite'
              }}
              onClick={() => document.getElementById('consultoria')?.scrollIntoView({ behavior: 'smooth' })}
            >
              Agendar Reunião
            </Button>
          </div>

          <button
            className="md:hidden text-foreground"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <Menu size={24} />
          </button>
        </div>

        {isMenuOpen && (
          <div className="md:hidden mt-4 pb-4 space-y-4 animate-fade-in">
            
            <a href="#servicos" className="block text-foreground hover:text-primary transition-colors">
              Serviços
            </a>
            {/* <a href="#diferenciais" className="block text-foreground hover:text-primary transition-colors">
              Diferenciais
            </a> */}
            {/* <a href="#consultoria" className="block text-foreground hover:text-primary transition-colors">
              Consultoria
            </a> */}
            <a href="#contato" className="block text-foreground hover:text-primary transition-colors">
              Contato
            </a>
            <a href="#sobre" className="block text-foreground hover:text-primary transition-colors">
              Sobre
            </a>

            <Button 
              variant="cta" 
              size="lg" 
              className="w-full animate-bounce hover:animate-none"
              style={{ 
                animationDuration: '2s',
                animationIterationCount: 'infinite'
              }}
              onClick={() => {
                document.getElementById('consultoria')?.scrollIntoView({ behavior: 'smooth' });
                setIsMenuOpen(false);
              }}
            >
              Agendar Reunião
            </Button>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
