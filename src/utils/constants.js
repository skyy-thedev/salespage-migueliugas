// Color Palette
export const COLORS = {
  primary: '#667eea',
  secondary: '#022031',
  accent: '#f39c12',
  dark: '#1a1f3a',
  light: '#f8f9fa',
  text: '#2c3e50',
  textLight: '#7f8c8d',
  white: '#ffffff',
  gray100: '#f5f7fa',
  gray200: '#e0e0e0',
  gray300: '#c3cfe2',
  success: '#27ae60',
  error: '#e74c3c',
};

// Animation Variants
export const ANIMATION_VARIANTS = {
  fadeInUp: {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: 'easeOut' },
    },
  },
  slideInLeft: {
    hidden: { opacity: 0, x: -100 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.8, ease: 'easeOut' },
    },
  },
  slideInRight: {
    hidden: { opacity: 0, x: 100 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.8, ease: 'easeOut' },
    },
  },
  scaleIn: {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.5, ease: 'easeOut' },
    },
  },
  staggerContainer: {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  },
};

// Workshop Info
export const WORKSHOP_INFO = {
  title: 'INTESTINOS, MÚLTIPLOS SISTEMAS E UMA ÚNICA CONEXÃO',
  date: '31 DE JANEIRO DE 2026',
  investment: 'R$ 100',
  duration: '3 horas',
  format: '1 encontro ao vivo',
  platform: '100% Online',
  instructors: [
    {
      name: 'Sofia Rinaldi',
      profession: 'Nutricionista',
      bio: 'Com atuação em saúde integrativa, microbiota, inflamação e comportamento alimentar. Conhecida por unir ciência, clínica e visão sistêmica sem atalhos e sem modismos.',
      instagram: '@sofinutrir',
      emoji: '👩‍⚕️',
      certifications: 3,
      patients: '5K+',
      successRate: 92,
    },
    {
      name: 'Miguel Iugas',
      profession: 'Farmacêutico Clínico',
      bio: 'Com forte base analítica e leitura aprofundada de exames. Reconhecido pelo pensamento lógico, crítico e pela capacidade de conectar dados com fisiologia real.',
      instagram: '@migueliugas',
      emoji: '👨‍⚕️',
      certifications: 4,
      patients: '8K+',
      successRate: 94,
    },
  ],
  systems: [
    { name: 'Cérebro', emoji: '🧠' },
    { name: 'Fígado', emoji: '🫀' },
    { name: 'Pâncreas', emoji: '🩸' },
    { name: 'Sistema Imune', emoji: '🛡️' },
    { name: 'Metabolismo', emoji: '⚡' },
  ],
  learningTopics: [
    { 
      title: 'O intestino como órgão central de integração',
      icon: '🔗',
      description: 'Compreenda a importância sistêmica do intestino'
    },
    { 
      title: 'Barreira intestinal: como se rompe, por que se rompe e o que isso impacta',
      icon: '🛡️',
      description: 'Entenda os mecanismos da permeabilidade intestinal'
    },
    { 
      title: 'Microbiota além do "eubiose vs disbiose"',
      icon: '🦠',
      description: 'Deixe de pensar em preto e branco na microbiota'
    },
    { 
      title: 'Comunicação intestino–fígado, intestino–pâncreas e intestino–cérebro',
      icon: '🧠',
      description: 'Visualize os eixos de comunicação real'
    },
    { 
      title: 'Por que modular não é "intervir rápido"',
      icon: '⏱️',
      description: 'Aprenda sobre timing e sequência terapêutica'
    },
    { 
      title: 'Como preparar o terreno antes de qualquer estratégia clínica',
      icon: '🏗️',
      description: 'Base sólida antes de qualquer protocolo'
    },
  ],
  formatItems: [
    {
      icon: '📍',
      title: '1 encontro ao vivo',
      description: 'Interativo e prático',
      time: 'Ao Vivo',
    },
    {
      icon: '⏱️',
      title: '3 horas',
      description: 'Conteúdo direto ao ponto',
      time: 'Duração Total',
    },
    {
      icon: '💬',
      title: 'Espaço para perguntas',
      description: 'Tire suas dúvidas',
      time: 'Q&A',
    },
    {
      icon: '💻',
      title: '100% Online',
      description: 'Acesse de onde estiver',
      time: 'Remoto',
    },
  ],
};
