import { FaHtml5, FaCss3Alt, FaJs, FaReact, FaGithub, FaGitAlt } from "react-icons/fa";
import { BiLogoTypescript, BiLogoTailwindCss, BiLogoFirebase } from "react-icons/bi"

export function Technologies() {
    return (
        <section className="h-full w-full bg-slate-800 pb-16">

            <h4 className="text-5xl text-orange-600 font-semibold text-center mb-10">Tecnologias</h4>

            <div className="w-full px-4 py-6">

                <div className="grid [grid-template-columns:repeat(auto-fit,minmax(100px,1fr))] text-neutral-200 gap-2">
                    <span className="flex flex-col gap-1 font-bold items-center">
                        <FaHtml5 className="w-8e h-8" />
                        HTML
                    </span>
                    <span className="flex flex-col gap-1 font-bold items-center">
                        <FaCss3Alt className="w-8 h-8" />
                        CSS
                    </span>
                    <span className="flex flex-col gap-1 font-bold items-center">
                        <FaJs className="w-8 h-8" />
                        JavaScript
                    </span>
                    <span className="flex flex-col gap-1 font-bold items-center">
                        <FaReact className="w-8 h-8" />
                        React JS
                    </span>
                    <span className="flex flex-col gap-1 font-bold items-center">
                        <BiLogoTypescript className="w-8 h-8" />
                        TypeScript
                    </span>
                    <span className="flex flex-col gap-1 font-bold items-center">
                        <BiLogoFirebase className="w-8 h-8" />
                        Firebase
                    </span>
                    <span className="flex flex-col gap-1 font-bold items-center">
                        <BiLogoTailwindCss className="w-8 h-8" />
                        TailWindCSS
                    </span>
                    <span className="flex flex-col gap-1 font-bold items-center">
                        <FaGitAlt className="w-8 h-8" />
                        Git
                    </span>  
                    <span className="flex flex-col gap-1 font-bold items-center">
                        <FaGithub className="w-8 h-8" />
                        GitHub
                    </span>
                </div>

            </div>    

        </section>
    )
}
