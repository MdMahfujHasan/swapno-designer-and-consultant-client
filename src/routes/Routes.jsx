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
import EventDetails from "../pages/Events/EventDetails";
import NotFound from "../pages/Shared/NotFound/NotFound";
import Login from "../pages/Login/Login/Login";
import PrivateRoute from "./PrivateRoute";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <Main />,
        children: [
            {
                path: "/",
                element: <Home />
            },
            {
                path: "about-us/board-of-directors",
                element: <PrivateRoute><BoardOfDirectors /></PrivateRoute>
            },
            {
                path: "about-us/our-team",
                element: <PrivateRoute><OurTeam /></PrivateRoute>
            },
            {
                path: "our-services",
                element: <OurServices />
            },
            {
                path: "our-services/:id",
                element: <ServiceDetails />,
                loader: ({ params }) => fetch(`http://localhost:5000/our-services/${params.id}`)
            },
            {
                path: "projects/garments-sector",
                element: <GarmentsSector />
            },
            {
                path: "projects/garments-sector/:id",
                element: <GarmentDetails />,
                loader: ({ params }) => fetch(`http://localhost:5000/garments-sector/${params.id}`)
            },
            {
                path: "projects/telecom-sector",
                element: <TelecomSector />
            },
            {
                path: "projects/rhd-bangladesh",
                element: <RhdBangladesh />
            },
            {
                path: "projects/bangladesh-railway",
                element: <BangladeshRailway />
            },
            {
                path: "projects/others",
                element: <Others />
            },
            {
                path: "events",
                element: <Events />
            },
            {
                path: "events/:id",
                element: <EventDetails />,
                loader: ({ params }) => fetch(`http://localhost:5000/events/${params.id}`)
            },
            {
                path: "career",
                element: <Career />
            },
            {
                path: "contact-us",
                element: <ContactUs />
            },
            {
                path: "login",
                element: <Login />
            },
        ]
    },
    {
        path: "*",
        element: <NotFound />
    }
]);