import Image from 'next/image';
import { ArrowRightIcon } from '@heroicons/react/20/solid';
import { useRouter } from 'next/navigation'

interface FinishedPageProps {
    assessmentName: string;
    startTime: number;
    endTime: number;
    nextUrl?: string;
    hasNext?: boolean;
}

const formatTime = (time: number) => {
    const minutes = Math.floor(time / 60000);
    const seconds = Math.floor((time % 60000) / 1000);
    return `${minutes.toString().padStart(2, '0')} minutes, ${seconds.toString().padStart(2, '0')} seconds`;
};

export default function FinishedPage({ assessmentName, startTime, endTime, nextUrl, hasNext = false }: FinishedPageProps) {
    const router = useRouter();

    const handleNext = () => {
        nextUrl && router.push(nextUrl);
    }

    return (
        <main className="bg-ivory md:h-[calc(100vh-128px)] h-screen">
            <div className="px-[10%] lg:pr-[32] pb-30 py-10 space-y-8 bg-ivory">
                <Image src="/icons/done.svg" alt="" width={122} height={67} className="mb-10" />
                <h1 className="text-6xl font-medium text-left">
                    Test Finished
                </h1>
                <p>Elapsed time for {assessmentName}</p>
                <span className="font-semibold">{formatTime(endTime - startTime)}</span>

                {
                    hasNext && <button
                        className="btn bg-indigo flex flex-row items-center justify-between text-ivory \
                    rounded-xl px-4 py-3 md:static text-base"
                        onClick={handleNext}
                    >
                        <p className="font-semibold pr-2">Next Test</p>
                        <ArrowRightIcon className="text-ivory h-4 w-4 text-bold" />
                    </button>
                }
            </div>
        </main>
    );
}