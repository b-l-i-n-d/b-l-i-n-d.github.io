import { IEducation, IExperience } from "@/interfaces";
import { Avatar } from "@nextui-org/avatar";
import { Card, CardBody, CardHeader } from "@nextui-org/card";
import { Image } from "@nextui-org/image";
import { Link } from "@nextui-org/link";
import { motion } from "framer-motion";
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

    const cardVariants = {
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
                className="order-1 rounded-lg w-full ml-3 md:ml-0 md:w-5/12 p-3 md:px-4 md:py-4"
            >
                <Card>
                    <CardHeader className="justify-between">
                        <div className="inline-flex items-center font-semibold hover:text-secondary sm:text-xl gap-4">
                            <Avatar
                                showFallback
                                radius="lg"
                                src={logo}
                                fallback={
                                    company ? <WorkIcon /> : <SchoolIcon />
                                }
                            />
                            <span className="flex-1">
                                {website ? (
                                    <Link
                                        href={website}
                                        isExternal
                                        color="foreground"
                                        className="font-medium text-lg md:text-xl"
                                    >
                                        {company || institute}
                                    </Link>
                                ) : (
                                    <h3 className="font-medium text-lg md:text-xl">
                                        {company || institute}
                                    </h3>
                                )}
                            </span>
                        </div>
                    </CardHeader>
                    <CardBody className="text-default-500">
                        <p className="text-sm font-medium">
                            {position || degree} |{" "}
                            {new Date(startDate).getFullYear()} -{" "}
                            {endDate
                                ? new Date(endDate).getFullYear()
                                : "Present"}
                        </p>
                        {grade && (
                            <p className="text-sm font-medium text-default-500">
                                <span>Grade: </span>
                                {grade.obtained} / {grade.total}
                            </p>
                        )}
                        <ul className="text-sm mt-2 ml-4 list-disc">
                            {desc &&
                                desc.map((d, i) => (
                                    <li key={i} className="mb-0.5">
                                        {d}
                                    </li>
                                ))}
                        </ul>
                    </CardBody>
                </Card>
            </motion.div>
        </div>
    );
};

export default ExperiencesCard;
