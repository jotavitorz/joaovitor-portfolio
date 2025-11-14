import { Hero } from "../../components/Hero";
import { AboutPreview } from "../../components/AboutPreview";
import { Technologies } from "../../components/Technologies";
import { ProjectsPreview } from "../../components/ProjectsPreview";
import { ContactPreview } from "../../components/ContactPreview";


export function Home(){
    return (
        <main> 
            <Hero />
            <AboutPreview />
            <Technologies />
            <ProjectsPreview />
            <ContactPreview />
        </main>
    )
}
