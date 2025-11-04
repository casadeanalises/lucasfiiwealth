import { Button } from "@/components/ui/button";
import { Menu, LogOut, User } from "lucide-react";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { supabase } from "@/integrations/supabase/client";
import { toast } from "sonner";
import ContactDialog from "./ContactDialog";
import type { User as SupabaseUser } from "@supabase/supabase-js";

const Navbar = () => {
  const navigate = useNavigate();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [user, setUser] = useState<SupabaseUser | null>(null);

  useEffect(() => {
    const { data: { subscription } } = supabase.auth.onAuthStateChange((event, session) => {
      setUser(session?.user ?? null);
    });

    supabase.auth.getSession().then(({ data: { session } }) => {
      setUser(session?.user ?? null);
    });

    return () => subscription.unsubscribe();
  }, []);

  const handleLogout = async () => {
    await supabase.auth.signOut();
    toast.success("Logout realizado com sucesso!");
    navigate("/");
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            {/* <div className="w-10 h-10 bg-primary rounded-full flex items-center justify-center">
              <span className="text-primary-foreground font-bold text-lg">W</span>
            </div> */}
            <span className="text-xl font-bold text-foreground">LUCAS FII <span style={{ color: '#00bfff' }}>WEALTH</span></span>
          </div>

          <div className="hidden md:flex items-center space-x-8">

            <a href="/" className="text-foreground hover:text-primary transition-colors">
              Inicio
            </a>

            <a href="#sobre" className="text-foreground hover:text-primary transition-colors">
              Sobre
            </a>
            <a href="#servicos" className="text-foreground hover:text-primary transition-colors">
              Serviços
            </a>
            <a href="#diferenciais" className="text-foreground hover:text-primary transition-colors">
              Diferenciais
            </a>
            <a href="#contato" className="text-foreground hover:text-primary transition-colors">
              Contato
            </a>
          </div>

          <div className="hidden md:flex items-center gap-4">
            <ContactDialog>
              <Button variant="cta" size="lg">
                Fale Conosco
              </Button>
            </ContactDialog>

            {/* {user ? (
              <Button
                variant="ghost"
                size="lg"
                onClick={handleLogout}
                className="flex items-center gap-2"
              >
                <LogOut size={18} />
                <span>Sair</span>
              </Button>
            ) : (
              <Button
                variant="outline"
                size="lg"
                onClick={() => navigate("/auth")}
                className="flex items-center gap-2 border-primary/30 hover:border-primary"
              >
                <User size={18} />
                <span>Entrar</span>
              </Button>
            )} */}
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
            <a href="#sobre" className="block text-foreground hover:text-primary transition-colors">
              Sobre
            </a>
            <a href="#servicos" className="block text-foreground hover:text-primary transition-colors">
              Serviços
            </a>
            <a href="#diferenciais" className="block text-foreground hover:text-primary transition-colors">
              Diferenciais
            </a>
            <a href="#contato" className="block text-foreground hover:text-primary transition-colors">
              Contato
            </a>

            <ContactDialog>
              <Button variant="cta" size="lg" className="w-full">
                Fale Conosco
              </Button>
            </ContactDialog>

            {/* {user ? (
              <Button
                variant="ghost"
                size="lg"
                onClick={handleLogout}
                className="w-full flex items-center justify-center space-x-2"
              >
                <LogOut size={18} />
                <span>Sair</span>
              </Button>
            ) : (
              <Button
                variant="outline"
                size="lg"
                onClick={() => navigate("/auth")}
                className="w-full flex items-center justify-center space-x-2"
              >
                <User size={18} />
                <span>Entrar</span>
              </Button>
            )} */}
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
