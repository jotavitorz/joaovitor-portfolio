import { Hero } from "../../components/Hero";
import { AboutPreview } from "../../components/AboutPreview";
import { Technologies } from "../../components/Technologies";
import { ProjectsPreview } from "../../components/ProjectsPreview";


export function Home(){
    return (
        <main> 
            <Hero />
            <AboutPreview />
            <Technologies />
            <ProjectsPreview />
        </main>
    )
}
