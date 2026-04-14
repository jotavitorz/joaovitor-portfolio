import { GrDeploy } from "react-icons/gr";
import { FaGithub } from "react-icons/fa";

import imgProjectLinks from "../../assets/images/linktree.png";
import imgProjectBook from "../../assets/images/book-tracker.png";
import imgProjectCurrency from "../../assets/images/currency.png";
import imgProjectPortfolio from "../../assets/images/portfolio.png";
import imgProjectTarefas from "../../assets/images/tarefa-plus.png";
import imgProjectWebcars from "../../assets/images/webcars.png";

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
  { 
    id: "5", 
    title: "CryptoCurrency", 
    description: "Aplicação web que exibe preços e variações de criptomoedas em tempo real, consumindo dados diretamente da API pública CoinCap.io. Desenvolvida com foco em componentização, boas práticas e interface responsiva com atualização automática dos valores.", 
    image: imgProjectCurrency, 
    technologies: ["React", "TypeScript", "Vite", "TailwindCSS", "CoinCap API"], 
    repository: "https://github.com/jotavitorz/cryptocurrency-app", 
    deploy: "https://cryptocurrency-app-psi.vercel.app/", 
  },
  { 
    id: "6", 
    title: "Book Tracker", 
    description: "Aplicação para organização e acompanhamento de leituras, com cadastro de livros, controle de progresso por páginas e status automático (quero ler, lendo ou concluído). Desenvolvida com foco em lógica de estado, custom hooks e boas práticas React, com persistência dos dados via LocalStorage.", 
    deploy: "https://booktracker-gamma.vercel.app/", 
    repository: "https://github.com/jotavitorz/book-tracker", 
    image: imgProjectBook, 
    technologies: ["React", "TypeScript", "Vite", "CSS", "LocalStorage"], 
  },
];

export function Projects(){
    return (
        <section className="min-h-screen w-full bg-linear-to-b from-slate-900 to-zinc-900 from-90% py-35 px-8">
            
            <h5 className="text-4xl sm:text-5xl text-orange-600 font-bold text-center mb-20">PROJETOS</h5>

            <div className="grid grid-cols-1 gap-6 max-w-7xl mx-auto">
                
                {projetos.map((projeto) => (
                    <div 
                        key={projeto.id} 
                        className="bg-slate-900 rounded-2xl overflow-hidden text-neutral-200 flex lg:flex-row flex-col h-full hover:scale-105 duration-300 transition-transform items-center p-4 border-2 border-cyan-700"
                    >

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
