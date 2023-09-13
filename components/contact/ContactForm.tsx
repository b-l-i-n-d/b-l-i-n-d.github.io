"use client";

import { Button } from "@nextui-org/button";
import { Input, Textarea } from "@nextui-org/input";

import emailjs from "@emailjs/browser";
import React, { useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";

import { useTheme } from "next-themes";
import { toast } from "react-toastify";
import { EmailIcon } from "../icons";

interface IFormInputs {
    name: string;
    email: string;
    message: string;
}

const ContactForm: React.FC = () => {
    const {
        register,
        handleSubmit,
        reset,
        formState: { errors },
    } = useForm<IFormInputs>();

    const [isSubmitting, setIsSubmitting] = useState(false);
    const { theme } = useTheme();

    const onSubmit: SubmitHandler<IFormInputs> = (data: IFormInputs) => {
        toast("Sending message", {
            toastId: "sending-message",
            autoClose: false,
            type: "success",
            isLoading: true,
            position: "bottom-right",
            theme: theme === "dark" ? "dark" : "light",
        });

        setIsSubmitting(true);
        emailjs
            .sendForm(
                process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!,
                process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID!,
                "#contact-form",
                process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY!
            )
            .then((resust) => {
                reset();
                toast.update("sending-message", {
                    render: "Message sent successfully",
                    type: "success",
                    isLoading: false,
                    autoClose: 5000,
                });
            })
            .catch((error) => {
                toast.update("sending-message", {
                    render: "Failed to send message",
                    type: "error",
                    isLoading: false,
                    autoClose: 5000,
                });
            })
            .finally(() => {
                setIsSubmitting(false);
            });
    };

    return (
        <form
            id="contact-form"
            onSubmit={handleSubmit(onSubmit)}
            className="w-full space-y-5 pt-5 sm:pl-5 md:pt-0"
        >
            <Input
                isRequired
                label="Name"
                variant="flat"
                placeholder="Enter your name"
                {...register("name", { required: true, maxLength: 80 })}
                errorMessage={
                    errors.name?.type === "required"
                        ? "Please enter your name"
                        : errors.name?.type === "maxLength"
                        ? "Your name is too long"
                        : ""
                }
                color={errors.name ? "danger" : "default"}
                fullWidth
            />
            <Input
                isRequired
                label="Email"
                variant="flat"
                placeholder="Enter your email"
                startContent={<EmailIcon size={16} />}
                {...register("email", {
                    required: true,
                    pattern:
                        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@(([^<>()[\]\\.,;:\s@"]+\.)+[^<>()[\]\\.,;:\s@"]{2,})$/,
                })}
                errorMessage={
                    errors.email?.type === "required"
                        ? "Please enter your email"
                        : errors.email?.type === "pattern"
                        ? "Please enter a valid email"
                        : ""
                }
                color={errors.email ? "danger" : "default"}
                fullWidth
            />
            <Textarea
                isRequired
                label="Message"
                placeholder="Enter your message"
                variant="flat"
                {...register("message", { required: true })}
                errorMessage={errors.message && "Please enter your message"}
                color={errors.message ? "danger" : "default"}
                fullWidth
            />
            <Button
                type="submit"
                color="primary"
                variant="flat"
                isLoading={isSubmitting}
            >
                Send
            </Button>
        </form>
    );
};

export default ContactForm;
