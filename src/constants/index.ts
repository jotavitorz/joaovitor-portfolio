import type { TechProps } from "../types";
import type { ProjectProps } from "../types";
import { FaHtml5, FaCss3Alt, FaJs, FaReact, FaGithub, FaGitAlt } from "react-icons/fa";
import { BiLogoTypescript, BiLogoTailwindCss, BiLogoFirebase } from "react-icons/bi";
import { RiNextjsFill } from "react-icons/ri";
import { SiRedux } from "react-icons/si";
import imgProjectLinks from "../assets/images/linktree.png";
import imgProjectPortfolio from "../assets/images/portfolio.png";
import imgProjectTarefas from "../assets/images/tarefa-plus.png";
import imgProjectWebcars from "../assets/images/webcars.png";

export const techs: TechProps[] = [
    {name: "HTML", icon: FaHtml5},
    {name: "CSS", icon: FaCss3Alt},
    {name: "JavaScript", icon: FaJs},
    {name: "React JS", icon: FaReact},
    {name: "Next JS", icon: RiNextjsFill},
    {name: "TypeScript", icon: BiLogoTypescript},
    {name: "Redux", icon: SiRedux},
    {name: "Firebase", icon: BiLogoFirebase},
    {name: "TailWindCSS", icon: BiLogoTailwindCss},
    {name: "Git", icon: FaGitAlt},
    {name: "GitHub", icon: FaGithub}
];

export const projetos: ProjectProps[] = [
  { 
    id: "1", 
    title: "Webcars", 
    description: "Plataforma web completa para publicação e gerenciamento de anúncios de veículos à venda. Cada usuário possui sua própria conta e administra seus anúncios de forma independente, com upload de imagens e detalhes do veículo. O estado de autenticação é gerenciado globalmente com Context API, controlando os fluxos de usuário logado e não logado, e a validação dos formulários é feita com React Hook Form e Zod, garantindo feedback em tempo real.", 
    image: imgProjectWebcars, 
    technologies: ["React", "TypeScript", "Firebase", "Context API", "React Hook Form + Zod"], 
    repository: "https://github.com/jotavitorz/web-cars", 
    deploy: "https://web-cars-puce.vercel.app/", 
  },
  { 
    id: "2", 
    title: "Tarefas Plus", 
    description: "Aplicação de gerenciamento de tarefas desenvolvida como meu primeiro projeto com Next.js. Explora renderização híbrida com SSR para carregar dados do lado do servidor antes da página ser exibida, e SSG com revalidação para gerar páginas estáticas que se atualizam em intervalos definidos. Conta com autenticação via Google com NextAuth.js, criação de tarefas públicas e privadas, e sistema de comentários onde cada usuário gerencia apenas os seus.", 
    image: imgProjectTarefas, 
    technologies: ["Next.js", "React", "Firebase", "NextAuth.js", "CSS Modules"], 
    repository: "https://github.com/jotavitorz/task-manager-nextjs", 
    deploy: "https://task-manager-nextjs-orcin.vercel.app/", 
  },
  { 
    id: "3", 
    title: "LinkTree", 
    description: "Aplicação inspirada no Linktree que permite ao usuário criar sua página personalizada com links e redes sociais centralizados em um só lugar. Conta com autenticação via Firebase, proteção de rotas privadas, personalização de cores dos botões e página pública para exibição dos links cadastrados.", 
    image: imgProjectLinks, 
    technologies: ["React", "TypeScript", "Firebase", "TailwindCSS", "Vite"], 
    repository: "https://github.com/jotavitorz/projeto-linktree", 
    deploy: "https://jotavitor-links.vercel.app/", 
  },
  { 
    id: "4", 
    title: "Portfolio", 
    description: "Aplicação web criada para apresentar minha trajetória como desenvolvedor Front-End, com navegação SPA, interface totalmente responsiva e foco em experiência do usuário. Conta com formulário de contato funcional integrado ao EmailJS, validação em tempo real com Zod e React Hook Form, além de animações de texto e notificações visuais.", 
    image: imgProjectPortfolio, 
    technologies: ["React", "TypeScript", "TailwindCSS", "React Router DOM", "EmailJS"], 
    repository: "https://github.com/jotavitorz/joaovitor-portfolio", 
    deploy: "https://joaovitor-portfolio-coral.vercel.app/", 
  },
];

export const socialLinks = {
    github: "https://github.com/jotavitorz",
    instagram: "https://www.instagram.com/jvtorzx/",
    linkedin: "https://www.linkedin.com/in/devjoaovitor"
};

export const emailConfig = {
    serviceId: import.meta.env.VITE_EMAILJS_SERVICE_ID,
    templateId: import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
    publicKey: import.meta.env.VITE_EMAILJS_PUBLIC_KEY
};