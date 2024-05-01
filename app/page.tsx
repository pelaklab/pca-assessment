import Header from "./components/Header";
import VisionAssessmentPanel from "./components/VisionAssessmentPanel";

export default function Home() {

  return (
    <main className="flex h-full flex-col items-center justify-between p-24">
      <Header />
      <VisionAssessmentPanel />
    </main>
  );
}
