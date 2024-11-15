import { Outlet } from "react-router-dom";
import LeftSide from "./LeftSide";

const Center = () => {
    return (
        <div>
            <h2 className="text-[#403F3F] text-[20px] font-[600] mb-5">Dragon News Home</h2>
            <Outlet></Outlet>
        </div>
    );
};

export default Center;