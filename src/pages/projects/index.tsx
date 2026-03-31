import { GrDeploy } from "react-icons/gr";
import { FaGithub } from "react-icons/fa";

import imgProjectLinks from "../../assets/images/linktree.png";
import imgProjectBook from "../../assets/images/book-tracker.png";
import imgProjectCurrency from "../../assets/images/currency.png";
import imgProjectBarber from "../../assets/images/barber-house.png";
import imgProjectPortfolio from "../../assets/images/portfolio.png";

interface ProjetsProps {
    id: string;
    title: string;
    description: string
    image: string;
    technologies: string[];
    repository: string;
    deploy: string;
}

export const projetos: ProjetsProps[] = [
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
        technologies: ["TypeScript", "Firebase", "React", "Tailwind CSS"],
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
    {
        id: "5",
        title: "BarberHouse",
        description: "Site institucional de barbearia desenvolvido com Next.js, totalmente responsivo e otimizado, projetado para oferecer uma navegação fluida e moderna em diferentes dispositivos. Enfatiza boas práticas de UI/UX e performance.",
        image: imgProjectBarber,
        technologies: ["Next JS", "React", "TypScript", "TailwindCSS"],
        repository: "https://github.com/jotavitorz/barber-house",
        deploy: "https://barber-house-three.vercel.app/",
    },
];

export function Projects(){
    return (
        <section className="min-h-screen w-full bg-linear-to-b from-slate-900 to-zinc-900 from-90% py-35 px-8">
            
            <h5 className="text-4xl sm:text-5xl text-orange-600 font-bold text-center mb-20">PROJETOS</h5>

            <div className="grid grid-cols-1 gap-6 max-w-7xl mx-auto">
                
                {projetos.map((projeto) => (
                    <div key={projeto.id} 
                        className="bg-slate-900 rounded-2xl overflow-hidden text-neutral-200 flex lg:flex-row flex-col h-full hover:scale-105 duration-300 transition-transform items-center p-4 border-2 border-cyan-700">

                        <img className="flex-1 w-full h-[300px] object-cover rounded" src={projeto.image} alt={`Foto do Projeto ${projeto.title}`} />                    

                        <div className="flex-1 relative flex flex-col pl-4 grow">
                            <h6 className="text-2xl sm:text-3xl text-orange-600 font-semibold mb-4 mt-2">
                                {projeto.title}
                            </h6>

                            <p className="sm:text-lg mb-1">
                                {projeto.description}
                            </p>

                            <ul className="flex flex-wrap mt-3 mb-4 gap-2 pl-2 w-full">
                                {projeto.technologies.map((technologie) => (
                                    <li key={technologie} className="px-2 py-1 bg-gray-700 rounded-full text-xs sm:text-sm font-bold whitespace-nowrap">
                                        {technologie}
                                    </li>
                                ))}
                            </ul>   

                            <nav className="flex justify-around items-center text-slate-900 my-auto">
                                <a href={projeto.deploy} target="_blank" 
                                className="py-2 px-4 bg-neutral-100 font-bold rounded-md flex items-center gap-2">
                                    <GrDeploy className="w-4 h-4" />
                                    <span className="text-xs sm:text-[16px]">Projeto</span>
                                </a>

                                <a href={projeto.repository} target="_blank" 
                                className="py-2 px-4 bg-neutral-100 font-bold rounded-md flex items-center gap-2">
                                    <FaGithub className="w-4 h-4" />
                                    <span className="text-xs sm:text-[16px]">Repositório</span>
                                </a>
                            </nav>
                        </div>
                    </div>
                ))}                                                                            
            </div>
        </section>
    )
}
