import { FiSettings } from 'react-icons/fi';
import { BsCupHot, BsFillBriefcaseFill } from 'react-icons/bs';
import ListItem from '../../../components/ListItem';
import BtnReadMore from '../../../components/BtnReadMore';
import useTheme from '../../../hooks/useTheme';

const Featured = () => {
    const { dark } = useTheme();
    const featuredIcon = `text-2xl mt-1 mr-4 w-10 h-10 p-2 text-white ${dark ? "bg-indigo-800 hover:bg-indigo-900" : "bg-sky-400 hover:bg-sky-500"}`;
    const title = `text-2xl uppercase font-semibold text-slate-700 ${dark && "text-slate-200"}`;
    const description = `text-justify w-full lg:w-80 ${dark ? "text-slate-400" : "text-slate-500"}`;
    return (
        <section className={`flex flex-col justify-around lg:flex-row p-4 gap-4 max-w-screen-2xl mx-auto ${dark && "bg-indigo-950"}`}>
            <div className='flex'>
                <FiSettings className={featuredIcon} />
                <div className='space-y-2'>
                    <h3 className={title}>Our Services</h3>
                    <ul className='w-full lg:w-80'>
                        <ListItem>Architectural & Structural Design</ListItem>
                        <ListItem>DEA (Details Engineering Assessment)</ListItem>
                        <ListItem>CAP (Corrective Action Plan) Structural</ListItem>
                        <ListItem>PS (Parallel Seismic) & PT (Pile Test)</ListItem>
                        <ListItem>NDT (Non-Destructive Test)</ListItem>
                        <ListItem>DT (Destructive Test)</ListItem>
                        <ListItem>QAC (Quality Assurance Consultancy)</ListItem>
                        <ListItem>PMC (Project Management & Consultant)</ListItem>
                        <ListItem>Retrofitting Design & Drawing</ListItem>
                    </ul>
                    <BtnReadMore to="/our-services" />
                </div>
            </div>
            <div className='flex'>
                <BsCupHot className={featuredIcon} />
                <div className="space-y-2">
                    <h3 className={title}>Events</h3>
                    <p className={description}>Embark on an illuminating journey with SWAPNO&apos;s upcoming events, where design and consultancy unite in harmonious synergy. Engage in dynamic workshops, insightful symposiums, and networking mixers that unveil the latest industry trends and strategies. Immerse yourself in thought-provoking discussions led by distinguished leaders, fostering collaborative learning and idea exchange. SWAPNO&apos;s events offer a platform to enrich your expertise and connect with peers.</p>
                    <BtnReadMore to="/events" />
                </div>
            </div>
            <div className="flex">
                <BsFillBriefcaseFill className={featuredIcon} />
                <div className="space-y-2">
                    <h3 className={title}>Career</h3>
                    <p className={description}>Step into a world of opportunities at SWAPNO and take your career to new heights. Join our team to be part of impactful design and consultancy ventures. Thrive in a dynamic work environment that encourages skill development and personal growth. We welcome enthusiastic individuals to join our community, where your contributions will shape innovative solutions and influence the future. SWAPNO is your gateway to realizing your potential and embarking on a fulfilling career journey.</p>
                    <BtnReadMore to="/career" />
                </div>
            </div>
        </section>
    );
};

export default Featured;
