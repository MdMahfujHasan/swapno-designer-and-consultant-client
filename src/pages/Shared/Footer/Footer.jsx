import logo from '../../../assets/logo.jpg';
import { format } from 'date-fns';
import useTheme from '../../../hooks/useTheme';

const Footer = () => {
    const year = format(new Date(), 'yyyy');
    const { dark } = useTheme();
    return (
        <>
            <footer className={`footer p-12 text-base-content ${dark ? "bg-indigo-950 text-primary-content" : "bg-base-200"}`}>
                <div>
                    <img className='w-24 border border-slate-200' src={logo} alt="Logo" />
                    <p>SWAPNO Designer and Consultant<br />Providing reliable tech since 2020</p>
                </div>
                <div>
                    <span className="footer-title">Services</span>
                    <a className="link link-hover">Branding</a>
                    <a className="link link-hover">Design</a>
                    <a className="link link-hover">Marketing</a>
                    <a className="link link-hover">Advertisement</a>
                </div>
                <div>
                    <span className="footer-title">Company</span>
                    <a className="link link-hover">About us</a>
                    <a className="link link-hover">Contact</a>
                    <a className="link link-hover">Jobs</a>
                    <a className="link link-hover">Press kit</a>
                </div>
                <div>
                    <span className="footer-title">Legal</span>
                    <a className="link link-hover">Terms of use</a>
                    <a className="link link-hover">Privacy policy</a>
                    <a className="link link-hover">Cookie policy</a>
                </div>
            </footer>
            <p className={`footer footer-center pb-1 ${dark ? "bg-indigo-950 text-primary-content" : "bg-base-200"}`}>
                <small>Copyright © {year} - All right reserved by SWAPNO Designer and Consultant</small>
            </p>
        </>
    );
};

export default Footer;