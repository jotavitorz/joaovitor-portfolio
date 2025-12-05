import { GrDeploy } from "react-icons/gr";
import { FaGithub } from "react-icons/fa";

import projectPview1 from "../../assets/project-1.png";
import projectPview2 from "../../assets/project-2.png";
import projectPview3 from "../../assets/project-3.png";

interface ProjetsProps {
    id: string;
    title: string;
    description: string
    image: string;
    technologies: string[];
    repository: string;
    deploy: string;
}

const projetos: ProjetsProps[] = [
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
        deploy: "https://jotavitor-links.vercel.app/",
    }
];

export function ProjectsPreview() {
    return (
        <section className="min-h-screen w-full bg-slate-800 py-24 px-8">
            
            <h5 className="text-4xl sm:text-5xl text-orange-600 font-semibold text-center mb-20">Projetos</h5>

            <div className="grid grid-cols-[repeat(auto-fit,minmax(300px,1fr))] sm:grid-cols-[repeat(auto-fit,minmax(400px,1fr))] gap-8 max-w-[1200px] my-0 mx-auto">
                
                {projetos.map((projeto) => (
                    <div key={projeto.id} 
                        className="bg-slate-900 rounded-2xl overflow-hidden text-neutral-200 flex flex-col h-full hover:scale-105 duration-300 transition-transform">

                        <img className="h-[300px] w-full object-cover" src={projeto.image} alt={`Foto do Projeto ${projeto.title}`} />

                        <ul className="flex mt-3 pl-2">
                            {projeto.technologies.map((technologie) => (
                                <li className="flex p-1 mx-1 bg-gray-700 rounded text-[14px] font-bold">
                                    {technologie}
                                </li>
                            ))}
                        </ul>                       

                        <div className="p-4 relative flex flex-col grow">
                            <h6 className="text-2xl sm:text-3xl text-orange-600 font-semibold mb-4 mt-2">
                                {projeto.title}
                            </h6>

                            <p className="sm:text-lg mb-4">
                                {projeto.description}
                            </p>

                            <nav className="flex justify-around items-center text-slate-900 mt-auto">
                                <a href={projeto.deploy} target="_blank" 
                                className="py-2 px-4 bg-neutral-100 font-bold rounded-md flex items-center gap-2">
                                    <GrDeploy className="w-4 h-4" />
                                    <span className="text-sm sm:text-[16px]">Projeto</span>
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
