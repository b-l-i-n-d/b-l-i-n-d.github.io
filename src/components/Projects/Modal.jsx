/* eslint-disable jsx-a11y/label-has-associated-control */
import { FaExternalLinkAlt, FaGithub } from 'react-icons/fa';

function Modal({ id, title, description, tags, img, links }) {
    const allTags = tags;
    const tagElements = allTags.map((tag) => (
        <div key={tag.id} className="badge badge-outline">
            {tag.name}
        </div>
    ));
    return (
        <>
            <input type="checkbox" id={id} className="modal-toggle" />
            <div className="no-scrollbar modal modal-bottom">
                <div className="modal-box w-full max-w-5xl sm:w-11/12 md:w-9/12 lg:w-7/12 ">
                    <label htmlFor={id} className="btn btn-circle btn-sm absolute right-2 top-2">
                        ✕
                    </label>
                    <figure className="mb-4">
                        <img
                            className="rounded-2xl border-b-2 border-base-300 shadow"
                            src={img}
                            alt={title}
                        />
                    </figure>
                    <h2 className="space-x-2">
                        <span className="italic">Project title:</span>
                        <span className="font-bold md:text-lg">{title}</span>
                    </h2>
                    <div className="divider m-0" />
                    <p className="space-x-2 pb-5">
                        <span className="italic">Description:</span>
                        <span>{description}</span>
                    </p>
                    <div className="space-x-2">
                        <span>Tags: </span> {tagElements}
                    </div>
                    <div className="divider m-1" />
                    <div className="flex justify-center space-x-3">
                        {links.github ? (
                            <a
                                className="btn gap-2 shadow hover:shadow-primary/30"
                                target="_blank"
                                href={links.github}
                                rel="noreferrer"
                            >
                                Github
                                <FaGithub />
                            </a>
                        ) : (
                            <button type="button" className="btn btn-info no-animation">
                                Private
                            </button>
                        )}
                        {links.demo && (
                            <a
                                className="btn btn-secondary gap-2 shadow hover:shadow-primary/30"
                                target="_blank"
                                href={links.demo}
                                rel="noreferrer"
                            >
                                Demo
                                <FaExternalLinkAlt />
                            </a>
                        )}
                    </div>
                </div>
            </div>
        </>
    );
}

export default Modal;
