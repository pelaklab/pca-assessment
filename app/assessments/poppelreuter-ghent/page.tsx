"use client";
import Image from 'next/image'
import { PoppelreuterGhent } from './poppelreuter-ghent';

export default function PoppelreuterPage() {

    return (
        <main className="flex flex-col items-center justify-between p-24">
            <PoppelreuterGhent />
        </main>
    );
}
