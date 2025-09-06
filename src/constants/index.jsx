import { BotMessageSquare } from "lucide-react";
import { BatteryCharging } from "lucide-react";
import { Fingerprint } from "lucide-react";
import { ShieldHalf } from "lucide-react";
import { PlugZap } from "lucide-react";
import { GlobeLock } from "lucide-react";

import user1 from "../assets/profile-pictures/user1.jpg";
import user2 from "../assets/profile-pictures/user2.jpg";
import user3 from "../assets/profile-pictures/user3.jpg";
import user4 from "../assets/profile-pictures/user4.jpg";
import user5 from "../assets/profile-pictures/user5.jpg";
import user6 from "../assets/profile-pictures/user6.jpg";

export const navItems = [
  { label: "Recursos", href: "#features" },
  { label: "Fluxo de Trabalho", href: "#workflow" },
  { label: "Preços", href: "#pricing" },
  { label: "Depoimentos", href: "#testimonials" },
];

export const testimonials = [
  {
    user: "John Doe",
    company: "Stellar Solutions",
    image: user1,
    text: "Estou extremamente satisfeito com os serviços prestados. A equipe foi atenciosa, profissional e entregou resultados além das minhas expectativas.",
  },
  {
    user: "Jane Smith",
    company: "Blue Horizon Technologies",
    image: user2,
    text: "Não poderia estar mais feliz com o resultado do nosso projeto. A criatividade e a capacidade de resolver problemas da equipe foram essenciais para transformar nossa visão em realidade.",
  },
  {
    user: "David Johnson",
    company: "Quantum Innovations",
    image: user3,
    text: "Trabalhar com esta empresa foi um prazer. A atenção aos detalhes e o compromisso com a excelência são louváveis. Recomendo fortemente a qualquer pessoa que busque um serviço de alto nível.",
  },
  {
    user: "Ronee Brown",
    company: "Fusion Dynamics",
    image: user4,
    text: "Trabalhar com a equipe da XYZ Company foi um divisor de águas para nosso projeto. A atenção aos detalhes e as soluções inovadoras nos ajudaram a alcançar nossos objetivos mais rápido do que esperávamos. Somos gratos pela expertise e profissionalismo deles!",
  },
  {
    user: "Michael Wilson",
    company: "Visionary Creations",
    image: user5,
    text: "Fiquei impressionado com o nível de profissionalismo e dedicação demonstrado pela equipe. Eles conseguiram superar nossas expectativas e entregar resultados excepcionais.",
  },
  {
    user: "Emily Davis",
    company: "Synergy Systems",
    image: user6,
    text: "A equipe foi além do esperado para garantir o sucesso do nosso projeto. A experiência e dedicação deles são incomparáveis. Espero trabalhar com eles novamente no futuro.",
  },
];


export const features = [
 {
  icon: <BotMessageSquare />,
  text: "Interface de Arrastar e Soltar",
  description:
    "Projete e organize seus ambientes de VR facilmente com uma interface amigável de arrastar e soltar.",
},
{
  icon: <Fingerprint />,
  text: "Compatibilidade Multiplataforma",
  description:
    "Crie aplicações de VR que funcionam perfeitamente em várias plataformas, incluindo mobile, desktop e headsets de realidade virtual.",
},
{
  icon: <ShieldHalf />,
  text: "Modelos Integrados",
  description:
    "Dê início rápido aos seus projetos de VR com uma variedade de modelos integrados para diferentes tipos de aplicações e ambientes.",
},
{
  icon: <BatteryCharging />,
  text: "Pré-visualização em Tempo Real",
  description:
    "Visualize sua aplicação de VR em tempo real enquanto faz alterações, permitindo iterações e ajustes rápidos.",
},
{
  icon: <PlugZap />,
  text: "Ferramentas de Colaboração",
  description:
    "Trabalhe junto com sua equipe em tempo real em projetos de VR, possibilitando colaboração contínua e compartilhamento de ideias.",
},
{
  icon: <GlobeLock />,
  text: "Painel de Análises",
  description:
    "Obtenha insights valiosos sobre interações e comportamento dos usuários dentro de suas aplicações de VR com um painel de análises integrado.",
},
];

export const checklistItems = [
  {
    title: "Mesclagem de código facilitada",
    description:
      "Combine alterações de código de forma simples e organizada, garantindo que todos os desenvolvimentos sejam integrados sem conflitos.",
  },
  {
    title: "Revise código sem preocupações",
    description:
      "Analise e verifique o código de sua equipe com facilidade, garantindo qualidade e consistência em seus projetos de VR.",
  },
  {
    title: "Assistência de IA para reduzir tempo",
    description:
      "Use inteligência artificial para acelerar tarefas repetitivas e otimizar seu fluxo de trabalho, economizando horas de desenvolvimento.",
  },
  {
    title: "Compartilhe seu trabalho em minutos",
    description:
      "Distribua rapidamente suas atualizações e resultados para a equipe ou clientes, mantendo todos alinhados e produtivos.",
  },
];


export const pricingOptions = [
  {
    title: "Gratuito",
    price: "R$0",
    features: [
      "Compartilhamento privado de quadros",
      "5 GB de armazenamento",
      "Análise web",
      "Modo privado",
    ],
  },
  {
    title: "Pro",
    price: "R$10",
    features: [
      "Compartilhamento privado de quadros",
      "10 GB de armazenamento",
      "Análise web avançada",
      "Modo privado",
    ],
  },
  {
    title: "Enterprise",
    price: "R$200",
    features: [
      "Compartilhamento privado de quadros",
      "Armazenamento ilimitado",
      "Rede de alto desempenho",
      "Modo privado",
    ],
  },
];

export const resourcesLinks = [
  { href: "#", text: "Primeiros Passos" },
  { href: "#", text: "Documentação" },
  { href: "#", text: "Tutoriais" },
  { href: "#", text: "Referência da API" },
  { href: "#", text: "Fóruns da Comunidade" },
];

export const platformLinks = [
  { href: "#", text: "Recursos" },
  { href: "#", text: "Dispositivos Suportados" },
  { href: "#", text: "Requisitos do Sistema" },
  { href: "#", text: "Downloads" },
  { href: "#", text: "Notas de Versão" },
];

export const communityLinks = [
  { href: "#", text: "Eventos" },
  { href: "#", text: "Encontros" },
  { href: "#", text: "Conferências" },
  { href: "#", text: "Hackathons" },
  { href: "#", text: "Vagas" },
];
