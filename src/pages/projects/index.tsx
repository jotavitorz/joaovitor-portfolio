import { GrDeploy } from "react-icons/gr";
import { FaGithub } from "react-icons/fa";
import projectPview1 from "../../assets/p-1.png";
import projectPview2 from "../../assets/ex-1.png";
import projectPview3 from "../../assets/p-3.png";
import { type ProjetsProps } from "../../components/ProjectsPreview";

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

export function Projects(){
    return (
        <section className="min-h-screen w-full bg-slate-800 pb-16 pt-35 px-8">
            
            <h5 className="text-4xl sm:text-5xl text-orange-600 font-bold text-center mb-20">PROJETOS</h5>

            <div className="grid grid-cols-1 gap-6 max-w-7xl mx-auto">
                
                {projetos.map((projeto) => (
                    <div key={projeto.id} 
                        className="bg-slate-900 rounded-2xl overflow-hidden text-neutral-200 flex lg:flex-row flex-col h-full hover:scale-105 duration-300 transition-transform items-center p-4">

                        <img className="flex-1 w-full h-[300px] object-cover rounded" src={projeto.image} alt={`Foto do Projeto ${projeto.title}`} />                    

                        <div className="flex-1 relative flex flex-col pl-4 grow">
                            <h6 className="text-2xl sm:text-3xl text-orange-600 font-semibold mb-4 mt-2">
                                {projeto.title}
                            </h6>

                            <p className="sm:text-lg mb-1">
                                {projeto.description}
                            </p>

                            <ul className="flex items-center my-4 pr-2">
                                {projeto.technologies.map((technologie) => (
                                    <li key={technologie} className="select-none flex px-2 py-1 mx-1 bg-gray-700 rounded-full text-[8px] sm:text-xs font-bold">
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
