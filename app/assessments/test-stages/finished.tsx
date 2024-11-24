import Image from 'next/image';

interface FinishedPageProps {
    assessmentName: string;
    startTime: number;
    endTime: number;
}


const formatTime = (time: number) => {
    const minutes = Math.floor(time / 60000);
    const seconds = Math.floor((time % 60000) / 1000);
    return `${minutes.toString().padStart(2, '0')} minutes, ${seconds.toString().padStart(2, '0')} seconds`;
};

export default function FinishedPage({ assessmentName, startTime, endTime }: FinishedPageProps) {
    return (
        <main className="bg-ivory h-[calc(100vh-128px)]">
            <div className="px-[10%] lg:pr-[32] pb-30 py-10 space-y-8 ">
                <Image src="/icons/done.svg" alt="" width={122} height={67} className="mb-10" />
                <h1 className="text-6xl font-medium text-left">
                    Test Finished
                </h1>
                <p>Elapsed time for {assessmentName}</p>
                <span className="font-semibold">{formatTime(endTime - startTime)}</span>
            </div>
        </main>
    );
}