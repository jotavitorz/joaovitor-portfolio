import { FaHtml5, FaCss3Alt, FaJs, FaReact, FaGithub, FaGitAlt } from "react-icons/fa";
import { BiLogoTypescript, BiLogoTailwindCss, BiLogoFirebase } from "react-icons/bi";
import { RiNextjsFill } from "react-icons/ri";
import { SiRedux, SiJest } from "react-icons/si";
import type { TechProps } from "../types";
import projectPview1 from "../assets/images/project-1.png";
import projectPview2 from "../assets/images/project-2.png";
import projectPview3 from "../assets/images/project-3.png";
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
        title: "CryptoCurrency",
        description: "Aplicativo web desenvolvido em React e TypeScript que exibe em tempo real os preços e variações de criptomoedas, integrando dados da API CoinCap.io. O projeto destaca-se pela interface limpa, atualização dinâmica e foco na usabilidade.",
        image: projectPview1,
        technologies: ["React", "TypeScript", "API REST", "CoinCap.io"],
        repository: "https://github.com/jotavitorz/cryptocurrency-app",
        deploy: "https://cryptocurrency-app-psi.vercel.app/"
    },
    {
        id: "2",
        title: "LinkTree",
        description: "Aplicação moderna inspirada no Linktree, criada com React, TypeScript e Tailwind CSS, com autenticação e proteção de rotas. Integra o Firebase para armazenamento dos links e controle de usuários, oferecendo uma experiência fluida e segura para quem deseja centralizar seus conteúdos em um único lugar.",
        image: projectPview2,
        technologies: ["TypeScript", "Firebase", "React", "Tailwind CSS"],
        repository: "https://github.com/jotavitorz/projeto-linktree",
        deploy: "https://jotavitor-links.vercel.app/",
    },
    {
        id: "3",
        title: "BarberHouse",
        description: "Site institucional de barbearia desenvolvido com Next.js, totalmente responsivo e otimizado, projetado para oferecer uma navegação fluida e moderna em diferentes dispositivos. Enfatiza boas práticas de UI/UX e performance.",
        image: projectPview3,
        technologies: ["Next JS", "React", "TypScript", "Tailwind CSS"],
        repository: "https://github.com/jotavitorz/barber-house",
        deploy: "https://barber-house-three.vercel.app/",
    }
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