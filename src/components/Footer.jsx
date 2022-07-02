import { BsLinkedin } from 'react-icons/bs';
import { FaFacebook, FaGithub } from 'react-icons/fa';
import { FiMail } from 'react-icons/fi';

function Footer() {
    return (
        <footer className="footer footer-center rounded bg-base-200 p-5 text-base-content">
            <div className="flex flex-wrap justify-center gap-4">
                <a href="#about" className="link link-hover">
                    About
                </a>
                <a href="#contact" className="link link-hover">
                    Contact
                </a>
                <a href="#skills" className="link link-hover">
                    Skills
                </a>
                <a href="#education" className="link link-hover">
                    Education
                </a>
                <a href="#experiences" className="link link-hover">
                    Experinences
                </a>
                <a href="#projects" className="link link-hover">
                    Projects
                </a>
            </div>
            <div>
                <div className="flex flex-wrap justify-center gap-2">
                    <a
                        target="_blank"
                        href="https://www.facebook.com/abir.fahim.faisal/"
                        type="button"
                        className="btn btn-ghost"
                        rel="noreferrer"
                    >
                        <FaFacebook size={32} />
                    </a>
                    <a
                        target="_blank"
                        href="https://github.com/b-l-i-n-d"
                        type="button"
                        className="btn btn-ghost"
                        rel="noreferrer"
                    >
                        <FaGithub size={32} />
                    </a>
                    <a
                        target="_blank"
                        href="mailto:fahim.faisal.abir@gmail.com"
                        type="button"
                        className="btn btn-ghost"
                        rel="noreferrer"
                    >
                        <FiMail size={32} />
                    </a>
                    <a
                        target="_blank"
                        href="mailto:fahim.faisal.abir@gmail.com"
                        type="button"
                        className="btn btn-ghost"
                        rel="noreferrer"
                    >
                        <BsLinkedin size={32} />
                    </a>
                </div>
            </div>
            <div>
                <p>Copyright © 2022 - Made with ❤️ | Fahim Faisal</p>
            </div>
        </footer>
    );
}

export default Footer;
