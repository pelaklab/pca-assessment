import React from "react";
import { NavonImages } from "../navon/navon";
import { PoppelreuterGhent } from "../poppelreuter-ghent/poppelreuter-ghent";
import { useSetAtom } from "jotai";
import { headerVisible } from "@/app/atoms/experimentAtoms";
import { ParagraphImages } from "../reading/reading";
import { LetterCrowdingAssessment } from "../crowding/crowding";
import { PentagonCanvas } from "../pentagons/Drawing";
import { CpcQuestionnaire } from "../questionnaire/coloradoVision";


// assessment item with header
interface AsssementItem {
    title: string;
    component: React.FC;
}

const buttonStyle = 'btn bg-neutral-700 text-white px-3 py-1 rounded md-static'
type AssessmentState = 'not-started' | 'active' | 'finished';

const AllAssessments = () => {
    const AssessmentItems: AsssementItem[] = [
        {
            title: "Poppelreuter-Ghent Figures",
            component: PoppelreuterGhent
        },
        {
            title: "Navon Figures",
            component: NavonImages
        },
        {
            title: "Pentagon Drawing",
            component: PentagonCanvas,
        },
        {
            title: "Reading",
            component: ParagraphImages,
        },
        {
            title: "CORVIST Crowding",
            component: LetterCrowdingAssessment,
        },
        {
            title: "CPC Questionnaire",
            component: CpcQuestionnaire,
        }
    ]

    const setIsHeaderVisible = useSetAtom(headerVisible);

    const [currentAssessmentIndex, setCurrentAssessmentIndex] = React.useState<number>(0);
    const [assessmentState, setAssessmentState] = React.useState<AssessmentState>('not-started');
    const [startTime, setStartTime] = React.useState<number>(0);
    const [endTime, setEndTime] = React.useState<number>(0);

    const handleNext = () => {
        setCurrentAssessmentIndex((prevIndex) => prevIndex + 1);
        setAssessmentState('not-started');
    };

    const handleStart = () => {
        setStartTime(Date.now());
        setIsHeaderVisible(false);
        setAssessmentState('active');
    };

    const handleExit = () => {
        setEndTime(Date.now());
        setAssessmentState('finished');
    };

    const CurrentAssessment = AssessmentItems[currentAssessmentIndex].component;
    const TestDescription = (title: string) => {
        return (
            <div className="m-10 text-center justify-between p-8">
                <h1 className='text-3xl font-bold text-gray-700 md:text-4xl p-6'>{title}</h1>
                <p>Click start button to enter the test</p>
            </div>
        )
    }

    const formatTime = (time: number) => {
        const minutes = Math.floor(time / 60000);
        const seconds = Math.floor((time % 60000) / 1000);
        return `${minutes} minutes, ${seconds} seconds`;
    };

    const currentTitle = AssessmentItems[currentAssessmentIndex].title;

    return (
        <>
            {assessmentState === 'not-started' &&
                <>
                    {TestDescription(currentTitle)}
                    <button className={buttonStyle} onClick={handleStart}>Start Test</button>
                </>
            }
            {assessmentState === 'active' &&
                <>
                    <CurrentAssessment />
                    {
                        currentTitle !== 'CPC Questionnaire' ?
                        <button className='btn border-2 border-solid border-gray-200 text-gray-500 px-3 py-1 absolute rounded bottom-10'
                        onClick={handleExit}>Finish Test</button> :
                        <button className='btn border-2 border-solid border-gray-200 text-gray-500 px-3 py-1'
                        onClick={handleExit}>Finish Test</button>
                    }
                </>
            }
            {assessmentState === 'finished' &&
                <div className="m-10 justify-between p-8">
                    <h1 className="text-2xl font-bold text-gray-700 py-3">Test Finished ✅</h1>
                    <p>Elapsed Time for&nbsp;
                        <em>{currentTitle}</em>:&nbsp;
                        {formatTime(endTime - startTime)}</p>

                    {
                        currentAssessmentIndex < AssessmentItems.length - 1 &&
                        <button className='btn bg-neutral-700 text-white px-3 py-1 rounded absolute mt-5'
                            onClick={handleNext}>Next Test</button>
                    }
                </div>
            }
        </>
    );
}



export { AllAssessments }