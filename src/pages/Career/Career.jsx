import SectionTitle from "../../components/SectionTitle";

const Career = () => {
    return (
        <>
            <SectionTitle>Career</SectionTitle>
            <div className="max-w-screen-xl mx-auto flex flex-col md:flex-row justify-center items-center gap-8 p-4">
                <div className="w-full md:w-2/5 mx-auto">
                    <img src="https://placehold.co/600x400" />
                </div>
                <div className="w-full md:w-3/5">
                    <p className="text-slate-500 font-bold mb-2 text-lg">Welcome to the Future of Design and Consultancy – Join SWAPNO&apos;s Dynamic Team!</p>
                    <p className="text-justify text-slate-500 mb-2">At SWAPNO Designer and Consultant, we are more than just a company – we are a community of innovative minds, passionate about crafting exceptional design and consultancy solutions. If you&apos;re driven by creativity, collaboration, and a desire to make a meaningful impact, we invite you to explore the exciting career opportunities we have to offer.</p>
                </div>
            </div>
            <SectionTitle>Why Choose a Career with SWAPNO:</SectionTitle>
            <ul className="list-decimal w-4/5 mx-auto text-slate-500 space-y-3">
                <li><b>Innovation at its Core:</b> At SWAPNO, innovation is the heartbeat of everything we do. Joining our team means being part of a culture that encourages and rewards fresh ideas, pushing the boundaries of what&apos;s possible in design and consultancy.</li>
                <li><b>Collaborative Excellence:</b> We believe in the power of collaboration. As a member of the SWAPNO team, you&apos;ll have the opportunity to work alongside talented professionals from diverse backgrounds, all dedicated to achieving excellence in every project.</li>
                <li><b>Client-Centric Approach:</b> Our clients are at the heart of our business. Join us in delivering tailored solutions that not only meet their needs but exceed their expectations, leaving a lasting impact on the industries we serve.</li>
                <li><b>Continuous Growth:</b> SWAPNO is committed to your personal and professional growth. We offer ongoing training, mentorship, and opportunities to develop new skills, ensuring you stay at the forefront of the design and consultancy landscape.</li>
            </ul>
            <SectionTitle>Current Openings:</SectionTitle>
            <div className="text-xl text-center text-yellow-400">Coming soon...</div>
        </>
    );
};

export default Career;