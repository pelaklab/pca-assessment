// import { Example } from "./components/Carousel";
"use client";
import DrawingComponent from "../components/Drawing";

export default function Drawing() {

  return (
    <main className="flex flex-col items-center justify-between p-24">
      <div className="h-full w-full">
        <DrawingComponent />
      </div>
    </main>
  );
}
