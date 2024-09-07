"use client";
import { Provider } from "jotai";

export default function Home() {

  return (
    <Provider>
      <main className="flex flex-col items-center justify-between p-24">
        <div className="h-full w-full">
          <h1 className="text-2xl font-bold text-center">Welcome to the Rapid Screening Battery</h1>
          <p className="text-lg text-center mt-5">This is a platform for vision assessments, to assess for post-cortical atrophy.</p>
        </div>
      </main>
    </Provider>
  );
}
