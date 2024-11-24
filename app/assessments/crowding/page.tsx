"use client";

import { headerVisible } from "@/app/atoms/experimentAtoms";
import { AssessmentState } from "@/app/constants";
import { useSetAtom } from "jotai";
import React from "react";
import FinishedPage from "../test-stages/finished";
import Instructions from "../test-stages/instructions";
import { LetterCrowdingAssessment } from "./crowding";
import { CrowdingTestInstructions } from "./crowdingInstructions";

export default function CorvistCrowding() {
    const [assessmentState, setAssessmentState] = React.useState<AssessmentState>('not-started');
    const [startTime, setStartTime] = React.useState<number>(0);
    const [endTime, setEndTime] = React.useState<number>(0);
    const setIsHeaderVisible = useSetAtom(headerVisible);

    const handleStart = () => {
        setAssessmentState('instructions');
    };

    const handlePostCalibration = () => {
        setStartTime(Date.now());
        setIsHeaderVisible(false);
        setAssessmentState('active');
    }

    const handleExit = () => {
        setEndTime(Date.now());
        setAssessmentState('finished');
        setIsHeaderVisible(true);
    };

    const Figures = () => {
        return (
            <div className="flex flex-col items-center">
                <LetterCrowdingAssessment />
            </div>
        );
    }

    const assessmentName = "Visual Crowding Task";
    return (
        <>
            {assessmentState === 'not-started' &&
                <Instructions
                    assessmentName={assessmentName}
                    iconPath="/icons/visual_crowding.svg"
                    instructionsText="
                    First, you must calibrate the viewing distance before starting. 
                    Each string is presented alone, and the patient is asked to
                    read the string. Calibration instructions are on the next page.
                    Count the errors made for each string. 
                    Errors include skipping or misreading a digit or letter."
                    handleStart={handleStart}
                    buttonText={"View instructions"}
                />
            }

            {assessmentState === 'instructions' &&
                <CrowdingTestInstructions handlePostCalibration={handlePostCalibration} />
            }
            {assessmentState === 'active' &&
                <>
                    <main className="h-screen flex justify-center items-center">
                        <Figures />
                        <div className="fixed bottom-4 right-4">
                            <button className='btn border-4 border-solid border-gray-200 text-gray-500 px-3 py-1 rounded-xl hover:border-sunny \
                            hover:border-4 hover:text-black '
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
                    nextUrl="/assessments/questionnaire"
                    hasNext
                />
            }
        </>
    );
}
