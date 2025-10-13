import { createBrowserRouter } from "react-router-dom";

import { Home } from "./pages/home";
import { About } from "./pages/about";
import { Projects } from "./pages/projects";
import { Contact } from "./pages/contact";
import { ErrorPage } from "./pages/error";

const router = createBrowserRouter([
    {
        element: <Home />,
        path: "/"
    },
    {
        element: <About />,
        path: "/sobre"
    },
    {
        element: <Projects />,
        path: "/projetos"
    },
    {
        element: <Contact />,
        path: "/contato"
    },
    {
        element: <ErrorPage />,
        path: "*"
    }

])

export { router }
