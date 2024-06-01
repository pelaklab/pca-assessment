"use client"; // This is a client component

import React, { useState } from 'react';
import { ClipboardDocumentIcon, Bars3BottomRightIcon, XMarkIcon } from '@heroicons/react/16/solid';

const Header = () => {
    const Links = [
        { name: 'HOME', link: '/' },
        { name: 'CONTACT', link: '/contact' }
    ]
    const [open, setOpen] = useState(false)

    const [isHeaderVisible, setIsHeaderVisible] = useState(true);
    const toggleHeader = () => {
        setIsHeaderVisible(!isHeaderVisible);
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
            <div className='shadow-md w-full fixed top-0 left-0'>
                <div className='md:px-10 py-4 px-7 md:flex justify-between items-center bg-white md:px-10 px-7'
                >
                    <div className='font-bold text-2xl cursor-pointer flex items-center gap-1'>
                        <ClipboardDocumentIcon className='h-7 w-7 color-neutral-600' />
                        <span className='font-bold'> Rapid Screening Battery for Eye Clinics </span>
                    </div>
                    {/* Menu icon*/}
                    <div onClick={() => setOpen(!open)} className='absolute right-8 top-6 cursor-pointer md:hidden w-7 h-7'>
                        {open ? <XMarkIcon /> : <Bars3BottomRightIcon />}
                    </div>

                    <ul className={`md:flex md:items-center md:pb-0 pb-12 absolute md:static bg-white md:z-auto z-[-1] left-0 w-full md:w-auto md:pl-0 pl-9 transition-all duration-500 ease-in ${open ? 'top-12' : 'top-[-490px]'}`}>
                        {
                            Links.map((link, index) => {
                                return (
                                    <li className='font-semibold my-7 md:my-0 md:ml-8' key={index}>
                                        <a href={link.link}>{link.name}</a>
                                    </li>
                                )
                            })
                        }
                        <button className='btn bg-neutral-700 text-white px-3 py-1 md:ml-8 rounded md-static' onClick={toggleHeader}>
                            START
                        </button>
                    </ul>
                </div>

            </div>
        )
    );
};

export default Header;