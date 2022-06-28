/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable jsx-a11y/no-noninteractive-tabindex */

import { useEffect } from 'react';
import { BsChevronDown } from 'react-icons/bs';
import { FaFacebook, FaGithub } from 'react-icons/fa';
import { FiMail } from 'react-icons/fi';
import { HiMenuAlt1, HiMenuAlt3 } from 'react-icons/hi';
import { themeChange } from 'theme-change';
import Theme from './Theme';

function Navbar() {
    useEffect(() => {
        themeChange(false);
    });

    return (
        <div className="sticky top-0 z-50 border-b border-base-300 bg-opacity-30 shadow-none backdrop-blur-lg backdrop-filter">
            <div className="navbar mx-auto h-20  max-w-7xl font-title">
                <div className="navbar-start text-lg font-bold">
                    <div className="hidden space-x-5 lg:flex">
                        <a
                            href="##"
                            className="rounded border-primary transition-all duration-150 hover:border-b-4 hover:text-primary active:border-dotted"
                        >
                            Home
                        </a>
                        <a
                            href="##"
                            className="rounded border-primary transition-all duration-150 hover:border-b-4 hover:text-primary active:border-dotted"
                        >
                            About
                        </a>
                        <a
                            href="##"
                            className="rounded border-primary transition-all duration-150 hover:border-b-4 hover:text-primary active:border-dotted"
                        >
                            Contact
                        </a>
                        <div className="dropdown-end dropdown">
                            <label tabIndex="0" className="btn btn-ghost btn-sm rounded-btn">
                                <BsChevronDown />
                            </label>
                            <ul
                                tabIndex="0"
                                className="no-scrollbar dropdown-content menu rounded-box mt-4 w-auto bg-base-100 p-2 shadow"
                            >
                                <li>
                                    <a href="##">Skills</a>
                                </li>
                                <li>
                                    <a href="##">Experiences</a>
                                </li>
                                <li>
                                    <a href="##">Education</a>
                                </li>
                                <li>
                                    <a href="##">Projects</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="dropdown lg:hidden">
                        <label tabIndex="0" className="btn btn-ghost btn-sm rounded-btn text-2xl">
                            <HiMenuAlt1 />
                        </label>
                        <ul
                            tabIndex="0"
                            className="no-scrollbar dropdown-content menu rounded-box menu-compact mt-4 w-auto bg-base-100 p-2 shadow"
                        >
                            <li>
                                <a href="##">Home</a>
                            </li>
                            <li>
                                <a href="##">About</a>
                            </li>
                            <li>
                                <a href="##">Skills</a>
                            </li>
                            <li>
                                <a href="##">Experiences</a>
                            </li>
                            <li>
                                <a href="##">Education</a>
                            </li>
                            <li>
                                <a href="##">Projects</a>
                            </li>
                            <li>
                                <a href="##">Contact</a>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="navbar-center">
                    <a href="##" className="btn btn-ghost text-2xl font-bold normal-case">
                        Portfolio
                    </a>
                </div>
                <div className="navbar-end">
                    <Theme />
                    <div className="hidden lg:flex">
                        <a type="button" className="btn btn-ghost btn-circle text-xl" href="##">
                            <FaFacebook />
                        </a>
                        <a type="button" className="btn btn-ghost btn-circle text-xl" href="##">
                            <FaGithub />
                        </a>
                        <a type="button" className="btn btn-ghost btn-circle text-xl" href="##">
                            <FiMail />
                        </a>
                    </div>
                    <div className="dropdown-end dropdown lg:hidden">
                        <label tabIndex="0" className="btn btn-ghost btn-sm rounded-btn text-2xl">
                            <HiMenuAlt3 />
                        </label>
                        <ul
                            tabIndex="0"
                            className="no-scrollbar dropdown-content menu rounded-box menu-compact mt-4 w-auto bg-base-100 p-2 shadow"
                        >
                            <li>
                                <a
                                    type="button"
                                    className="btn btn-ghost btn-circle text-xl"
                                    href="##"
                                >
                                    <FaFacebook />
                                </a>
                            </li>
                            <li>
                                <a
                                    type="button"
                                    className="btn btn-ghost btn-circle text-xl"
                                    href="##"
                                >
                                    <FaGithub />
                                </a>
                            </li>
                            <li>
                                <a
                                    type="button"
                                    className="btn btn-ghost btn-circle text-xl"
                                    href="##"
                                >
                                    <FiMail />
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Navbar;
