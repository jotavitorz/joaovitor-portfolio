import { createBrowserRouter } from "react-router-dom";

import { Layout } from "./components/layout";
import { Home } from "./pages/home";
import { About } from "./pages/about";
import { Projects } from "./pages/projects";
import { Contact } from "./pages/contact";
import { ErrorPage } from "./pages/error";


const router = createBrowserRouter([
    {
        element: <Layout />,
        children: [
            { element: <Home />, path: "/" },
            { element: <About />, path: "/sobre" },
            { element: <Projects />, path: "/projetos" },
            { element: <Contact />, path: "/contato"},
        ]
    },
    { element: <ErrorPage />, path: "*" }
])

export { router }
