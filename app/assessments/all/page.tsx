"use client";

import Image from 'next/image';

export default function FullAssessment() {

    return (
        <main className="h-[calc(100vh-128px)] bg-ivory text-l">
            <div className="px-[10%] pb-6 py-6">
                <Image src="/icons/scroll.svg" alt="" width={122} height={67} className="mb-10" />
                <h1 className="text-6xl font-medium text-left">Full Assessment</h1>
            </div>

            <div className="px-[10%] py-10 space-y-4">
                <p>
                    In order to run the full assessment, you will start by navigating to the
                    <span className="text-forget-me-not-purple font-semibold underline">
                        <a href="/assessments/poppelreuter-ghent"> Poppelreuter-Ghent overlapping figures tasks</a>
                    </span>.
                </p>
                <p>
                    Then you will proceed through the assessments in the following order by clicking on the &quot;Next Test&quot;
                    buttons. On some of the assessments (Navon Figures, Reading, and Crowding), there are
                    multiple images that are tested.
                </p>
                <p>
                    If you click on the image / text field, the circular navigation arrows should appear. These will allow you
                    to move back and forth between the images. Clicking on them a second time will
                    cause them to disappear for reduced visual clutter during the assessment.
                    It&apos;s also recommended that the patient view these visual stimuli in a full-screen format.
                </p>
            </div>
        </main>
    );
}