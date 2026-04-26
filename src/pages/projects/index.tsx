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
  { 
    id: "5", 
    title: "CryptoCurrency", 
    description: "Dashboard de criptomoedas com preços e variações em tempo real, consumindo a API pública CoinCap.io. O foco do projeto foi praticar consumo de API externa, componentização e atualização automática de dados sem bibliotecas externas de estado. A interface é responsiva e exibe variações positivas e negativas com feedback visual claro.", 
    image: imgProjectCurrency, 
    technologies: ["React", "TypeScript", "Vite", "TailwindCSS", "CoinCap API"], 
    repository: "https://github.com/jotavitorz/cryptocurrency-app", 
    deploy: "https://cryptocurrency-app-psi.vercel.app/", 
  },
  { 
    id: "6", 
    title: "Book Tracker", 
    description: "App para organizar e acompanhar leituras com controle de progresso por páginas e status automático (quero ler, lendo, concluído). O foco foi aprofundar lógica de estado, custom hooks e boas práticas React sem depender de backend. A persistência é feita via LocalStorage e a transição de status é calculada automaticamente com base no progresso informado pelo usuário.", 
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
                                    <span className="text-xs sm:text-[16px]">Demo</span>
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
