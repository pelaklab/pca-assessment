import Image from 'next/image';
import { ArrowRightIcon } from '@heroicons/react/20/solid';

interface InstructionsProps {
    assessmentName: string;
    iconPath: string;
    instructionsText: string;
    handleStart: () => void;
    buttonText?: string;
}

export default function Instructions({ assessmentName,
    iconPath,
    instructionsText,
    handleStart,
    buttonText = "Start Test" }: InstructionsProps) {
    return (
        <main className="bg-ivory text-xl h-[calc(100vh-128px)]">
            <div className="px-[10%] lg:pr-[32] pb-30 py-10 space-y-8">
                <Image src={iconPath} alt="" width={122} height={67} className="mb-10" />
                <h1 className="text-6xl font-medium text-left">
                    {assessmentName}
                </h1>
                <p>{instructionsText}</p>
                <button
                    className="btn bg-indigo flex flex-row items-center justify-between text-ivory \
                    rounded-xl px-4 py-3 md:static text-base
                    "
                    onClick={handleStart}
                >
                    <p className="font-semibold pr-2">{buttonText}</p>
                    <ArrowRightIcon className="text-ivory h-4 w-4 text-bold" />
                </button>
            </div>
        </main>
    );
}