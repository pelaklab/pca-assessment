import React, { useState } from 'react';
import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/16/solid';
import Image from 'next/image';


const ParagraphImages: React.FC = () => {
    // Array of image sources
    const images = [
        '/non-cursive.png',
        '/cursive.png',
    ];

    // State to track the current image index
    const [currentIndex, setCurrentIndex] = useState(0);
    const [indicatorsVisible, setIndicatorVisibility] = useState(true)

    // Handler to show the next image
    const handleNextImage = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    };

    // Handler to show the previous image
    const handlePreviousImage = () => {
        setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
    };

    return (
        <div className="px-24">
            {/* Container for the image and arrows */}
            <Image
                src={images[currentIndex]}
                alt={`Image ${currentIndex + 1}`}
                className="transition-all duration-500 ease-in-out"
                onClick={() => setIndicatorVisibility(!indicatorsVisible)}
                sizes="(max-width: 640px) 100vw, (max-width: 768px) 80vw, (max-width: 1024px) 70vw, 50vw"
                width={800}
                height={800}
            />

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
