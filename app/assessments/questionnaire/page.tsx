"use client";
import { headerVisible } from '@/app/atoms/experimentAtoms';
import { AssessmentState } from '@/app/constants';
import { useSetAtom } from 'jotai';
import React from 'react';
import FinishedPage from '../test-stages/finished';
import Instructions from '../test-stages/instructions';
import { CpcQuestionnaire } from './coloradoVision';

export default function ColoradoPostCorticalQuestionnaire() {
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
                <CpcQuestionnaire />
            </div>
        );
    }

    const assessmentName = "Colorado Posterior Cortical Questionnaire (CPC-Q)";
    return (
        <>
            {assessmentState === 'not-started' &&
                <Instructions
                    assessmentName={assessmentName}
                    iconPath="/icons/pentagons.svg"
                    instructionsText="
                    Ask the patient to fill out the questionnaire. 
                    However, if they have difficulty reading, the examiner should 
                    read the questions and the response choices to the patient and 
                    record responses."
                    handleStart={handleStart}
                />
            }
            {assessmentState === 'active' &&
                <>
                    <main className="h-full w-full flex flex-col items-center justify-between">
                        <DisplayFigures />
                        <div className="fixed bottom-4 right-4">
                            <button className='btn border-4 border-solid border-gray-200 text-gray-500 px-3 py-1 rounded-xl hover:border-sunny \
                            hover:border-4 hover:text-black bg-white'
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
