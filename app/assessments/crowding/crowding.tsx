import React, { useEffect, useState } from 'react';
import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/16/solid';
import { headerVisible } from '@/app/atoms/experimentAtoms';
import { useAtomValue } from 'jotai';
import Image from 'next/image';
import localFont from 'next/font/local'

const sloanFont = localFont({
    src: '../fonts/Sloan.211028-1955.woff2',
    variable: '--font-inter',
})

const LetterCrowdingAssessment: React.FC = () => {

    const images = [
        '/alphanumeric/E732ZSC.png',
        // '/alphanumeric/F479PRT.png',
        // '/alphanumeric/K983HMR.png',
        // '/alphanumeric/S568BWY.png',
    ]
    // State to track the current image index
    const [currentIndex, setCurrentIndex] = useState(0);
    const isHeaderVisible = useAtomValue(headerVisible)
    const [indicatorsVisible, setIndicatorVisibility] = useState(true)

    useEffect(() => {
        setIndicatorVisibility(isHeaderVisible)
    }, [isHeaderVisible])

    // Handler to show the next image
    const handleNextImage = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    };

    // Handler to show the previous image
    const handlePreviousImage = () => {
        setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
    };

    const imageLetters = images.map(x => {
        const match = x.match(/[A-Za]+/g)
        if (match) {
            return match
        } return ""
    }
    )

    return (
        <div className="flex flex-col items-center">
            {/* Container for the image and arrows */}
            {/* NOTE: Do not change these breakpoints -- they are fixed for the viewing distance */}

            {/* Using the right font */}
            <div className="mt-10 ">
                <p> [DRAFT] Example of Sloan font: </p>
                <p className='text-2xl'>
                    <span className={`${sloanFont.className} ${sloanFont.variable} tracking-widest`}>
                      E
                    </span>
                    <span className={`font-helvetica text-[34px] tracking-widest font-bold`}>
                      732
                    </span>
                    <span className={`${sloanFont.className} ${sloanFont.variable} tracking-widest`}>
                      ZSC
                    </span>
                </p>
            </div>

            {/* Previous Arrow Button */}
            {currentIndex > 0 && indicatorsVisible && <button
                onClick={handlePreviousImage}
                className="absolute left-12 top-1/2 transform -translate-y-1/2 p-2 bg-gray-800 text-white rounded-full hover:bg-gray-600"
            >
                <ChevronLeftIcon className="h-6 w-6" />
            </button>}

            {/* Next Arrow Button */}
            {currentIndex < images.length - 1 && indicatorsVisible && <button
                onClick={handleNextImage}
                className="absolute right-12 top-1/2 transform -translate-y-1/2 p-2 bg-gray-800 text-white rounded-full hover:bg-gray-600"
            >
                <ChevronRightIcon className="h-6 w-6" />
            </button>}
        </div>
    );
};

export { LetterCrowdingAssessment }
