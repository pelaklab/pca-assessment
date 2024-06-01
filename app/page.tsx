// import { Example } from "./components/Carousel";

import { Assessment } from "./components/ImageAssessment";

export default function Home() {

  return (
    <main className="flex flex-col items-center justify-between p-24">
      <div className="h-full w-full">
        <Assessment />
      </div>
    </main>
  );
}
