import { FaHtml5, FaCss3Alt, FaJs, FaReact, FaGithub, FaGitAlt } from "react-icons/fa";
import { BiLogoTypescript, BiLogoTailwindCss, BiLogoFirebase } from "react-icons/bi";
import { RiNextjsFill } from "react-icons/ri";
import { SiRedux, SiJest } from "react-icons/si";
import imgProjectLinks from "../assets/images/linktree.png";
import imgProjectBook from "../assets/images/book-tracker.png";
import imgProjectCurrency from "../assets/images/currency.png";
import imgProjectPortfolio from "../assets/images/portfolio.png";
import type { TechProps } from "../types";
import type { ProjectProps } from "../types";

export const techs: TechProps[] = [
    {name: "HTML", icon: FaHtml5},
    {name: "CSS", icon: FaCss3Alt},
    {name: "JavaScript", icon: FaJs},
    {name: "React JS", icon: FaReact},
    {name: "Next JS", icon: RiNextjsFill},
    {name: "TypeScript", icon: BiLogoTypescript},
    {name: "Redux", icon: SiRedux},
    {name: "Firebase", icon: BiLogoFirebase},
    {name: "Jest", icon: SiJest},
    {name: "TailWindCSS", icon: BiLogoTailwindCss},
    {name: "Git", icon: FaGitAlt},
    {name: "GitHub", icon: FaGithub}
];

export const projetos: ProjectProps[] = [
    {
        id: "1",
        title: "Portfolio",
        description: "Aplicação web desenvolvida com React e TypeScript para apresentar meus projetos, habilidades e formas de contato de maneira moderna e organizada. O projeto conta com navegação SPA, interface responsiva e foco em experiência do usuário. Possui formulário de contato funcional com validação em tempo real utilizando Zod e React Hook Form, além de integração com EmailJS para envio de mensagens.",
        image: imgProjectPortfolio,
        technologies: ["React", "TypeScript", "TailwindCSS", "React Hook Form", "Zod"],
        repository: "https://github.com/jotavitorz/joaovitor-portfolio",
        deploy: "https://joaovitor-portfolio-coral.vercel.app/",
    },
    {
        id: "2",
        title: "LinkTree",
        description: "Aplicação moderna inspirada no Linktree, criada com React, TypeScript e Tailwind CSS, com autenticação e proteção de rotas. Integra o Firebase para armazenamento dos links e controle de usuários, oferecendo uma experiência fluida e segura para quem deseja centralizar seus conteúdos em um único lugar.",
        image: imgProjectLinks,
        technologies: ["TypeScript", "Firebase", "React", "TailwindCSS"],
        repository: "https://github.com/jotavitorz/projeto-linktree",
        deploy: "https://jotavitor-links.vercel.app/",
    },
    {
        id: "3",
        title: "CryptoCurrency",
        description: "Aplicativo web desenvolvido em React e TypeScript que exibe em tempo real os preços e variações de criptomoedas, integrando dados da API CoinCap.io. O projeto destaca-se pela interface limpa, atualização dinâmica e foco na usabilidade.",
        image: imgProjectCurrency,
        technologies: ["React", "TypeScript", "API REST", "CoinCap.io"],
        repository: "https://github.com/jotavitorz/cryptocurrency-app",
        deploy: "https://cryptocurrency-app-psi.vercel.app/"
    },
    {
        id: "4",
        title: "Book Tracker",
        description: "Aplicação web desenvolvida com React e TypeScript para gerenciamento de leituras. Permite cadastrar livros, acompanhar o progresso em páginas e visualizar automaticamente o status (quero ler, lendo ou concluído). O projeto foca em organização de estado, lógica de atualização dinâmica e persistência de dados no navegador, oferecendo uma experiência simples e funcional ao usuário.",
        deploy: "https://booktracker-gamma.vercel.app/",
        repository: "https://github.com/jotavitorz/book-tracker",
        image: imgProjectBook,
        technologies: ["React", "TypeScript", "Vite", "LocalStorage"],
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