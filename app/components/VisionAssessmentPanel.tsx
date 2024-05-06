"use client"
import React, { useState } from 'react';
import Image from 'next/image'
import { ArrowLeftIcon, ArrowRightIcon } from '@heroicons/react/16/solid';


const VisionAssessmentPanel = () => {
    const [imageIndex, setImageIndex] = useState(0)
    const imageFilePaths = ['/pear.jpg',
        '/coffee.png',
        'fruit-vectors.svg',
    ]

    return (
        <div className='h-full w-full'>
            <div className='flex justify-between items-center w-full '>
                {/* Left Panel */}
                <button
                    className="btn bg-indigo-800 text-white px-3 py-1 font-bold rounded h-full disabled:bg-neutral-400"
                    onClick={() => setImageIndex(prev => prev - 1)}
                    disabled={imageIndex === 0}>
                    Back
                    <ArrowLeftIcon className='h-10 w-10' />
                </button>

                {/* Center Image Panel */}
                <div className='w-full h-96 mr-2 ml-2'>
                    <Image src={imageFilePaths[imageIndex]}
                        width={0}
                        height={0}
                        sizes="100vw"
                        style={{ width: '100%', height: 'auto' }}
                        alt="Image" />
                </div>

                {/* Right Panel */}
                <button className='btn bg-indigo-800 text-white px-3 py-1 font-bold rounded h-full disabled:bg-neutral-400'
                    onClick={() => setImageIndex(prev => prev + 1)}
                    disabled={imageIndex === imageFilePaths.length - 1}>
                    Next <ArrowRightIcon className='h-10 w-10' />
                </button>
            </div>
            <h1 className='font-semibold'>Instructions</h1>
            <p className='font-serif'>What do you see in this image?</p>
        </div >
    );
};

export default VisionAssessmentPanel;