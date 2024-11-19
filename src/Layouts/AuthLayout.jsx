import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";

const AuthLayout = () => {
    return (
        <div className="bg-[#F3F3F3]">
            <header className="w-11/12 mx-auto">
                <Navbar></Navbar>
            </header>
            <main>
                <Outlet></Outlet>
            </main>
        </div>
    );
};

export default AuthLayout;