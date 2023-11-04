import { Outlet } from "react-router-dom";
import FooterPart from "../shared/FooterPart";
import Nav from "../shared/Nav";



const Main = () => {
    return (
        <div>
            <Nav />
            <Outlet />
            <FooterPart />
        </div>
    );
};

export default Main;