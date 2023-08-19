import SectionTitle from "../../../components/SectionTitle";
import useTheme from "../../../hooks/useTheme";

const AboutUs = () => {
    const { dark } = useTheme();
    return (
        <>
            <SectionTitle>About Us</SectionTitle>
            <div className={`max-w-screen-xl mx-auto flex flex-col-reverse py-4 md:flex-row items-center gap-8 ${dark && "bg-indigo-950 md:px-6"}`}>
                <div className="w-5/6 md:w-3/5">
                    <p className={`text-justify ${dark ? "text-primary-content" : "text-slate-500"}`}>At SWAPNO Designer and Consultant, we are passionate creators and innovative problem-solvers dedicated to transforming visions into reality. Our company stands as a beacon of creativity, offering a wide spectrum of design and consulting services that empower individuals and businesses to thrive in an ever-evolving world.<br /><span className="font-bold">Our vision</span> is to be a leading force in shaping inspiring environments and fostering sustainable growth through ingenious design and insightful consultation. We aim to infuse every project with a touch of brilliance, elevating spaces and ideas to their utmost potential.</p>
                </div>
                <div className="w-4/5 md:w-2/5">
                    <img src="https://placehold.co/600x400" />
                </div>
            </div >
        </>
    );
};

export default AboutUs;