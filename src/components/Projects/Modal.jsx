/* eslint-disable jsx-a11y/label-has-associated-control */
import { FaExternalLinkAlt, FaGithub } from 'react-icons/fa';

function Modal({ id, title, description, img, links }) {
    return (
        <>
            <input type="checkbox" id={id} className="modal-toggle" />
            <div className="no-scrollbar modal modal-bottom">
                <div className="modal-box w-7/12 max-w-5xl">
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
                    <h2 className="text-lg font-bold">{title}</h2>
                    <p className="pb-5">{description}</p>
                    <div className="flex justify-start space-x-3">
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
