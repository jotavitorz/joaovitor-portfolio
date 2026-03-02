import { ContactPreview } from "../../components/ContactPreview";
import bgImage from "../../assets/images/about-image.jpg";
import { FaGithub, FaInstagram, FaLinkedin } from "react-icons/fa";
import { IoMdDocument } from "react-icons/io";

export function Contact() {
    return (
        <main className="min-h-screen bg-linear-to-b from-slate-900 to-zinc-900 from-90% flex flex-col-reverse pt-16 md:pt-0 md:flex-row items-center">
            <div 
                className="flex-1 w-full h-full bg-cover bg-center bg-no-repeat "
                style={{backgroundImage: `url(${bgImage})`}}
            >
                <section className="w-full h-full md:min-h-screen bg-zinc-900/85 flex md:pl-16 items-center justify-center md:justify-start max-h-10/12">

                    <div className="flex flex-col gap-6 py-20 md:py-0 text-neutral-200 text-2xl sm:text-3xl">

                        <a 
                            className="flex items-center gap-2 md:hover:-translate-y-2 duration-300 ease-in-out"
                            href="https://github.com/jotavitorz" target="_blank" rel="external" 
                        >
                            <FaGithub className="w-10 h-10 text-gray-400" />
                            <span className="font-medium">GitHub</span>
                        </a>

                        <a 
                            className="flex items-center gap-2 md:hover:-translate-y-2 duration-300 ease-in-out"
                            href="https://www.linkedin.com/in/devjoaovitor" target="_blank" rel="external" 
                        >
                            <FaLinkedin className="w-10 h-10 text-gray-400" />
                            <span className="font-medium">LinkedIn</span>
                        </a>

                        <a 
                            className="flex items-center gap-2 md:hover:-translate-y-2 duration-300 ease-in-out" 
                            href="../../../public/assets/docs/JoaoVitor_CV_PTBR.pdf" download="JoaoVitor_CV_PTBR.pdf" type="application/pdf"
                        >
                            <IoMdDocument className="w-10 h-10 text-gray-400" />
                            <span className="font-medium">Curriculo</span>
                        </a>

                        <a 
                            className="flex items-center gap-2 md:hover:-translate-y-2 duration-300 ease-in-out" 
                            href="https://www.instagram.com/jvtorzx/" target="_blank" rel="external" 
                        >
                            <FaInstagram className="w-10 h-10 text-gray-400" />
                            <span className="font-medium">Intagram</span>
                        </a>
                    </div>

                </section>
            </div>
            
            <div className="flex-2 w-full h-full ">
                <ContactPreview />
            </div>
        </main>
    )
}

