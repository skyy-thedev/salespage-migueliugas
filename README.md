# 🌿 Landing Page - Workshop Saúde Integrativa

Landing page moderna e responsiva para captação de leads do workshop "Intestinos, Múltiplos Sistemas e Uma Única Conexão" ministrado por Sofia Rinaldi (Nutricionista) e Miguel Iugas (Farmacêutico).

## 📋 Características

✅ **Design Moderno & Responsivo**
- Mobile-first approach
- Animações suaves com Framer Motion
- Glassmorphism e gradientes modernos
- Totalmente responsivo (mobile, tablet, desktop)

✅ **10 Seções Completas**
1. Hero Section com Parallax & Partículas Animadas
2. Alert Section com Glassmorphism
3. Connection Section com Sistemas Conectados
4. Learning Section com 6 Tópicos
5. Audience Section (Para Quem É / Não É)
6. Instructors Section com Cards Interativos
7. Format Section
8. Investment Section com Animação
9. Lead Form com Validação em Tempo Real
10. Final Section com Footer

✅ **Validação de Formulário**
- React Hook Form + Yup
- Validação em tempo real
- Feedback visual (erro/sucesso)
- Campos: Nome, Email, WhatsApp, Profissão

✅ **Performance**
- Build otimizado: ~142KB gzip
- Lazy loading de componentes
- CSS-in-JS com Styled Components
- Animações otimizadas (transform + opacity)

✅ **SEO Ready**
- Semantic HTML
- Meta tags estruturadas
- Tipografia hierárquica

## 🚀 Começando

### Pré-requisitos
- Node.js 16+ 
- npm ou yarn

### Instalação

```bash
# Clonar repositório
git clone <repo-url>
cd webpages

# Instalar dependências
npm install

# Iniciar servidor de desenvolvimento
npm run dev
```

O servidor estará disponível em `http://localhost:5173/`

## 📦 Scripts Disponíveis

```bash
# Desenvolvimento
npm run dev          # Inicia servidor de desenvolvimento

# Build
npm run build        # Cria build otimizado para produção
npm run preview      # Visualiza build de produção localmente

# Outros
npm run lint         # Verifica erros de sintaxe (opcional)
```

## 🎨 Estrutura do Projeto

```
src/
├── components/
│   ├── common/                 # Componentes reutilizáveis
│   │   ├── Button.jsx
│   │   ├── Container.jsx
│   │   └── SectionTitle.jsx
│   ├── Hero/                   # Hero com Partículas
│   ├── AlertSection/
│   ├── ConnectionSection/      # Intestino central
│   ├── LearningSection/
│   ├── AudienceSection/
│   ├── InstructorsSection/
│   ├── FormatSection/
│   ├── InvestmentSection/
│   ├── LeadForm/              # Formulário com validação
│   └── FinalSection/
├── hooks/
│   ├── useParallax.js
│   ├── useInView.js
│   └── useScrollPosition.js
├── styles/
│   └── GlobalStyle.js          # Estilos globais
├── utils/
│   └── constants.js            # Dados e constantes
├── App.jsx
└── main.jsx
```

## 🔧 Dependências Principais

- **React 18+** - Framework
- **Vite** - Build tool
- **Framer Motion** - Animações
- **Styled Components** - CSS-in-JS
- **React Hook Form** - Gerenciamento de formulários
- **Yup** - Validação de dados
- **React Icons** - Ícones

## 🎯 Funcionalidades Implementadas

### Hero Section
- Efeito parallax
- Partículas flutuantes animadas
- Scroll indicator bounce
- CTA com scroll suave

### Formulário de Leads
- Validação em tempo real
- Feedback visual (border color muda de verde para vermelho)
- Campos obrigatórios: Nome, Email, WhatsApp, Profissão
- Mensagem de sucesso após envio
- Integração pronta para RD Station / Mailchimp

### Animações
- Fade in on scroll
- Stagger animations para grids
- Scale animations
- Slide animations
- Pulse glow no intestino central

