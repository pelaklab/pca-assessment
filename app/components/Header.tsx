"use client"; // This is a client component

import React, { useState } from 'react';
import { ClipboardDocumentIcon, Bars3BottomRightIcon, XMarkIcon } from '@heroicons/react/16/solid';
import { assessments } from '../constants';
import { useAtom } from 'jotai';
import { headerVisible } from '../atoms/experimentAtoms';
import { enterFullscreen, exitFullscreen } from '../interaction';
import ConditionalButton from './Buttons/ConditionalButton';



const Header = () => {
    const Links = [
        { name: 'HOME', link: '/', submenu: [] },
        { name: 'CONTACT', link: '/contact', submenu: [] },
        { name: 'INSTRUCTIONS', link: '/instructions', submenu: [] },
        { name: 'TESTS', link: '/all', submenu: assessments }
    ]
    const [open, setOpen] = useState(false)
    const [submenuOpen, setSubmenuOpen] = useState<number | null>(null)

    const [isHeaderVisible, setIsHeaderVisible] = useAtom(headerVisible);
    const toggleHeader = () => {
        if (isHeaderVisible) {
            enterFullscreen();
        } else {
            exitFullscreen();
        }
        setIsHeaderVisible(!isHeaderVisible);
    };
    const handleSubmenuToggle = (index: number, hasSubmenu: boolean, event: React.MouseEvent) => {
        if (hasSubmenu) {
            event.preventDefault(); // Prevent navigation for submenu items
            setSubmenuOpen(submenuOpen === index ? null : index);
        }
    };

    if (!isHeaderVisible) return (
        <div className='fixed w-full top-0 left-0'>
            <div className='flex justify-end px-10 py-4'>
                <button className='btn bg-neutral-700 text-white px-3 py-1 rounded' onClick={toggleHeader}>
                    END
                </button>
            </div>
        </div>
    )

    return (
        isHeaderVisible && (
            <div className='shadow-md w-full fixed top-0 left-0 z-10'> {/* Setting z-index for mobile view */}
                <div className='md:px-10 py-4 px-7 md:flex justify-between items-center bg-white md:px-10 px-7'
                >
                    <div className='font-bold lg:text-2xl text-lg cursor-pointer flex items-center gap-1 pr-5'>
                        <ClipboardDocumentIcon className='h-7 w-7 color-neutral-600' />
                        <span className='font-bold'> Rapid Screening Battery for Eye Clinics </span>
                    </div>
                    {/* Menu icon*/}
                    <div onClick={() => setOpen(!open)} className='absolute right-8 top-7 cursor-pointer md:hidden w-7 h-7'>
                        {open ? <XMarkIcon /> : <Bars3BottomRightIcon />}
                    </div>

                    <ul className={`md:flex md:items-center md:pb-0 pb-12 absolute md:static bg-white left-0 w-full md:w-auto md:pl-0 pl-9 transition-all duration-500 ease-in ${open ? 'top-20' : 'top-[-490px]'}`}>
                        {
                            Links.map((link, index) => {
                                return (
                                    <li className='relative font-semibold my-7 md:my-0 md:ml-8' key={index}>
                                        <a href={link.link} onClick={(event) => handleSubmenuToggle(index, link.submenu.length > 0, event)}>{link.name}

                                            {link.submenu.length > 0 && (
                                                <span className='ml-2 text-gray-600'>&#9662;</span>
                                            )}
                                        </a>
                                        {/* Submenu */}
                                        {link.submenu.length > 0 && submenuOpen === index && (
                                            <ul className='absolute left-0 mt-2 bg-white shadow-lg rounded-md'>
                                                {link.submenu.map((item, subIndex) => (
                                                    <li key={subIndex} className='py-2 px-4 hover:bg-gray-100'>
                                                        <a href={item.path.toLowerCase()}>{item.name}</a>
                                                    </li>
                                                ))}
                                            </ul>
                                        )}

                                    </li>
                                )
                            })
                        }
                        <ConditionalButton className='btn bg-neutral-700 text-white px-3 py-1 md:ml-8 rounded md-static'
                            buttonText='START'
                            onClick={toggleHeader} />
                    </ul>
                </div>

            </div>
        )
    );
};

export default Header;