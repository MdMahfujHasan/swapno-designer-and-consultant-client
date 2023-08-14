import AboutUs from "../AboutUs/AboutUs";
import Banner from "../Banner/Banner";
import Featured from "../Featured/Featured";
import OurClients from "../OurClients/OurClients";
import WhyChooseUs from "../WhyChooseUs/WhyChooseUs";

const Home = () => {
    return (
        <>
            <Banner></Banner>
            <Featured></Featured>
            <AboutUs></AboutUs>
            <WhyChooseUs></WhyChooseUs>
            <OurClients></OurClients>
        </>
    );
};

export default Home;