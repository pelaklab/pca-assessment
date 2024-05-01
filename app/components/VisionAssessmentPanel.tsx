import React from 'react';
import Image from 'next/image'
import { ArrowLeftIcon, ArrowRightIcon } from '@heroicons/react/16/solid';

const VisionAssessmentPanel = () => {
    return (
        <div className='h-full w-full'>
            <div className='flex justify-between items-center w-full bg-slate-200'>
                {/* Left Panel */}
                <button className='btn bg-purple-300 text-black px-3 py-1 font-bold rounded h-full'>
                    Back
                    <ArrowLeftIcon className='h-4 w-4' />
                </button>

                {/* Center Image Panel */}
                <div className='w-full h-96 bg-green-500 mr-2 ml-2'>
                    Hello
                </div>

                {/* Right Panel */}
                <button className='btn bg-purple-300 text-black px-3 py-1 font-bold rounded h-full'>
                    Next <ArrowRightIcon className='h-4 w-4' />
                </button>
            </div>
            <h1 className='font-semibold'>Instructions</h1>
            <p className='font-serif'>What do you see in this image?</p>
        </div>
    );
};

export default VisionAssessmentPanel;