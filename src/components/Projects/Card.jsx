/* eslint-disable jsx-a11y/label-has-associated-control */
import { FaArrowRight } from 'react-icons/fa';
import Modal from './Modal';

function Card({ id, title, description, img, tags, links }) {
    const allTags = tags;
    const tagElements = allTags.map((tag) => (
        <div key={tag.id} className="badge badge-outline badge-sm">
            {tag.name}
        </div>
    ));

    return (
        <div className="group card w-72 bg-base-100 shadow-xl transition duration-300 hover:shadow-primary/30">
            <figure className="mx-5 mt-5 overflow-hidden rounded-xl border border-base-300">
                <img
                    className="bg-cover transition duration-300 ease-linear group-hover:scale-105"
                    src={img}
                    alt={title}
                />
            </figure>
            <div className="card-body items-center justify-center">
                <div className="card-actions mb-3 w-full justify-start">{tagElements}</div>

                <h2 className="card-title">{title}</h2>
                <p className="line-clamp-2">{description}</p>

                <div className="card-actions mt-3 flex-1 justify-center">
                    <label htmlFor={id} className="modal-button btn btn-primary btn-sm gap-2">
                        See Details
                        <FaArrowRight />
                    </label>
                    <Modal
                        key={id}
                        id={id}
                        img={img}
                        title={title}
                        description={description}
                        tags={tags}
                        links={links}
                    />
                </div>
            </div>
        </div>
    );
}

export default Card;
