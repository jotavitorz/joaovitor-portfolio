import type { IconType } from "react-icons";

export interface TechProps {
    name: string;
    icon: IconType;
}

export type TechnologiesProps = {
    showTitle?: boolean;
}

export interface ProjectProps {
    id: string;
    title: string;
    description: string;
    image: string;
    technologies: string[];
    repository: string;
    deploy: string;
}

export interface ContactFormData {
    name: string;
    email: string;
    message: string;
}