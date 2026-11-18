// Conteúdo da Home. Edite aqui textos, links e listas sem mexer nos componentes.

export const img = (file) => `/img/home/${file}`

export const NAV = [
  { label: 'Home', href: '#top' },
  { label: 'Quem somos', href: '#quem-somos' },
  { label: 'Serviços', href: '#servicos' },
  { label: 'Cases', href: '#cases' },
  { label: 'Clientes', href: '#clientes' },
  { label: 'Contato', href: '#contato' },
]

export const CONTACT = {
  instagram: { handle: '@balzani.company', url: 'https://www.instagram.com/balzani.company/' },
  linkedin: { handle: 'company/balzani', url: 'https://www.linkedin.com/company/balzani/' },
  // TODO: confirmar número do WhatsApp
  whatsapp: 'https://wa.me/5511000000000',
  address: 'Avenida Álvaro Ramos, 896 - Belém, São Paulo - SP, 03330-002',
  mapsUrl:
    'https://www.google.com/maps/search/?api=1&query=Avenida+%C3%81lvaro+Ramos%2C+896+-+Bel%C3%A9m%2C+S%C3%A3o+Paulo+-+SP',
}

export const AGENCY_ITEMS = [
  'Logo e Identidade Visual',
  'Materiais de Marketing',
  'Tráfego Pago',
  'Social Media',
]

export const BALZANI_ITEMS = [
  'Estratégia de lançamento',
  'Marketing e Comercial trabalhando juntos',
  'Estruturação da operação comercial',
  'Inteligência de dados em todo o funil',
  'Metodologia própria para lançamentos',
  'Conhecimento prático de incorporação imobiliária',
]

export const DIFFERENTIALS = [
  {
    title: ['NÃO SOMOS', 'APENAS UMA AGÊNCIA'],
    text: [
      'Somos uma lançadora especializada no mercado imobiliário, ',
      { bold: 'vivendo lançamentos todos os dias' },
      ' há mais de 5 anos.',
    ],
  },
  {
    title: ['DE INCORPORADOR PARA ', 'INCORPORADOR'],
    text: [
      'Não falamos apenas de teoria. Também incorporamos e conhecemos, do outro lado da mesa, os riscos e as decisões de um lançamento.',
    ],
  },
  {
    title: ['ESTRATÉGIA ANTES DA ', 'EXECUÇÃO'],
    text: [
      'Ajudamos o incorporador a estruturar o lançamento antes de colocar Marketing e Comercial em operação.',
    ],
  },
  {
    title: ['MARKETING E COMERCIAL ', 'CONECTADOS'],
    text: [
      'Somos uma lançadora especializada no mercado imobiliário, vivendo lançamentos todos os dias há mais de 5 anos.',
    ],
  },
]

export const ECOSYSTEM = [
  {
    name: 'Balzani',
    // é o próprio site: o link rola até "Quem somos" em vez de abrir outra aba
    url: '#quem-somos',
    internal: true,
    logo: { src: img('eco-balzani.svg'), w: 314, h: 61 },
    gap: 43,
    textWidth: 269,
    text: 'Hub de soluções especializado em lançamentos imobiliários',
  },
  {
    name: 'Zimbel Incorporadora',
    // TODO: confirmar URL do site da Zimbel
    url: '#',
    logo: { src: img('eco-zimbel.svg'), w: 317, h: 57 },
    gap: 47,
    textWidth: 316,
    text: 'Incorporadora especializada em produtos com foco em wellness',
  },
  {
    name: 'Atta3D by Balzani',
    // TODO: confirmar URL do site da Atta3D
    url: '#',
    logo: { atta: true, w: 319, h: 65 },
    gap: 39,
    textWidth: 358,
    text: 'Experiência e desenvolvimento de soluções 3D e imersivas para o mercado imobiliário',
  },
]

export const SERVICES = [
  {
    number: '01',
    title: 'estratégia',
    items: [
      'Definição do Objetivo do Lançamento',
      'Planejamento de etapas, ações, e principais marcos',
      'Elaboração de um cronograma estratégico',
      'Estratégia de posicionamento e comunicação',
      'Definição da Estratégia Comercial',
      'Planejamento de comissão, bonificação e premiação',
      'Estratégia de relacionamento com imobiliárias',
    ],
  },
  {
    number: '02',
    title: 'marketing',
    line: 'line-service-marketing.svg',
    listWidth: 451, // no Figma a lista de Marketing é mais estreita
    items: [
      'Branding, logotipo e manuais',
      'Landing page e sites',
      'Book do empreendimento',
      'Mídia offline (material gráfico)',
      'Vídeo conceito',
      'Social media',
      'Desenvolvimento de criativos',
      'Campanhas e tráfego pago',
    ],
  },
  {
    number: '03',
    title: 'comercial',
    line: 'line-service-comercial.svg',
    gap: 10,
    items: [
      'Desenvolvimento e estruturação da área comercial',
      'Cliente oculto',
      'Implementação de CRM',
      'Treinamento e acompanhamento semanal com especialista comercial',
      'Diagnóstico da operação comercial atual',
      'Definição de metas e indicadores de performance',
      'Estruturação do processo de atendimento do lead',
    ],
  },
]

export const FORMULAS = [
  {
    lead: 'Quero lançar',
    rest: ['um', 'empreendimento'],
    logo: { src: img('formula-vertice.svg'), w: 241, h: 101, alt: 'Fórmula Vértice by Balzani' },
    href: '#contato',
  },
  {
    lead: 'Quero zerar',
    rest: ['meu estoque'],
    logo: { src: img('formula-vte.svg'), w: 172, h: 100, alt: 'Fórmula VTE — Venda Total do Estoque' },
    href: '#contato',
  },
]

export const NUMBERS = [
  { value: 3.1, decimals: 1, suffix: ' bi', label: 'Gerados para nossos clientes' },
  { value: 3600, decimals: 0, suffix: '', label: 'Unidades vendidas', thousands: true },
  { value: 70, decimals: 0, suffix: '', label: 'Lançamentos de sucesso' },
  { value: 5, decimals: 0, suffix: ' anos', label: 'Atuação de mercado' },
]

export const CASES = [
  {
    name: 'Léman View',
    text: 'Empreendimento vertical de altíssimo padrão em Ribeirão Preto com cinema privativo',
    image: img('case-leman.png'),
  },
  {
    name: 'Helena bay',
    text: 'Condomínio de casas de alto padrão na praia de Santa Helena em Vitória',
    image: img('case-helena.png'),
    crop: { h: '171.09%', w: '134.54%', left: '-17.27%', top: '-35.55%' },
  },
]

export const LEADERS = [
  {
    first: 'Guilherme',
    last: 'Zimerman',
    role: 'CEO & Founder',
    photo: img('leader-guilherme.png'),
  },
  {
    first: 'Enzo',
    last: 'Mirizzi',
    role: 'COO & Founder',
    photo: img('leader-enzo.png'),
  },
  {
    first: 'Carlos',
    last: 'Bunicki',
    role: 'CTO',
    photo: img('leader-carlos.png'),
    crop: { h: '188.43%', w: '124.68%', left: '0', top: '-25.57%' },
  },
]

export const MEDIA = {
  // TODO: trocar pelos links reais das matérias
  allUrl: '#',
  featuredUrl: '#',
  image: img('media-valor.png'),
}
