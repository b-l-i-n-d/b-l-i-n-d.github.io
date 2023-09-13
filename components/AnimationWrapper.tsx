"use client";

import { motion } from "framer-motion";
import React from "react";
import { useInView } from "react-intersection-observer";

interface Props {
    id: string;
    className: string;
    children: React.ReactNode;
}

const sectionVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 0.6, ease: "easeInOut" } },
};

const AnimationWrapper: React.FC<Props> = ({ id, className, children }) => {
    const [ref, inView] = useInView({
        threshold: 0.2,
        triggerOnce: true,
    });
    return (
        <motion.section
            ref={ref}
            variants={sectionVariants}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            id={id}
            className={className}
        >
            {children}
        </motion.section>
    );
};

export default AnimationWrapper;
