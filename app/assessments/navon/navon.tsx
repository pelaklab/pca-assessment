import React, { useState } from 'react';
import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/16/solid';
import Image from 'next/image'


const NavonImages: React.FC = () => {
    const images = [
        '/navon-figure-1.png',
        '/navon-figure-2.png',
    ]
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
        <div className="pt-40">
            {/* Container for the image and arrows */}
            {/* Display the current image */}
            <Image
                src={images[currentIndex]}
                alt={`Image ${currentIndex + 1}`}
                className="transition-all duration-500 ease-in-out"
                onClick={() => setIndicatorVisibility(!indicatorsVisible)}
                style={{
                    width: '100%',
                    height: '40vh',
                }}
                width={400}
                height={300}
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

export { NavonImages }
