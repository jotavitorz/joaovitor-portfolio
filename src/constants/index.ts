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
    description: "Plataforma de anúncios de veículos onde cada usuário gerencia seus próprios anúncios com upload de imagens, busca e painel privado. O principal desafio foi estruturar o fluxo de autenticação com Firebase Auth + Firestore e controlar o acesso por rotas privadas. O estado global de autenticação foi gerenciado com Context API, e a validação dos formulários com React Hook Form + Zod, garantindo feedback em tempo real sem dependências desnecessárias.", 
    image: imgProjectWebcars, 
    technologies: ["React", "TypeScript", "Firebase", "Context API", "React Hook Form + Zod"], 
    repository: "https://github.com/jotavitorz/web-cars", 
    deploy: "https://web-cars-puce.vercel.app/", 
  },
  { 
    id: "2", 
    title: "Tarefas Plus", 
    description: "App de gerenciamento de tarefas com autenticação Google, tarefas públicas e privadas e sistema de comentários por usuário. Foi meu primeiro projeto com Next.js, então o desafio central foi entender e aplicar renderização híbrida: SSR para carregar dados antes da página ser exibida e SSG com revalidação para páginas estáticas que se atualizam em intervalos definidos. A autenticação foi implementada com NextAuth.js e a persistência com Firebase Firestore.", 
    image: imgProjectTarefas, 
    technologies: ["Next.js", "React", "Firebase", "NextAuth.js", "CSS Modules"], 
    repository: "https://github.com/jotavitorz/task-manager-nextjs", 
    deploy: "https://task-manager-nextjs-orcin.vercel.app/", 
  },
  { 
    id: "3", 
    title: "LinkTree", 
    description: "Aplicação que permite ao usuário criar sua página pública com links e redes sociais centralizados. O desafio foi implementar o fluxo completo de autenticação com Firebase e proteger as rotas do painel, garantindo que apenas o dono acesse e edite seus links. A página pública é gerada dinamicamente por rota, e o usuário pode personalizar cores e botões em tempo real.", 
    image: imgProjectLinks, 
    technologies: ["React", "TypeScript", "Firebase", "TailwindCSS", "Vite"], 
    repository: "https://github.com/jotavitorz/projeto-linktree", 
    deploy: "https://jotavitor-links.vercel.app/", 
  },
  { 
    id: "4", 
    title: "Portfolio", 
    description: "Meu cartão de visitas digital como desenvolvedor Front-End, com navegação SPA, interface responsiva e formulário de contato funcional. O desafio foi criar uma experiência fluida sem recarregamento de página, com animações de texto e notificações visuais. O envio de mensagens é feito via EmailJS, com validação em tempo real usando React Hook Form + Zod. O projeto com tudo configurado e está organizado com separação de tipos e constantes.", 
    image: imgProjectPortfolio, 
    technologies: ["React", "TypeScript", "TailwindCSS", "React Router DOM", "EmailJS"], 
    repository: "https://github.com/jotavitorz/joaovitor-portfolio", 
    deploy: "https://joaovitor-portfolio-one.vercel.app/", 
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