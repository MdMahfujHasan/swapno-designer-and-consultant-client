import useTheme from "../../../hooks/useTheme";
import AboutUs from "../AboutUs/AboutUs";
import Banner from "../Banner/Banner";
import Featured from "../Featured/Featured";
import OurClients from "../OurClients/OurClients";
import WhyChooseUs from "../WhyChooseUs/WhyChooseUs";

const Home = () => {
    const { dark } = useTheme();
    return (
        <div className={`${dark ? "bg-indigo-950" : "bg-slate-50"}`}>
            <Banner />
            <Featured />
            <AboutUs />
            <WhyChooseUs />
            <OurClients />
        </div>
    );
};

export default Home;