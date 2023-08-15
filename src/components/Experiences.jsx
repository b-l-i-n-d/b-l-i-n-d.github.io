import CodeLinker from '../assets/codelinker-removebg-preview.png';

function Experiences() {
    return (
        <section id="experiences" className="mx-auto max-w-7xl px-4 pt-10">
            <div className="flex flex-col items-center justify-center space-y-2 pt-10">
                <h2 className="text-2xl font-bold">Experiences</h2>
                <div className="h-1 w-20 rounded-full bg-primary" />
            </div>

            <div className="mx-auto flex max-w-4xl flex-col space-y-8 py-10 font-body">
                <div className="absolute inset-x-0 left-6 z-0 h-36 w-0.5 bg-primary md:right-0 md:left-0 md:mx-auto" />
                <div className="relative z-10">
                    <div className="h-5 w-5 rounded-full border-2 border-primary bg-base-100 md:right-0 md:left-0 md:mx-auto " />
                    <div className="pl-8 pt-0 md:ml-auto md:w-1/2">
                        <div className="transform rounded-2xl rounded-tl-none bg-base-100  p-4 shadow-xl transition-all duration-300 hover:translate-x-2 hover:shadow-xl hover:shadow-primary/30 ">
                            <p className="absolute -top-9 text-xs font-medium tracking-widest text-primary sm:text-sm">
                                September 15, 2021 - March 15, 2022
                            </p>
                            <a
                                href="https://www.codelinker.com/"
                                target="_blank"
                                className="inline-flex items-center text-base font-semibold hover:text-secondary sm:text-xl"
                                rel="noreferrer"
                            >
                                <img
                                    className="mr-2 h-5 w-auto"
                                    src={CodeLinker}
                                    alt="codelinker"
                                />
                                CodeLinker
                            </a>
                            <p className="mt-4">Frontend developer intern</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Experiences;
