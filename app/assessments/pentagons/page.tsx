"use client";
import { PentagonCanvas } from "./Drawing";

export default function Drawing() {

    return (
        <main className="flex flex-col items-center justify-between p-24">
            <div className="h-full w-full">
                <PentagonCanvas />
            </div>
        </main>
    );
}
