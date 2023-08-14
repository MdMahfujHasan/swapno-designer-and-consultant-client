import { useState } from 'react';
import { FaPhone } from 'react-icons/fa';
import { AiFillMail, AiFillFacebook, AiFillTwitterSquare, AiFillLinkedin, AiFillYoutube } from 'react-icons/ai';
import { Link } from 'react-router-dom';
import SocialLinks from '../../../components/SocialLinks';

const ContactInfo = () => {
    const [isVisible, setIsVisible] = useState(true);

    const handleClose = () => {
        setIsVisible(false);
    };
    const socialLinks = "text-lg hover:text-sky-200";
    return (
        <>
            {isVisible && (
                <div className="bg-slate-700 p-2 text-white flex justify-between items-center">
                    <div></div>
                    <div className="flex items-center">
                        <div title="+8801716861356" className="flex items-center mr-2">
                            <FaPhone className="text-xs mr-1" />
                            <Link to="tel:+8801716861356" className="hover:underline text-sm">
                                Call Us
                            </Link>
                        </div>
                        <div title="mhhimel.buet04@gmail.com" className="flex items-center">
                            <AiFillMail className="text-xs mr-1" />
                            <Link to="mailto:mhhimel.buet04@gmail.com" className="hover:underline text-sm">
                                Email us
                            </Link>
                        </div>
                        <div className='flex items-center ml-8 space-x-1'>
                            <SocialLinks link="https://www.facebook.com/swapnodesignerandconsultant?_rdc=1&_rdr">
                                <AiFillFacebook className={socialLinks} />
                            </SocialLinks>
                            <SocialLinks link="https://www.twitter.com/">
                                <AiFillTwitterSquare className={socialLinks} />
                            </SocialLinks>
                            <SocialLinks link="https://www.youtube.com/">
                                <AiFillYoutube className={socialLinks} />
                            </SocialLinks>
                            <SocialLinks link="https://www.linkedin.com/">
                                <AiFillLinkedin className={socialLinks} />
                            </SocialLinks>
                        </div>
                    </div>
                    <button
                        onClick={handleClose}
                        className="text-xs bg-slate-500 px-2 py-1 rounded-full"
                    >
                        X
                    </button>
                </div >
            )}
        </>
    );
};

export default ContactInfo;
