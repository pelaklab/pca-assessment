"use client";
import { Assessment } from "./components/ImageAssessment";
import { Provider } from "jotai";

export default function Home() {

  return (
    <Provider>
      <main className="flex flex-col items-center justify-between p-24">
        <div className="h-full w-full">
          <Assessment />
          {/* <DrawingComponent /> */}
        </div>
      </main>
    </Provider>
  );
}
