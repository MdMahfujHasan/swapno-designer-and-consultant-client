import Marquee from "react-fast-marquee";
import SectionTitle from "../../../components/SectionTitle";
import useTheme from "../../../hooks/useTheme";

const OurClients = () => {
    const marquee = "w-40 md:w-52 mr-8";
    const { dark } = useTheme();
    return (
        <>
            <SectionTitle>Our Clients</SectionTitle>
            <Marquee
                pauseOnHover={true}
                speed={50}
                className={`p-4 ${dark && "bg-indigo-950"}`}
            >
                <img src="https://placehold.co/400" className={marquee} />
                <img src="https://placehold.co/400" className={marquee} />
                <img src="https://placehold.co/400" className={marquee} />
                <img src="https://placehold.co/400" className={marquee} />
                <img src="https://placehold.co/400" className={marquee} />
                <img src="https://placehold.co/400" className={marquee} />
                <img src="https://placehold.co/400" className={marquee} />
                <img src="https://placehold.co/400" className={marquee} />
            </Marquee>
        </>
    );
};

export default OurClients;
