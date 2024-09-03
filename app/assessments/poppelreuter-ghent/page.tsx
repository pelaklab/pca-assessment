"use client";
import Image from 'next/image'

export default function PoppelreuterPage() {

    return (
        <main className="flex flex-col items-center justify-between p-24">
            <Image
                src="/poppelreuter-ghent-overlapping-figure.png"
                alt="overlapping-figures"
                objectFit="cover"
                height={500}
                width={500}
                className={"pt-10"}
            />
        </main>
    );
}
