"use client";

import { headerVisible } from "@/app/atoms/experimentAtoms";
import { AssessmentState } from "@/app/constants";
import { useSetAtom } from "jotai";
import React from "react";
import FinishedPage from "../test-stages/finished";
import Instructions from "../test-stages/instructions";
import { ParagraphImages } from "./reading";

export default function ReadingPage() {
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
                <ParagraphImages />
            </div>
        );
    }

    const assessmentName = "Reading Task";
    return (
        <>
            {assessmentState === 'not-started' &&
                <Instructions
                    assessmentName={assessmentName}
                    iconPath="/icons/paragraph.svg"
                    instructionsText="Ask the patient to name all items they see. If problems arise naming an item or items, ask the patient to describe the item or its use, which is acceptable."
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
                />
            }
        </>
    )
}
