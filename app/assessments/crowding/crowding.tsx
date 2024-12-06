import React, { useState } from 'react';
import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/16/solid';
import localFont from 'next/font/local'

const sloanFont = localFont({
    src: '../fonts/OpticiansansRegular-0pnR.otf',
    variable: '--font-inter',
})

const LetterCrowdingAssessment: React.FC = () => {
    // Pelak lab generated strings to assess for letter crowding response
    const sloanStrings = [
        {
            test: 'DK4N98S',
            crowded: false
        },
        {
            test: '6H85NC4',
            crowded: false
        },
        {
            test: 'Z3CR85D',
            crowded: true
        },
        {
            test: 'V5K49H3',
            crowded: true
        }
    ]

    const [currentIndex, setCurrentIndex] = useState(0);
    const [indicatorsVisible, setIndicatorVisibility] = useState(true)

    // Handler to show the next image
    const handleNextString = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % sloanStrings.length);
    };

    // Handler to show the previous image
    const handlePreviousString = () => {
        setCurrentIndex((prevIndex) => (prevIndex - 1 + sloanStrings.length) % sloanStrings.length);
    };

    return (
        <div className="flex flex-col items-center">
            {/* Container for the image and arrows */}
            {/* NOTE: Do not change these breakpoints -- they are fixed for the viewing distance */}

            {/* Using the right font */}
            <div className="cursor-pointer" onClick={() => setIndicatorVisibility(!indicatorsVisible)}>
                <p className='md:text-8xl text-2xl border-black border px-[10px] text-center'>
                    <span className={`${sloanFont.className} ${sloanFont.variable} \
                     ${sloanStrings[currentIndex].crowded ? 'tracking-tighter' : 'tracking-widest'}
                    `}>
                        {sloanStrings[currentIndex].test}
                    </span>
                </p>
            </div>

            {/* Previous Arrow Button */}
            {currentIndex > 0 && indicatorsVisible && <button
                onClick={handlePreviousString}
                className="absolute left-12 top-1/2 transform -translate-y-1/2 p-2 bg-gray-800 text-white rounded-full hover:bg-gray-600"
            >
                <ChevronLeftIcon className="h-6 w-6" />
            </button>}

            {/* Next Arrow Button */}
            {currentIndex < sloanStrings.length - 1 && indicatorsVisible && <button
                onClick={handleNextString}
                className="absolute right-12 top-1/2 transform -translate-y-1/2 p-2 bg-gray-800 text-white rounded-full hover:bg-gray-600"
            >
                <ChevronRightIcon className="h-6 w-6" />
            </button>}
        </div>
    );
};

export { LetterCrowdingAssessment }
