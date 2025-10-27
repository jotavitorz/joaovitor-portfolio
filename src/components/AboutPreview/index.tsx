import { IoDocumentOutline } from "react-icons/io5"
import { FaLinkedinIn } from "react-icons/fa";
import about1Img from "../../assets/about-image.jpg";
import about2Img from "../../assets/github-image.jpeg";

export function AboutPreview(){
    return (
        <section className="min-h-screen w-full bg-linear-to-b from-zinc-900 to-slate-800 from-20%  flex items-center py-16">

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center text-neutral-200 px-4">
            <div className="relative">
                <div className="relative w-full h-[400px] rounded-3xl overflow-hidden">
                    <img src={about1Img} alt="Foto do Setup" className="object-cover hover:scale-110 duration-300" />
                </div>

                <div className="absolute w-30 h-30 right-4 -bottom-8 border-4 overflow-hidden rounded-lg border-gray-500">
                    <a href="#">
                        <img src={about2Img} alt="Logo Github"/>
                    </a>
                </div>

            </div>

            <div className="font-semibold text-lg">
                <h3 className="text-5xl font-bold mb-6 text-orange-600">Sobre min</h3>

                <p className="mb-4">
                    Sou João Vitor, desenvolvedor focado em criar soluções web modernas, rápidas e bem estruturadas.
                    Busco sempre escrever código limpo, entender o porquê das tecnologias e entregar projetos funcionais e visualmente profissionais.                    
                </p>

                <p className="mb-4">
                    Tenho experiência em criar interfaces responsivas, integração com APIs e projetos fullstack, unindo performance e design. Mais do que programar, gosto de resolver problemas reais, aprender constantemente e colaborar em ambientes de equipe e inovação.
                </p>

                <p className="mb-4">
                    Atualmente, foco em consolidar meus conhecimentos e evoluir como Desenvolvedor Front-End / Fullstack, buscando entregar valor através da tecnologia.
                </p>

                <div className="flex w-full gap-10">
                    <a href="#"
                        className="bg-orange-600 px-4 py-2 rounded-md flex gap-2 items-center text-neutral-200"
                    >
                        <IoDocumentOutline className="h-5 w-5" /> 
                        Curriculo
                    </a>

                    <a href="#"
                        className="bg-orange-600 px-4 py-2 rounded-md flex gap-2 items-center text-neutral-200"
                    >
                        <FaLinkedinIn className="h-5 w-5" />
                        Linkedin
                    </a>
                </div>

            </div>
        </div>   
        </section>
    )
}

