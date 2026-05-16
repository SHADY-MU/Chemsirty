"use client"
import Link from 'next/link'
import React, { useState } from 'react'
import { usePathname } from 'next/navigation'
import { FaHome } from "react-icons/fa";
import { FaBook } from "react-icons/fa";
import { FaBookOpen } from "react-icons/fa";
import { FaQuestion } from "react-icons/fa";
import { FaUser } from "react-icons/fa";
import { FaBars } from "react-icons/fa";


export default function Navbar() {

    const [show, setShow] = useState<boolean>(false)
    const [user, setUser] = useState<boolean>(true)
    const pathname = usePathname()

    const getLinkClasses = (href: string) => {
        const isActive = pathname === href || (href !== '/' && pathname?.startsWith(href));
        return `link ${isActive ? '!bg-color3 !text-main2' : ''}`;
    };

    return (
        <nav className='px-3 py-2 w-full bg-main2 flex justify-between items-center sticky top-0 z-50'>
            <p className='bar md:hidden' onClick={() => show ? setShow(false) : setShow(true)}> <FaBars /> </p>
            <ul className={` absolute top-full left-0 w-full bg-main2
    flex-col-reverse gap-3 px-2 py-3
    text-white sm:border-t md:border-0 border-color3

    transition-all duration-300 ease-in-out
    ${show
                    ? "opacity-100 translate-y-0 visible flex"
                    : "opacity-0 -translate-y-5 invisible flex"}

    md:static md:w-auto md:bg-transparent
    md:flex md:flex-row md:items-center md:justify-center
    md:translate-y-0 md:opacity-100 md:visible`
            }>
                {user ?

                    <li onClick={() => setShow(false)} className=' md:w-fit sm:w-full '>
                        <Link href="/profile" className={getLinkClasses("/profile")}>
                            <FaUser />
                            <span>Profile</span>
                        </Link>
                    </li>
                    :
                    <li onClick={() => setShow(false)} className=' md:w-fit sm:w-full '>
                        <Link href="/logIn" className={getLinkClasses("/logIn")}>
                            <FaUser />
                            <span>Log in</span>
                        </Link>
                    </li>

                }

                <li onClick={() => setShow(false)} className=' md:w-fit sm:w-full '>
                    <Link href="/q&a" className={getLinkClasses("/q&a")}>
                        <FaQuestion />
                        <span>Q&A</span>
                    </Link>
                </li>

                <li onClick={() => setShow(false)} className=' md:w-fit sm:w-full '>
                    <Link href="/courses" className={getLinkClasses("/courses")}>
                        <FaBookOpen />
                        <span>Courses</span>
                    </Link>
                </li>

                <li onClick={() => setShow(false)} className=' md:w-fit sm:w-full '>
                    <Link href="/lectures" className={getLinkClasses("/lectures")}>
                        <FaBook />
                        <span>Lectures</span>
                    </Link>
                </li>

                <li onClick={() => setShow(false)} className=' md:w-fit sm:w-full '>
                    <Link href="/" className={getLinkClasses("/")}>
                        <FaHome />
                        <span>Home</span>
                    </Link>
                </li>
            </ul>
            <h2 className='text-color3 font-black lg:text-4xl md:text-2xl text-3xl'>
                Chemsirty
            </h2>
        </nav>
    )
}