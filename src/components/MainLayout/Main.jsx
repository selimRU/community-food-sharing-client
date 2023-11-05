import { Outlet } from "react-router-dom";
import FooterPart from "../shared/FooterPart";
import Nav from "../shared/Nav";
import { Toaster } from "react-hot-toast";



const Main = () => {
    return (
        <div>
            <Nav />
            <Outlet />
            <FooterPart />
            <Toaster />
        </div>
    );
};

export default Main;