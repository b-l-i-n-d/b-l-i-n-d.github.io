/* eslint-disable jsx-a11y/label-has-associated-control */
import emailjs from '@emailjs/browser';
import { useRef, useState } from 'react';
import { FaCheck, FaFacebookMessenger } from 'react-icons/fa';
import { FiMail } from 'react-icons/fi';

function Contact() {
    const form = useRef();
    const [isLoading, setIsLoading] = useState(false);
    const [isSuccess, setIsSuccess] = useState(false);
    const [isError, setIsError] = useState(false);

    const sendEmail = (e) => {
        e.preventDefault();
        setIsLoading(true);

        emailjs
            .sendForm(
                import.meta.env.VITE_SERVICE_ID,
                import.meta.env.VITE_TEMPLATE_ID,
                form.current,
                import.meta.env.VITE_PUBLIC_KEY
            )
            .then(
                (result) => {
                    console.log(result.text);
                    e.target.reset();
                    setIsLoading(false);
                    setIsSuccess(true);
                    setTimeout(() => setIsSuccess(false), 1000);
                    clearTimeout();
                },
                (error) => {
                    console.log(error.text);
                    setIsLoading(false);
                    setIsError(true);
                    setTimeout(() => setIsError(false), 1000);
                    clearTimeout();
                }
            );
    };

    return (
        <section id="contact" className="mx-auto max-w-7xl px-4 py-10">
            <div className="flex flex-col items-center justify-center space-y-2 pt-10">
                <h2 className="text-2xl font-bold">Get in touch</h2>
                <div className="h-1 w-20 rounded-full bg-primary" />
            </div>

            <div className="mx-auto flex max-w-4xl flex-wrap py-10">
                <div className="flex w-full flex-col items-center justify-center space-y-5 md:w-1/3">
                    <a
                        type="button"
                        href="mailto:fahim.faisal.abir@gmail.com"
                        className="card w-72 bg-neutral text-neutral-content shadow-lg transition duration-300 hover:shadow-neutral/70 md:w-64 lg:w-72"
                    >
                        <div className="card-body items-center text-center">
                            <FiMail size={36} />
                            <h2 className="card-title">Email</h2>
                            <p>fahim.faisal.abir@gmail.com</p>
                            <p className="font-semibold">Send a message</p>
                        </div>
                    </a>
                    <a
                        type="button"
                        target="_blank"
                        href="https://m.me/abir.fahim.faisal"
                        className="card w-72 bg-neutral text-neutral-content shadow-lg transition duration-300 hover:shadow-neutral/70 md:w-64 lg:w-72"
                        rel="noreferrer"
                    >
                        <div className="card-body items-center text-center">
                            <FaFacebookMessenger size={36} />
                            <h2 className="card-title">Messenger</h2>
                            <p>abir.fahim.faisal</p>
                            <p className="font-semibold">Send a message</p>
                        </div>
                    </a>
                </div>
                <div className="flex w-full md:w-2/3">
                    <form
                        ref={form}
                        onSubmit={sendEmail}
                        className="form-control w-full gap-10 pt-5 md:pl-5 md:pt-0"
                    >
                        <input
                            required
                            name="name"
                            type="text"
                            placeholder="Name"
                            className="input input-bordered input-primary border-2"
                        />
                        <input
                            required
                            name="email"
                            type="email"
                            placeholder="Email"
                            className="input input-bordered input-primary border-2"
                        />
                        <textarea
                            required
                            name="message"
                            className="textarea textarea-bordered textarea-primary h-28 border-2"
                            placeholder="Message"
                        />
                        <button
                            type="submit"
                            className={`btn ${isLoading && 'loading'} ${
                                isSuccess ? 'btn-success' : 'btn-primary'
                            } ${isError ? 'btn-error' : 'btn-primary'}`}
                        >
                            {isSuccess ? <FaCheck /> : 'Send'}
                        </button>
                    </form>
                </div>
            </div>
        </section>
    );
}

export default Contact;
