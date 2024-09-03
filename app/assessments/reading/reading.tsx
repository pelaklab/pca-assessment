import React, { useEffect, useState } from 'react';
import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/16/solid';
import { headerVisible } from '@/app/atoms/experimentAtoms';
import { useAtomValue } from 'jotai';


const ParagraphImages = () => {
    // Array of image sources
    const images = [
        '/non-cursive.png',
        '/cursive.png',
    ];

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

    return (
        <div className="flex flex-col items-center">
            {/* Container for the image and arrows */}
            <div className="relative">
                {/* Display the current image */}
                <img
                    src={images[currentIndex]}
                    alt={`Image ${currentIndex + 1}`}
                    className="w-full max-w-lg transition-all duration-500 ease-in-out"
                    onClick={() => setIndicatorVisibility(!indicatorsVisible)}
                />
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

export { ParagraphImages }
