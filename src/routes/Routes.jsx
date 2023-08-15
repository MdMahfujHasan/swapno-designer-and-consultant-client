import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main";
import Home from "../pages/Home/Home/Home";
import BoardOfDirectors from '../pages/AboutUs/BoardOfDirectors/BoardOfDirectors';
import OurTeam from '../pages/AboutUs/OurTeam/OurTeam';
import OurServices from '../pages/OurServices/OurServices';
import GarmentsSector from '../pages/Projects/GarmentsSector/GarmentsSector';
import TelecomSector from '../pages/Projects/TelecomSector/TelecomSector';
import RhdBangladesh from '../pages/Projects/RhdBangladesh/RhdBangladesh';
import BangladeshRailway from '../pages/Projects/BangladeshRailway/BangladeshRailway';
import Others from '../pages/Projects/Others/Others';
import Events from '../pages/Events/Events';
import Career from '../pages/Career/Career';
import ContactUs from '../pages/ContactUs/ContactUs';
import ServiceDetails from "../pages/OurServices/ServiceDetails";
import GarmentDetails from "../pages/Projects/GarmentsSector/GarmentDetails";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <Main></Main>,
        children: [
            {
                path: "/",
                element: <Home></Home>
            },
            {
                path: "about-us/board-of-directors",
                element: <BoardOfDirectors></BoardOfDirectors>
            },
            {
                path: "about-us/our-team",
                element: <OurTeam></OurTeam>
            },
            {
                path: "our-services",
                element: <OurServices></OurServices>
            },
            {
                path: "our-services/:id",
                element: <ServiceDetails></ServiceDetails>,
                loader: ({ params }) => fetch(`http://localhost:5000/our-services/${params.id}`)
            },
            {
                path: "projects/garments-sector",
                element: <GarmentsSector></GarmentsSector>
            },
            {
                path: "projects/garments-sector/:id",
                element: <GarmentDetails></GarmentDetails>,
                loader: ({ params }) => fetch(`http://localhost:5000/garments-sector/${params.id}`)
            },
            {
                path: "projects/telecom-sector",
                element: <TelecomSector></TelecomSector>
            },
            {
                path: "projects/rhd-bangladesh",
                element: <RhdBangladesh></RhdBangladesh>
            },
            {
                path: "projects/bangladesh-railway",
                element: <BangladeshRailway></BangladeshRailway>
            },
            {
                path: "projects/others",
                element: <Others></Others>
            },
            {
                path: "events",
                element: <Events></Events>
            },
            {
                path: "career",
                element: <Career></Career>
            },
            {
                path: "contact-us",
                element: <ContactUs></ContactUs>
            }
        ]
    },
]);