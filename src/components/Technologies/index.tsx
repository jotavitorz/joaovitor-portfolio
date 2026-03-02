import { techs } from "../../constants";
import type { TechnologiesProps } from "../../types";

export function Technologies({ showTitle }: TechnologiesProps) {
    return (
        <section className="h-full w-full bg-slate-900 pb-16">

            {showTitle && <h4 className="text-4xl sm:text-5xl text-orange-600 font-semibold text-center mb-10">Tecnologias</h4>}

            <div className="w-full max-w-6xl px-4 py-6 mx-auto">

                <div className="grid grid-cols-[repeat(auto-fit,minmax(100px,1fr))] text-neutral-200 gap-2">
                    {techs.map((tech) => (
                        <span key={tech.name} className="flex flex-col gap-1 font-bold items-center select-none">
                            <tech.icon className="w-8 h-8" />
                            {tech.name}
                        </span>
                    ))}
                </div>

            </div>    
        </section>
    )
}
