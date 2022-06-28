import { FaFacebook, FaGithub, FaInstagram, FaWhatsapp } from 'react-icons/fa';
import Avatar from '../assets/avatar.jpg';

function About() {
    return (
        <section id="about" className="mx-auto max-w-7xl px-4 py-5 font-body">
            <div className="flex flex-wrap lg:flex-row">
                <div className="order-2 flex w-full flex-col gap-5 sm:w-1/2 lg:order-none lg:w-1/4">
                    <div className="flex flex-col items-center justify-center space-y-3 sm:items-start sm:justify-start">
                        <div className="flex flex-col items-center justify-center space-y-1 sm:items-start sm:justify-start">
                            <h2 className="font-title font-bold">About me</h2>
                            <div className="h-1 w-20 rounded-full bg-primary" />
                        </div>
                        <p className="text-justify">
                            I am currently studying software enginnering in Shahjalal University of
                            Science and Technology and working as an intern in Codelinker. As an
                            intern I am curretly exploring technologies but I love to work with
                            Javascript. And I always believed I need to do what I love the most. I
                            am hoping for the best, thats all for now.
                        </p>
                        <div className="divider" />
                    </div>
                    <div className="flex flex-col items-center justify-center space-y-3 sm:items-start sm:justify-start">
                        <div className="flex flex-col items-center justify-center space-y-1 sm:items-start sm:justify-start">
                            <h2 className="font-title font-bold">Contact</h2>
                            <div className="h-1 w-20 rounded-full bg-primary" />
                        </div>

                        <div className="space-x-2">
                            <a href="##" className="btn btn-ghost btn-circle text-3xl">
                                <FaFacebook />
                            </a>

                            <a href="##" className="btn btn-ghost btn-circle text-3xl">
                                <FaInstagram />
                            </a>
                            <a href="##" className="btn btn-ghost btn-circle text-3xl">
                                <FaWhatsapp />
                            </a>
                            <a href="##" className="btn btn-ghost btn-circle text-3xl">
                                <FaGithub />
                            </a>
                        </div>
                    </div>
                </div>
                <div className="order-1 flex w-full items-center justify-center pb-10 lg:order-none lg:w-2/4 lg:pb-0">
                    <img
                        className="h-[38rem] w-96 rounded-full object-cover outline outline-dashed outline-2 outline-offset-[16px] outline-primary"
                        src={Avatar}
                        alt="avatar"
                    />
                </div>
                <div className="order-3 grid w-full grid-rows-3 pt-5 sm:w-1/2 sm:pl-10 md:pt-0 lg:order-none lg:w-1/4">
                    <div className="space-y-3 text-center sm:text-right">
                        <h2 className="font-title text-4xl font-bold text-primary">
                            Years of experiences
                        </h2>
                        <div className="text-6xl font-bold">1</div>
                    </div>
                    <div className="space-y-3 text-center sm:text-right">
                        <h2 className="font-title text-4xl font-bold text-primary">
                            Known Technology
                        </h2>
                        <div className="text-6xl font-bold">12</div>
                    </div>
                    <div className="space-y-3 text-center sm:text-right">
                        <h2 className="font-title text-4xl font-bold text-primary">Project Done</h2>
                        <div className="text-6xl font-bold">25+</div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default About;
