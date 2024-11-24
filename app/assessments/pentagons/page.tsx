"use client";
import React from "react";
import { PentagonCanvas } from "./Drawing";
import { headerVisible } from "@/app/atoms/experimentAtoms";
import { AssessmentState } from "@/app/constants";
import { useSetAtom } from "jotai";
import FinishedPage from "../test-stages/finished";
import Instructions from "../test-stages/instructions";

export default function Drawing() {
    const [assessmentState, setAssessmentState] = React.useState<AssessmentState>('not-started');
    const [startTime, setStartTime] = React.useState<number>(0);
    const [endTime, setEndTime] = React.useState<number>(0);
    const setIsHeaderVisible = useSetAtom(headerVisible);

    const handleStart = () => {
        setStartTime(Date.now());
        setIsHeaderVisible(false);
        setAssessmentState('active');
    };

    const handleExit = () => {
        setEndTime(Date.now());
        setAssessmentState('finished');
        setIsHeaderVisible(true);
    };

    const DisplayFigures = () => {
        return (
            <div className="py-10">
                <PentagonCanvas />
            </div>
        );
    }

    const assessmentName = "Intersecting Pentagons Copy Task";
    return (
        <>
            {assessmentState === 'not-started' &&
                <Instructions
                    assessmentName={assessmentName}
                    iconPath="/icons/pentagons.svg"
                    instructionsText="
                    Ask the patient to copy the drawing (do not describe the drawing or name the shapes they are to copy)
                    onto a blank piece of paper while viewing the drawing. They are not allowed to draw on top of a reproduced copy 
                    of the intersecting pentagons.
                    
                    If you have a tablet, they can use a stylus to copy the pentagons, and you can download the image to your device.
                    Best used with a touch screen device or a blank piece of paper instead of a mouse."
                    handleStart={handleStart}
                />
            }
            {assessmentState === 'active' &&
                <>
                    <main className="h-full w-full flex flex-col items-center justify-between">
                        <DisplayFigures />
                        <div className="fixed bottom-4 right-4">
                            <button className='btn border-4 border-solid border-gray-200 text-gray-500 px-3 py-1 rounded-xl hover:border-sunny \
                            hover:border-4 hover:text-black'
                                onClick={handleExit}>Finish Test</button>
                        </div>
                    </main>
                </>
            }
            {assessmentState === 'finished' &&
                <FinishedPage
                    assessmentName={assessmentName}
                    startTime={startTime}
                    endTime={endTime}
                    nextUrl="/assessments/reading"
                    hasNext
                />
            }
        </>
    )
}
