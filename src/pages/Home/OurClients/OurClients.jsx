import Marquee from "react-fast-marquee";
import SectionTitle from "../../../components/SectionTitle";

const OurClients = () => {
    const marquee = "w-40 md:w-52 mr-8";
    return (
        <div>
            <SectionTitle>Our Clients</SectionTitle>
            <Marquee
                pauseOnClick={true}
                speed={50}
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
        </div>
    );
};

export default OurClients;
