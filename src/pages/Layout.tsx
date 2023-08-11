import {Outlet} from "react-router-dom";
import NavBar from "../components/NavBar.tsx";

const Layout = () => {
    return (
        <>
            <NavBar/>
            <Outlet/>
        </>
    );
};

export default Layout;
