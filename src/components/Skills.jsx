import { FaBootstrap, FaCss3Alt, FaGitAlt, FaHtml5, FaJs, FaNode, FaReact } from 'react-icons/fa';
import { SiExpress, SiJquery, SiMongodb, SiRedux, SiTailwindcss } from 'react-icons/si';

function Skills() {
    return (
        <section id="skills" className="mx-auto max-w-7xl px-4 pt-10">
            <div className="flex flex-col items-center justify-center space-y-2 pt-10">
                <h2 className="text-2xl font-bold">Skills</h2>
                <div className="h-1 w-20 rounded-full bg-primary" />
            </div>
            <div className="flex flex-wrap justify-center gap-5 py-5">
                <div className="card flex flex-col items-center rounded-3xl border-b-8 border-transparent bg-base-100 shadow-xl transition duration-300 hover:-translate-y-1 hover:border-primary hover:shadow-primary/30">
                    <div className="px-10 pt-10 text-orange-500">
                        <FaHtml5 size={96} />
                    </div>
                    <div className="card-body items-center text-center">
                        <h2 className="card-title">HTML</h2>
                    </div>
                </div>
                <div className="card flex flex-col items-center rounded-3xl border-b-8 border-transparent bg-base-100 shadow-xl transition duration-300 hover:-translate-y-1 hover:border-primary hover:shadow-primary/30">
                    <div className="px-10 pt-10 text-blue-500">
                        <FaCss3Alt size={96} />
                    </div>
                    <div className="card-body items-center text-center">
                        <h2 className="card-title">CSS</h2>
                    </div>
                </div>
                <div className="card flex flex-col items-center rounded-3xl border-b-8 border-transparent bg-base-100 shadow-xl transition duration-300 hover:-translate-y-1 hover:border-primary hover:shadow-primary/30">
                    <div className="px-10 pt-10 text-yellow-500">
                        <FaJs size={96} />
                    </div>
                    <div className="card-body items-center text-center">
                        <h2 className="card-title">JavsScript</h2>
                    </div>
                </div>
                <div className="card flex flex-col items-center rounded-3xl border-b-8 border-transparent bg-base-100 shadow-xl transition duration-300 hover:-translate-y-1 hover:border-primary hover:shadow-primary/30">
                    <div className="px-10 pt-10 text-green-700">
                        <FaNode size={96} />
                    </div>
                    <div className="card-body items-center text-center">
                        <h2 className="card-title">NodeJs</h2>
                    </div>
                </div>
                <div className="card flex flex-col items-center rounded-3xl border-b-8 border-transparent bg-base-100 shadow-xl transition duration-300 hover:-translate-y-1 hover:border-primary hover:shadow-primary/30">
                    <div className="px-10 pt-10 text-slate-500">
                        <SiExpress size={96} />
                    </div>
                    <div className="card-body items-center text-center">
                        <h2 className="card-title">ExpressJs</h2>
                    </div>
                </div>
                <div className="card flex flex-col items-center rounded-3xl border-b-8 border-transparent bg-base-100 shadow-xl transition duration-300 hover:-translate-y-1 hover:border-primary hover:shadow-primary/30">
                    <div className="px-10 pt-10 text-purple-700">
                        <FaBootstrap size={96} />
                    </div>
                    <div className="card-body items-center text-center">
                        <h2 className="card-title">Bootstrap</h2>
                    </div>
                </div>
                <div className="card flex flex-col items-center rounded-3xl border-b-8 border-transparent bg-base-100 shadow-xl transition duration-300 hover:-translate-y-1 hover:border-primary hover:shadow-primary/30">
                    <div className="px-10 pt-10 text-sky-500">
                        <FaReact size={96} />
                    </div>
                    <div className="card-body items-center text-center">
                        <h2 className="card-title">React</h2>
                    </div>
                </div>
                <div className="card flex flex-col items-center rounded-3xl border-b-8 border-transparent bg-base-100 shadow-xl transition duration-300 hover:-translate-y-1 hover:border-primary hover:shadow-primary/30">
                    <div className="px-10 pt-10 text-purple-500">
                        <SiRedux size={96} />
                    </div>
                    <div className="card-body items-center text-center">
                        <h2 className="card-title">Redux</h2>
                    </div>
                </div>
                <div className="card flex flex-col items-center rounded-3xl border-b-8 border-transparent bg-base-100 shadow-xl transition duration-300 hover:-translate-y-1 hover:border-primary hover:shadow-primary/30">
                    <div className="px-10 pt-10 text-red-500">
                        <FaGitAlt size={96} />
                    </div>
                    <div className="card-body items-center text-center">
                        <h2 className="card-title">Git</h2>
                    </div>
                </div>
                <div className="card flex flex-col items-center rounded-3xl border-b-8 border-transparent bg-base-100 shadow-xl transition duration-300 hover:-translate-y-1 hover:border-primary hover:shadow-primary/30">
                    <div className="px-10 pt-10 text-blue-700">
                        <SiJquery size={96} />
                    </div>
                    <div className="card-body items-center text-center">
                        <h2 className="card-title">jQuery</h2>
                    </div>
                </div>
                <div className="card flex flex-col items-center rounded-3xl border-b-8 border-transparent bg-base-100 shadow-xl transition duration-300 hover:-translate-y-1 hover:border-primary hover:shadow-primary/30">
                    <div className="px-10 pt-10 text-green-600">
                        <SiMongodb size={96} />
                    </div>
                    <div className="card-body items-center text-center">
                        <h2 className="card-title">MongoDB</h2>
                    </div>
                </div>
                <div className="card flex flex-col items-center rounded-3xl border-b-8 border-transparent bg-base-100 shadow-xl transition duration-300 hover:-translate-y-1 hover:border-primary hover:shadow-primary/30">
                    <div className="px-10 pt-10 text-sky-500">
                        <SiTailwindcss size={96} />
                    </div>
                    <div className="card-body items-center text-center">
                        <h2 className="card-title">TailwindCSS</h2>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Skills;
