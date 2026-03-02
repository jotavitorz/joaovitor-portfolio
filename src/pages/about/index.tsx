import { IoMdDocument } from "react-icons/io";
import { FaLinkedinIn } from "react-icons/fa";
import about1Img from "../../assets/images/about-image.jpg";
import about2Img from "../../assets/images/github-image.jpeg";
import { Technologies } from "../../components/Technologies";


export function About(){
    return (
        <section className="min-h-screen w-full bg-linear-to-b from-slate-900 to-zinc-900 from-90% pb-16 pt-30 md:px-20 flex flex-col">

            <div className="w-full grid grid-cols-1 lg:grid-cols-1 gap-12 items-center text-neutral-200 px-4 mx-auto">

                <div className="font-semibold max-w-7xl mx-auto sm:text-xl">
                    <h3 className="text-4xl sm:text-5xl font-bold mb-6 text-orange-600">Sobre min</h3>

                    <p className="mb-4">
                        Sou João Vitor, desenvolvedor Front-End em evolução para Fullstack, com foco em criar soluções web modernas, rápidas e bem estruturadas. Entrei na tecnologia aos 16 anos, migrei do estudo de pentest para o desenvolvimento e, desde então, sigo uma jornada marcada por aprendizado contínuo, curiosidade e projetos que mostram minha evolução na prática.                  
                    </p>

                    <p className="mb-4">
                        Hoje trabalho com React, TypeScript, JavaScript, HTML, CSS e Tailwind, desenvolvendo interfaces responsivas, integrações com APIs e aplicações completas com Firebase. Gosto de entender o porquê das tecnologias, escrever código limpo e transformar ideias em produtos reais.
                    </p>

                    <p className="mb-4">
                        Minha trilha é guiada por um objetivo claro:
                        me tornar um desenvolvedor Fullstack capaz de entregar soluções inteligentes, bem projetadas e com impacto real.
                    </p>

                    <p className="mb-4">
                        Cada projeto que construo — como o Dev Currency, meu LinkTree com Firebase ou sites institucionais modernos — representa meu compromisso em aprender, evoluir e construir aplicações profissionais, sempre unindo performance, design e boas práticas.
                    </p>

                    <p className="mb-4">
                        Seja estudando Engenharia de Software, criando novos projetos ou explorando tecnologias, sigo com a mentalidade de crescimento constante e a vontade de levar valor para onde estiver.
                    </p>

                </div>

                <div className="relative md:max-w-[750px] md:mx-auto">
                    <div className="relative w-full h-[280px] sm:h-[400px] rounded-3xl overflow-hidden">
                        <img src={about1Img} alt="Foto do Setup" className="object-cover hover:scale-110 duration-300" />
                    </div>

                    <div className="absolute w-20 h-20 sm:w-30 sm:h-30 right-4 -bottom-4 sm:-bottom-8 border-4 overflow-hidden rounded-lg border-gray-500">
                        <a href="https://github.com/jotavitorz" rel="external" target="_blank">
                            <img src={about2Img} alt="Logo Github"/>
                        </a>
                    </div>
                </div>

                <div className="flex w-full gap-10 justify-center font-semibold text-lg">
                    <a href="../../../public/assets/docs/JoaoVitor_CV_PTBR.pdf" download="JoaoVitor_CV_PTBR.pdf" type="application/pdf" 
                        className="bg-orange-600 px-4 py-2 rounded-md flex gap-2 items-center text-neutral-200"
                    >
                        <IoMdDocument className="h-5 w-5" /> 
                        Curriculo
                    </a>

                    <a href="https://www.linkedin.com/in/devjoaovitor" rel="external" target="_blank"
                        className="bg-orange-600 px-4 py-2 rounded-md flex gap-2 items-center text-neutral-200"
                    >
                        <FaLinkedinIn className="h-5 w-5" />
                        Linkedin
                    </a>
                </div>  

            </div>

            <div className="my-16 w-full px-4 py-6">       
                <Technologies showTitle={false} />
            </div>
        </section>
    )
}
