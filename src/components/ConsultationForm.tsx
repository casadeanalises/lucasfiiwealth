"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useToast } from "@/hooks/use-toast";

const ConsultationForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    monthlyContribution: "",
    liquidAssets: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleInputChange = (field: string, value: string | boolean) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    setIsSubmitting(true);
    
    try {
      const response = await fetch('/api/send-consultation-email', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        toast({
          title: "Sucesso!",
          description: "Sua solicitação foi enviada. Em breve entraremos em contato!",
        });
        
        // Reset form
        setFormData({
          name: "",
          email: "",
          phone: "",
          monthlyContribution: "",
          liquidAssets: "",
        });
      } else {
        throw new Error('Erro ao enviar');
      }
    } catch (error) {
      toast({
        title: "Erro",
        description: "Erro ao enviar solicitação. Tente novamente.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="relative py-24 overflow-hidden" id="consultoria">
      <div 
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: "url('/hero-wealth.jpg')",
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat'
        }}
      >
        <div className="absolute inset-0 bg-slate-900/85" />
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left side - Content */}
          <div className="space-y-8">
            <div className="space-y-2">
              <div className="flex items-center space-x-2 mb-8">
                <span className="text-2xl font-bold text-white tracking-wider">LUCAS FII</span>
                <span className="text-2xl font-bold text-white px-4 py-1 border-2 border-primary rounded" style={{ color: '#00bfff' }}>WEALTH</span>
              </div>
              
              <h2 className="text-4xl md:text-5xl font-bold text-white leading-tight">
                <span className="text-primary" style={{ color: '#00bfff' }}>Proteja seu patrimônio</span>
                <br />
                <span className="text-white">e tenha tranquilidade</span>
                <br />
                <span className="text-white">para o futuro</span>
              </h2>
            </div>
            
            <p className="text-xl text-gray-300 leading-relaxed max-w-lg">
              A Lucas FII Wealth oferece uma confiabilidade em Gestão de Carteiras, com estratégias moldadas sob medida para os seus objetivos
            </p>
          </div>

          {/* Right side - Form */}
          <div className="bg-slate-800/90 backdrop-blur-sm rounded-2xl p-8 shadow-2xl border border-gray-700">
            <div className="text-center mb-8">
              <h3 className="text-2xl font-bold text-white mb-2">
                Cadastre-se para agendar uma reunião com um dos nossos especialistas.
              </h3>
              <p className="text-gray-300">São apenas 6 perguntas.</p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="space-y-2">
                <Label htmlFor="name" className="text-white">
                  Nome<span className="text-red-500">*</span>
                </Label>
                <Input
                  id="name"
                  type="text"
                  required
                  value={formData.name}
                  onChange={(e) => handleInputChange('name', e.target.value)}
                  className="bg-white/90 border-gray-300 text-gray-900 placeholder:text-gray-500"
                  placeholder="Seu nome completo"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="email" className="text-white">
                  E-mail<span className="text-red-500">*</span>
                </Label>
                <Input
                  id="email"
                  type="email"
                  required
                  value={formData.email}
                  onChange={(e) => handleInputChange('email', e.target.value)}
                  className="bg-white/90 border-gray-300 text-gray-900 placeholder:text-gray-500"
                  placeholder="seu@email.com"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="phone" className="text-white">
                  Telefone<span className="text-red-500">*</span>
                </Label>
                <Input
                  id="phone"
                  type="tel"
                  required
                  value={formData.phone}
                  onChange={(e) => handleInputChange('phone', e.target.value)}
                  className="bg-white/90 border-gray-300 text-gray-900 placeholder:text-gray-500"
                  placeholder="(11) 99999-9999"
                />
              </div>

              <div className="space-y-2">
                <Label className="text-white">
                  Qual o valor médio de seus aportes mensais?<span className="text-red-500">*</span>
                </Label>
                <Select required onValueChange={(value) => handleInputChange('monthlyContribution', value)}>
                  <SelectTrigger className="bg-white/90 border-gray-300 text-gray-900">
                    <SelectValue placeholder="Selecione" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="abaixo-1000">Abaixo de R$ 1.000</SelectItem>
                    <SelectItem value="1000-5000">Entre R$ 1.000 a R$ 5.000</SelectItem>
                    <SelectItem value="5000-10000">Entre R$ 5.000 a R$ 10.000</SelectItem>
                    <SelectItem value="10000-20000">Entre R$ 10.000 a R$ 20.000</SelectItem>
                    <SelectItem value="20000-40000">Entre R$ 20.000 a R$ 40.000</SelectItem>
                    <SelectItem value="acima-40000">Acima de R$ 40.000</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <Label className="text-white">
                  Qual o valor de seu patrimônio líquido investido?<span className="text-red-500">*</span>
                </Label>
                <Select required onValueChange={(value) => handleInputChange('liquidAssets', value)}>
                  <SelectTrigger className="bg-white/90 border-gray-300 text-gray-900">
                    <SelectValue placeholder="Selecione" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="0-50000">De 0 a R$ 50.000</SelectItem>
                    <SelectItem value="50000-100000">Entre R$ 50.000 a R$ 100.000</SelectItem>
                    <SelectItem value="100000-300000">Entre R$ 100.000 a R$ 300.000</SelectItem>
                    <SelectItem value="300000-1000000">Entre R$ 300.000 a R$ 1.000.000</SelectItem>
                    <SelectItem value="1000000-3000000">Entre R$ 1.000.000 a R$ 3.000.000</SelectItem>
                    <SelectItem value="3000000-5000000">Entre R$ 3.000.000 a R$ 5.000.000</SelectItem>
                    <SelectItem value="acima-5000000">Mais de R$ 5.000.000</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <Button 
                type="submit" 
                disabled={isSubmitting}
                className="w-full py-4 text-lg font-semibold text-white border-0 rounded-lg transition-all duration-300 shadow-lg hover:shadow-xl hover:opacity-90"
                style={{ backgroundColor: '#00bfff' }}
              >
                {isSubmitting ? "ENVIANDO..." : "ENVIAR"}
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ConsultationForm;