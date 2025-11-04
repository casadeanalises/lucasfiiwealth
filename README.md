# 💰 Lucas FII Wealth - Consultoria Financeira

<div align="center">

![Lucas FII Wealth](https://img.shields.io/badge/Lucas%20FII%20Wealth-Consultoria%20Financeira-00BFFF?style=for-the-badge&logo=data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHZpZXdCb3g9IjAgMCAyNCAyNCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTEyIDJMMTMuMDkgOC4yNkwyMCA5TDEzLjA5IDE1Ljc0TDEyIDIyTDEwLjkxIDE1Ljc0TDQgOUwxMC45MSA4LjI2TDEyIDJaIiBmaWxsPSJ3aGl0ZSIvPgo8L3N2Zz4K)

Um site moderno e elegante para consultoria financeira especializada em gestão de patrimônio e investimentos em Fundos de Investimento Imobiliário (FIIs).

</div>

## 📋 Sobre o Projeto

A **Lucas FII Wealth** é uma plataforma digital desenvolvida para uma consultoria financeira especializada em gestão de patrimônio personalizada. O site apresenta serviços de planejamento financeiro, investimentos sob medida e estratégias de proteção patrimonial, com foco especial em Fundos de Investimento Imobiliário (FIIs).

### 🎯 Objetivo

Criar uma presença digital profissional e confiável que:
- Apresente os serviços de consultoria financeira de forma clara e atrativa
- Transmita credibilidade e expertise no mercado financeiro
- Facilite o contato entre clientes e consultores
- Ofereça uma experiência de usuário moderna e responsiva

## 🚀 Funcionalidades

- ✅ **Landing Page Responsiva**: Design moderno adaptável a todos os dispositivos
- ✅ **Seções Informativas**: Hero, Sobre, Benefícios, Serviços e CTA
- ✅ **Sistema de Contato**: Modal integrado para facilitar comunicação
- ✅ **Interface Moderna**: Componentes UI elegantes com animações suaves
- ✅ **SEO Otimizado**: Estrutura preparada para mecanismos de busca
- ✅ **Tema Escuro/Claro**: Alternância de temas para melhor experiência
- ✅ **Envio de E-mails**: API integrada para formulários de contato

## 🛠️ Tecnologias Utilizadas

### Frontend Core
- **[Next.js 16.0.1](https://nextjs.org/)** - Framework React com SSR e SSG
- **[React 18.3.1](https://react.dev/)** - Biblioteca para interfaces de usuário
- **[TypeScript 5.8.3](https://www.typescriptlang.org/)** - Superset do JavaScript com tipagem estática

### Styling & UI
- **[Tailwind CSS 3.4.17](https://tailwindcss.com/)** - Framework CSS utility-first
- **[Radix UI](https://www.radix-ui.com/)** - Componentes primitivos acessíveis
- **[Lucide React](https://lucide.dev/)** - Biblioteca de ícones moderna
- **[Tailwind Animate](https://github.com/jamiebuilds/tailwindcss-animate)** - Animações CSS

### State Management & Forms
- **[React Hook Form 7.61.1](https://react-hook-form.com/)** - Gerenciamento de formulários performático
- **[Zod 3.25.76](https://zod.dev/)** - Validação de schemas TypeScript-first
- **[TanStack Query 5.83.0](https://tanstack.com/query)** - Gerenciamento de estado servidor

### Backend & Integrations
- **[Supabase 2.78.0](https://supabase.com/)** - Backend as a Service (BaaS)
- **[Resend 6.4.0](https://resend.com/)** - Serviço de envio de e-mails

### Development Tools
- **[ESLint 9.32.0](https://eslint.org/)** - Linter para JavaScript/TypeScript
- **[PostCSS 8.5.6](https://postcss.org/)** - Processador CSS
- **[Autoprefixer 10.4.21](https://autoprefixer.github.io/)** - Auto-prefixação CSS

### Utils & Helpers
- **[clsx 2.1.1](https://github.com/lukeed/clsx)** - Utilitário para classes condicionais
- **[class-variance-authority](https://cva.style/)** - Criação de variantes de componentes
- **[date-fns 3.6.0](https://date-fns.org/)** - Biblioteca de manipulação de datas
- **[cmdk 1.1.1](https://cmdk.paco.me/)** - Componente de command menu

## 📁 Estrutura do Projeto

```
📦 lucas-fii-wealth/
├── 📁 src/
│   ├── 📁 app/                    # App Router (Next.js 13+)
│   │   ├── layout.tsx             # Layout principal
│   │   ├── page.tsx               # Página inicial
│   │   ├── not-found.tsx          # Página 404
│   │   └── 📁 api/                # API Routes
│   │       └── send-contact-email/ # Endpoint de contato
│   ├── 📁 components/             # Componentes React
│   │   ├── Hero.tsx               # Seção hero
│   │   ├── About.tsx              # Seção sobre
│   │   ├── Services.tsx           # Seção serviços
│   │   ├── ContactDialog.tsx      # Modal de contato
│   │   └── 📁 ui/                 # Componentes UI base
│   ├── 📁 hooks/                  # Custom hooks
│   └── 📁 lib/                    # Utilitários e configurações
├── 📁 public/                     # Arquivos estáticos
└── 📄 Arquivos de configuração
```

## 🎨 Design System

O projeto utiliza um design system baseado em:
- **Paleta de Cores**: Tons de azul (#00BFFF) como cor primária
- **Tipografia**: Fontes modernas e legíveis
- **Componentes**: Baseados no Radix UI para acessibilidade
- **Responsividade**: Mobile-first approach
- **Animações**: Transições suaves e micro-interações

## ⚡ Quick Start

### Pré-requisitos
- Node.js 18+ 
- Bun ou npm/yarn/pnpm

### Instalação

1. **Clone o repositório**
```bash
git clone https://github.com/casadeanalises/lucasfiiwealth.git
cd lucasfiiwealth
```

2. **Instale as dependências**
```bash
bun install
# ou
npm install
```

3. **Configure as variáveis de ambiente**
```bash
cp .env.example .env.local
# Configure suas chaves do Supabase e Resend
```

4. **Execute o projeto**
```bash
bun dev
# ou
npm run dev
```

5. **Acesse o site**
```
http://localhost:3000
```

## 📊 Scripts Disponíveis

```bash
bun dev          # Inicia servidor de desenvolvimento
bun build        # Gera build de produção
bun start        # Inicia servidor de produção
bun lint         # Executa linting
```

## 🌟 Destaques Técnicos

- **Performance**: Otimizado com Next.js e Bun para máxima velocidade
- **Acessibilidade**: Componentes Radix UI garantem WCAG compliance
- **SEO**: Estrutura semântica e meta tags otimizadas
- **Type Safety**: TypeScript + Zod para validações robustas
- **Modern Stack**: Últimas versões das tecnologias mais atuais

## 📱 Responsividade

O site é totalmente responsivo e otimizado para:
- 📱 Dispositivos móveis (320px+)
- 📱 Tablets (768px+)  
- 💻 Desktops (1024px+)
- 🖥️ Telas grandes (1440px+)

## 🚀 Deploy

O projeto está preparado para deploy em plataformas como:
- **Vercel** (recomendado para Next.js)
- **Netlify**
- **Railway**
- **DigitalOcean App Platform**

---

<div align="center">
  <p>Desenvolvido com ❤️ para <strong>Lucas FII Wealth</strong></p>
  <p>© 2024 - Consultoria Financeira Especializada</p>
</div>