### Responsividade
Breakpoints:
- Mobile: < 768px
- Tablet: 768px - 1024px
- Desktop: > 1024px

## 🔌 Integração com Email Marketing

### RD Station
Atualmente o formulário simula envio. Para integrar com RD Station:

```javascript
// Em LeadForm.jsx - onSubmit
const response = await fetch('https://www.rdstation.com.br/api/v1/conversions', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify({
    email: data.email,
    name: data.fullName,
    phone: data.whatsapp,
    job_title: data.profession,
    conversion_identifier: 'sua_conversao_id'
  }),
});
```

### Google Analytics / Facebook Pixel
Adicionar no `App.jsx`:

```javascript
import { useEffect } from 'react';

useEffect(() => {
  // Google Analytics
  window.gtag('event', 'page_view');
  
  // Facebook Pixel
  fbq('track', 'PageView');
}, []);
```

## 📱 Testar Responsividade

```bash
# Abrir DevTools (F12) e usar device toggle
# ou abrir em diferentes dispositivos:
- iPhone 12 (390x844)
- iPad (768x1024)
- Desktop (1920x1080)
```

## 🚀 Deploy

### Vercel (Recomendado)
```bash
# Instalar Vercel CLI
npm i -g vercel

# Deploy
vercel
```

### Netlify
```bash
# Instalar Netlify CLI
npm i -g netlify-cli

# Deploy
netlify deploy --prod --dir=dist
```

### AWS S3 + CloudFront
```bash
npm run build
# Upload pasta dist/ para S3
# Configurar CloudFront para distribuição
```

## 📊 Checklist de Deploy

- [x] Todas as seções implementadas
- [x] Animações funcionando
- [x] Formulário validando
- [x] Responsivo (mobile/tablet/desktop)
- [x] Performance otimizada
- [x] Links sociais funcionando
- [ ] Google Analytics configurado
- [ ] Facebook Pixel configurado
- [ ] Email marketing integrado
- [ ] SSL configurado (verificar no hosting)
- [ ] Meta tags ajustadas
- [ ] Testado em browsers (Chrome, Firefox, Safari)

## 📝 Conteúdo & Configuração

Todos os textos e dados estão centralizados em `src/utils/constants.js`:

```javascript
export const WORKSHOP_INFO = {
  title: 'INTESTINOS, MÚLTIPLOS SISTEMAS...',
  date: '31 DE JANEIRO DE 2026',
  investment: 'R$ 100',
  instructors: [...],
  systems: [...],
  learningTopics: [...],
  formatItems: [...]
};
```

**Para atualizar conteúdo:** Edite apenas este arquivo!

## 🎨 Customização

### Cores
Em `src/utils/constants.js`, edite o objeto `COLORS`:
```javascript
export const COLORS = {
  primary: '#667eea',    // Azul/Roxo
  secondary: '#764ba2',  // Roxo escuro
  accent: '#f39c12',     // Laranja
  // ...
};
```

### Tipografia
Em `src/styles/GlobalStyle.js`:
```javascript
@import url('https://fonts.googleapis.com/css2?family=Inter:wght@...&display=swap');
```

### Animações
Em `src/utils/constants.js`, customize `ANIMATION_VARIANTS`

## 🐛 Troubleshooting

### Animações lentas
- Verificar hardware do dispositivo
- Reduzir número de partículas em `Hero/Particles.jsx`
- Usar `will-change` seletivamente

### Formulário não envia
- Verificar console (F12) para erros
- Verificar integração com email marketing
- Testar com API mock

### Layout quebrado no mobile
- Verificar media queries
- Usar DevTools device toggle
- Testar em dispositivo real

## 📞 Contato & Suporte

**Instrutores:**
- @migueliugas (Instagram)
- @sofinutrir (Instagram)

**Página de Referência:**
- miguelalmeida32.kpages.online/programa-saude-integrativa

## 📄 Licença

© 2026 - Programa de Formação em Saúde Integrativa. Todos os direitos reservados.

---

**Status:** ✅ Pronto para produção

**Última atualização:** Janeiro 2026

**Versão:** 1.0.0
