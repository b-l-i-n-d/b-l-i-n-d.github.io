import { FaGraduationCap } from 'react-icons/fa';
import Sust from '../assets/SUST logo.png';

function Education() {
    return (
        <section id="education" className="mx-auto max-w-7xl px-4 pt-10">
            <div className="flex flex-col items-center justify-center space-y-2 pt-10">
                <h2 className="text-2xl font-bold">Education</h2>
                <div className="h-1 w-20 rounded-full bg-primary" />
            </div>

            <div className="mx-auto flex max-w-4xl flex-col space-y-8 py-10 font-body">
                <div className="absolute inset-x-0 left-6 z-0 h-[36rem] w-0.5 bg-primary md:right-0 md:left-0 md:mx-auto" />
                <div className="relative z-10">
                    <div className="h-5 w-5 rounded-full border-2 border-primary bg-base-100 md:right-0 md:left-0 md:mx-auto " />
                    <div className="pl-8 pt-0 md:ml-auto md:w-1/2">
                        <div className="transform rounded-2xl rounded-tl-none bg-base-100  p-4 shadow-xl transition-all duration-300 hover:translate-x-2 hover:shadow-xl hover:shadow-primary/30 ">
                            <p className="absolute -top-9 text-xs font-medium tracking-widest text-primary sm:text-sm">
                                2017 - 2022
                            </p>
                            <a
                                href="https://www.sust.edu/"
                                target="_blank"
                                className="mb-4 inline-flex items-center text-base font-semibold hover:text-secondary sm:text-xl"
                                rel="noreferrer"
                            >
                                <img
                                    className="mr-2 h-5 w-auto sm:h-6"
                                    src={Sust}
                                    alt="codelinker"
                                />
                                Shahjalal University of Science and Technology
                            </a>
                            <p className="font-semibold">Bechelor of Science (B.Sc)</p>
                            <p>
                                Department of
                                <span className="font-semibold"> Software Engineering</span>
                            </p>
                        </div>
                    </div>
                </div>
                <div className="relative z-10">
                    <div className="h-5 w-5 rounded-full border-2 border-primary bg-base-100 md:right-0 md:left-0 md:mx-auto" />
                    <div className="pl-8 pt-0 md:ml-0 md:mr-auto md:w-1/2 md:pl-0 md:pr-8">
                        <div className="transform rounded-2xl rounded-tl-none bg-base-100 p-4 shadow-xl transition-all duration-300 hover:translate-x-2 hover:shadow-primary/30 md:rounded-tl-2xl md:rounded-tr-none md:hover:-translate-x-2">
                            <p className="absolute -top-9 text-xs font-medium tracking-widest text-primary sm:text-sm">
                                2015 - 2016
                            </p>
                            <a
                                href="https://chowgachadegreecollege.jessoreboard.gov.bd/"
                                target="_blank"
                                className="mb-4 inline-flex items-center text-base font-semibold hover:text-secondary sm:text-xl"
                                rel="noreferrer"
                            >
                                <span>
                                    <FaGraduationCap className="mr-2" size={32} />
                                </span>
                                Chowgacha Govt. College
                            </a>
                            <p>Higher Secondary School Certificate (HSC)</p>
                            <p>
                                GPA: <span className="font-semibold">5.00</span> out of 5.00
                            </p>
                            <p>
                                Group: <span className="font-semibold">Science</span>
                            </p>
                        </div>
                    </div>
                </div>
                <div className="relative z-10">
                    <div className="h-5 w-5 rounded-full border-2 border-primary bg-base-100 md:right-0 md:left-0 md:mx-auto " />
                    <div className="pl-8 pt-0 md:ml-auto md:w-1/2">
                        <div className="transform rounded-2xl rounded-tl-none bg-base-100  p-4 shadow-xl transition-all duration-300 hover:translate-x-2 hover:shadow-xl hover:shadow-primary/30 ">
                            <p className="absolute -top-9 text-xs font-medium tracking-widest text-primary sm:text-sm">
                                2010 - 2014
                            </p>
                            <a
                                href="https://chougachhashahadatpilotsecondaryschool.jessoreboard.gov.bd/"
                                target="_blank"
                                className="mb-4 inline-flex items-center text-base font-semibold hover:text-secondary sm:text-xl"
                                rel="noreferrer"
                            >
                                <span>
                                    <FaGraduationCap className="mr-2" size={32} />
                                </span>
                                Chowgacha Govt. Shahadat Pilot Model Secondary School
                            </a>
                            <p className="font-semibold">Secondary School Certificate (SSC)</p>
                            <p>
                                GPA: <span className="font-semibold"> 5.00</span> out of 5.00
                            </p>
                            <p>
                                Group: <span className="font-semibold">Science</span>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Education;
