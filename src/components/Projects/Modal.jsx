/* eslint-disable import/no-unresolved */
/* eslint-disable jsx-a11y/label-has-associated-control */
import { FaExternalLinkAlt, FaGithub } from 'react-icons/fa';
import { Autoplay, Navigation, Pagination } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

function Modal({ id, title, description, tags, img, carousel, links }) {
    const allTags = tags;
    const tagElements = allTags.map((tag) => (
        <div key={tag.id} className="badge badge-outline">
            {tag.name}
        </div>
    ));

    const swiper = carousel && (
        <Swiper
            className="mb-4"
            modules={[Navigation, Pagination, Autoplay]}
            slidesPerView={1}
            loop
            autoplay
            navigation
            pagination={{ clickable: true }}
        >
            {carousel.map((carouselItem) => (
                <SwiperSlide className="rounded-2xl">
                    <img
                        key={carouselItem.id}
                        src={carouselItem.img}
                        alt={carouselItem.id}
                        className="rounded-2xl border-b-2 border-base-300 shadow"
                    />
                </SwiperSlide>
            ))}
        </Swiper>
    );
    console.log(swiper);

    return (
        <>
            <input type="checkbox" id={id} className="modal-toggle" />
            <div className="no-scrollbar modal modal-bottom">
                <div className="modal-box w-full max-w-5xl sm:w-11/12 md:w-9/12 lg:w-7/12 ">
                    <label
                        htmlFor={id}
                        className="btn btn-circle btn-sm absolute right-2 top-2 z-50"
                    >
                        ✕
                    </label>
                    {!swiper ? (
                        <figure className="mb-4">
                            <img
                                className="rounded-2xl border-b-2 border-base-300 shadow"
                                src={img}
                                alt={title}
                            />
                        </figure>
                    ) : (
                        swiper
                    )}

                    {/* <Swiper
                        modules={[Navigation, Pagination, A11y, Autoplay]}
                        slidesPerView={1}
                        loop
                        autoplay
                        navigation
                        pagination={{ clickable: true }}
                    >
                        <SwiperSlide>
                            <img
                                className="rounded-2xl border-b-2 border-base-300 shadow"
                                src={img}
                                alt={title}
                            />
                        </SwiperSlide>
                        <SwiperSlide>Slide 2</SwiperSlide>
                        <SwiperSlide>Slide 3</SwiperSlide>
                        <SwiperSlide>Slide 4</SwiperSlide>
                    </Swiper> */}
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
