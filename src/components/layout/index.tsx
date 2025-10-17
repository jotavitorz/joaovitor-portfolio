import { Outlet } from "react-router-dom";
import { Header } from "../Header";

export function Layout() {
    return (
        <div className="bg-zinc-300 w-full">
            <Header />
            <Outlet />
        </div>
    )
}
