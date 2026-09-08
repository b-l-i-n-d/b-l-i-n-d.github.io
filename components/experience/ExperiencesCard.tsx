import { IEducation, IExperience } from "@/interfaces";
import { Avatar, Card, CardBody, CardHeader, Image, Link } from "@heroui/react";
import { motion, Variants } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { SchoolIcon, WorkIcon } from "../icons";

interface Props extends IExperience, IEducation {
    index: number;
}

const ExperiencesCard: React.FC<Props> = ({
    index,
    logo,
    company,
    position,
    department,
    website,
    desc,
    startDate,
    endDate,
    institute,
    degree,
    grade,
}) => {
    const [ref, inView] = useInView({
        threshold: 0.5,
        triggerOnce: true,
    });

    const cardVariants: Variants = {
        hidden: { x: index % 2 === 0 ? 20 : -20, opacity: 0 },
        visible: {
            x: 0,
            opacity: 1,
            transition: { duration: 0.6, ease: "easeInOut" },
        },
    };

    return (
        <div
            className={`mb-6 md:mb-8 flex md:justify-between items-center w-full ${
                index % 2 === 0
                    ? "md:flex-row-reverse left-timeline"
                    : "right-timeline"
            }`}
        >
            <div className="order-1 md:w-5/12"></div>

            <span className="z-20 flex items-center order-1 justify-center w-6 h-6 md:w-9 md:h-9 rounded-full ring-primary ring-4 bg-default-100">
                {company && <WorkIcon className="w-4 h-4 md:w-6 md:h-6" />}
                {institute && <SchoolIcon className="w-4 h-4 md:w-6 md:h-6" />}
            </span>

            <motion.div
                ref={ref}
                variants={cardVariants}
                initial="hidden"
                animate={inView ? "visible" : "hidden"}
                className="order-1 w-full md:w-5/12"
            >
                <Card className="w-full">
                    <CardHeader className="flex gap-3">
                        {logo ? (
                            <Image
                                alt="logo"
                                height={40}
                                radius="sm"
                                src={logo}
                                width={40}
                            />
                        ) : (
                            <Avatar
                                name={company ? company : institute}
                                radius="sm"
                                size="lg"
                            />
                        )}
                        <div className="flex flex-col">
                            <p className="text-md">
                                {company ? position : degree}
                            </p>
                            <p className="text-small text-default-500">
                                {company ? (
                                    <Link isExternal showAnchorIcon href={website}>
                                        {company}
                                    </Link>
                                ) : (
                                    institute
                                )}
                            </p>
                        </div>
                    </CardHeader>
                    <CardBody>
                        <p>{desc}</p>
                        <p className="text-small text-default-500">
                            {startDate} - {endDate}
                        </p>
                    </CardBody>
                </Card>
            </motion.div>
        </div>
    );
};

export default ExperiencesCard;
