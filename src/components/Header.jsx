import { FaArrowDown } from 'react-icons/fa';
import CV from '../assets/cv.pdf';

function Header() {
    return (
        <section id="header" className="mx-auto max-w-7xl">
            <div className="h-screen pt-28 text-center font-title">
                <div className="space-y-3 md:space-y-5 lg:space-y-6">
                    <div className="text-xl font-semibold sm:text-2xl lg:text-3xl">Hello, I am</div>
                    <div className="text-3xl font-bold sm:text-5xl lg:text-7xl">Fahim Faisal</div>
                    <div className="text-lg font-semibold sm:text-xl lg:text-2xl">
                        I am a full stack developer
                    </div>
                    <div className="space-x-3">
                        <a
                            target="_blank"
                            href={CV}
                            type="button"
                            className="btn btn-outline btn-primary"
                            rel="noreferrer"
                        >
                            Download CV
                        </a>
                        <a href="#contact" type="button" className="btn btn-primary">
                            Get in touch
                        </a>
                    </div>
                </div>
                <div className="absolute bottom-4 left-1/2 items-center justify-center space-y-5">
                    <div className="-ml-10 font-bold">Scroll down</div>
                    <FaArrowDown className="-ml-1 animate-bounce text-primary" />
                </div>
            </div>
        </section>
    );
}

export default Header;
