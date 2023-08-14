import { Outlet } from "react-router-dom";
import NavBar from "../pages/Shared/NavBar/NavBar";
import Footer from "../pages/Shared/Footer/Footer";
import ContactInfo from "../pages/Shared/ContactInfo/ContactInfo";

const Main = () => {
    return (
        <>
            <ContactInfo></ContactInfo>
            <NavBar></NavBar>
            <Outlet></Outlet>
            <Footer></Footer>
        </>
    );
};

export default Main;