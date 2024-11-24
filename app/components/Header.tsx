"use client"; // This is a client component

import React, { useState } from 'react';
import { Bars3BottomRightIcon, XMarkIcon, ChevronDownIcon } from '@heroicons/react/16/solid';
import { assessments } from '../constants';
import { useAtomValue } from 'jotai';
import { headerVisible } from '../atoms/experimentAtoms';
import Image from 'next/image';


const Header = () => {
    const Links = [
        { name: 'Home', link: '/', submenu: [] },
        { name: 'Instructions', link: '/instructions', submenu: [] },
        { name: 'Contact', link: '/contact', submenu: [] },
        { name: 'Tests', link: '/all', submenu: assessments },
    ]
    const [open, setOpen] = useState(false)
    const [submenuOpen, setSubmenuOpen] = useState<number | null>(null)

    const isHeaderVisible = useAtomValue(headerVisible);
    const handleSubmenuToggle = (index: number, hasSubmenu: boolean, event: React.MouseEvent) => {
        if (hasSubmenu) {
            event.preventDefault(); // Prevent navigation for submenu items
            setSubmenuOpen(submenuOpen === index ? null : index);
        }
    };

    return (
        isHeaderVisible && (
            <div className='w-full left-0 z-10 bg-ivory px-5'> {/* Setting z-index for mobile view */}
                <div className='md:px-10 py-4 px-7 md:flex justify-between items-center bg-ivory'
                >
                    <a href="/">
                        <div className='font-semibold lg:text-xl text-xl cursor-pointer flex items-center gap-1 pr-3'>
                            <Image src='/icon.svg' width={30} height={30} alt='VisCorD logo'
                                className="py-10" />
                            <span className='font-semibold'>VisCorD</span>
                        </div>
                    </a>
                    {/* Menu icon*/}
                    <div onClick={() => setOpen(!open)} className='absolute right-8 top-7 cursor-pointer md:hidden w-7 h-7'>
                        {open ? <XMarkIcon /> : <Bars3BottomRightIcon />}
                    </div>

                    <ul className={
                        `md:flex md:items-center md:pb-0 pb-2 absolute left-0 md:static \
                        last:md:mr-16
                         bg-ivory md:w-auto w-full md:pl-0 pl-5 transition-all duration-500 \
                         ease-in ${open ? 'top-20' : 'top-[-490px]'}`}>
                        {
                            Links.map((link, index) => {
                                return (
                                    <li className='relative my-7 md:my-0 md:ml-12' key={index}>
                                        <a href={link.link} onClick={(event) => handleSubmenuToggle(index, link.submenu.length > 0, event)}>
                                            <div className="flex flex-row items-center md:justify-between">
                                                <span className="hover:underline text-xl font-semibold" >{link.name} </span>
                                                {link.submenu.length > 0 && (
                                                    <ChevronDownIcon className='h-4 w-6' />
                                                )}
                                            </div>
                                        </a>
                                        {/* Submenu */}
                                        {link.submenu.length > 0 && submenuOpen === index && (
                                            <ul className='absolute left-0 mt-2 mr-2 bg-ivory border border-black rounded-2xl divide-y divide-black overflow-hidden'>
                                                {link.submenu.map((item, subIndex) => (
                                                    <li key={subIndex}
                                                        className='py-2 md:px-4 px-2 min-w-40 hover:bg-sunny last-of-type:text-ivory last-of-type:bg-indigo \
                                                        last-of-type:hover:bg-forget-me-not-purple'>
                                                        <a href={item.path.toLowerCase()}>{item.name}</a>
                                                    </li>
                                                ))}
                                            </ul>
                                        )}
                                    </li>
                                )
                            })
                        }
                    </ul>
                </div>
            </div>
        )
    );
};

export default Header;