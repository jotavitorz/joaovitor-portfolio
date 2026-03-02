import { GrDeploy } from "react-icons/gr";
import { FaGithub } from "react-icons/fa";
import { projetos } from "../../pages/projects";

export function ProjectsPreview() {
    return (
        <section className="lg:min-h-screen w-full bg-slate-900 md:py-24 px-8">
            
            <h5 className="text-4xl sm:text-5xl text-orange-600 font-semibold text-center mb-20">Projetos</h5>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-7xl mx-auto">
                
                {projetos.map((projeto) => (
                    <div key={projeto.id} 
                        className="bg-slate-900 rounded-2xl overflow-hidden text-neutral-200 flex flex-col hover:scale-105 duration-300 transition-transform border-2 border-cyan-700">

                        <img className="w-full object-cover" src={projeto.image} alt={`Foto do Projeto ${projeto.title}`} />

                        <ul className="flex flex-wrap mt-3 gap-2 pl-2 w-full">
                            {projeto.technologies.map((technologie) => (
                                <li key={technologie} className="px-2 py-1 bg-gray-700 rounded-full text-xs sm:text-sm font-bold whitespace-nowrap">
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
                                <a href={projeto.deploy} target="_blank" rel="external"
                                className="py-2 px-4 bg-neutral-100 font-bold rounded-md flex items-center gap-2">
                                    <GrDeploy className="w-4 h-4" />
                                    <span className="text-sm sm:text-[16px]">Projeto</span>
                                </a>

                                <a href={projeto.repository} target="_blank" rel="external"
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
