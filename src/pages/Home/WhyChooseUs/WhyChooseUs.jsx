import SectionTitle from "../../../components/SectionTitle";

const WhyChooseUs = () => {
    return (
        <>
            <SectionTitle>Why Choose Us</SectionTitle>
            <div className="max-w-screen-xl mx-auto flex items-center gap-8">
                <div className="w-3/5">
                    <p className="text-justify text-slate-500">When you choose SWAPNO Designer and Consultant, you choose innovation, collaboration, sustainability, and versatility. We are committed to delivering excellence in every project, exceeding expectations and leaving a trail of inspired spaces and empowered businesses in our wake.</p>
                    <br />
                    <ul className="list-disc text-slate-500">
                        <li>Innovative Excellence: Embrace groundbreaking and unique designs that captivate.</li>
                        <li>Collaborative Partnership: Co-create solutions that align with your vision every step of the way.</li>
                        <li>Sustainability Leaders: Choose responsible design that benefits both you and the planet.</li>
                        <li>Versatile Solutions: Seamlessly integrate architecture, interiors, graphics, and strategic insights.</li>
                        <li>Seasoned Professionals: Benefit from a team of experienced, creative, and industry-savvy experts.</li>
                        <li>Client-Centric Focus: Experience tailored solutions that prioritize your satisfaction and success.</li>
                        <li>Dreams Actualized: Turn aspirations into reality with our passion and dedication.</li>
                    </ul>
                </div>
                <div className="w-2/5">
                    <img src="https://placehold.co/600x400" />
                </div>
            </div>
        </>
    );
};

export default WhyChooseUs;