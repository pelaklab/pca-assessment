import Image from 'next/image';
import { ArrowRightIcon } from '@heroicons/react/20/solid';

interface InstructionsProps {
    figureName: string;
    instructionsText: string;
    handleStart: () => void;
}

export default function Instructions({ figureName, instructionsText, handleStart }: InstructionsProps) {

    return (
        <main className="bg-ivory text-xl h-[calc(100vh-128px)]">
            <div className="px-[10%] lg:pr-[32] pb-30 py-10 space-y-8">
                <Image src="/icons/umbrella.svg" alt="" width={122} height={67} className="mb-10" />
                <h1 className="text-6xl font-medium text-left">
                    {figureName}
                </h1>
                <p>{instructionsText}</p>
                <button
                    className="btn bg-indigo flex flex-row items-center justify-between text-ivory rounded-xl px-3 py-1 md:static text-base"
                    onClick={handleStart}
                >
                    <p className="font-semibold pr-2">Start Test </p>
                    <ArrowRightIcon className="text-ivory h-4 w-4 text-bold" />
                </button>
            </div>
        </main>
    );
}