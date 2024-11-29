"use client";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import Image from "next/image";


export default function Drawing() {
  const TestNavigation = ({ iconPath, text, url }: { iconPath: string; text: string, url: string }) => (
    <div className="rounded-3xl py-10 px-4 border-black border-2 flex justify-between items-center flex-row hover:bg-sunny group"
      onClick={() => window.location.href = url}
    >
      <div className="flex justify-start items-center flex-row space-x-8">
        <Image src={iconPath} alt="" width={93} height={93} />
        <p className="font-semibold md:text-3xl text-xl mx-4">{text}</p>
      </div>
      <ArrowForwardIcon style={{ marginRight: '0.75rem' }} className="text-indigo text-5xl" />
    </div>
  );
  return (
    <main className="bg-ivory grid grid-cols-8">
      <div className="md:col-start-2 md:col-span-5 col-span-6 col-start-2">
        <div className=" text-indigo py-24 space-y-10 text-xl">
        <span className="text-4xl font-medium text-left">
            VisCorD Assessment
          </span>
          <p>
            This screening battery consists of a threshold visual
            field perimetry and six test items. Information about each item is found on the instructions page,
            including information on the stimulus (or stimuli),
            administration instructions, and what constitutes a pass or fail for each item.
          </p>
          <p>
            While the battery itself has not been validated, the CPC-Q item has been validated for
            screening for posterior cortical visual dysfunction (see the instruction page for references).
            The other five items were arrived at through expert consensus by the PCA Assessment Working Party.
            <span className="font-semibold"> It is recommended that visual field perimetry and at least two
              additional items from the VisCorD are
              performed for screening. </span>
          </p>

          <TestNavigation iconPath="/icons/umbrella.svg"
            text="Poppelreuter-Ghent overlapping figures tasks"
            url="/assessments/poppelreuter-ghent"
          />
          <TestNavigation iconPath="/icons/navon.svg"
            text="Navon Figures Task"
            url="/assessments/navon"
          />
          <TestNavigation
            iconPath="/icons/pentagons.svg"
            text="Intersecting Pentagon Copy Task"
            url="/assessments/pentagons" />
          <TestNavigation iconPath="/icons/paragraph.svg"
            text="Paragraph Reading Task"
            url="/assessments/reading" />
          <TestNavigation
            iconPath="/icons/visual_crowding.svg"
            text="Visual Crowding Task"
            url="/assessments/crowding" />
          <TestNavigation
            iconPath="/icons/cpcq.svg"
            text="Colorado Posterior Cortical Questionnaire (CPC-Q)"
            url="/assessments/questionnaire"
          />
        </div>

      </div>
    </main>
  );
}
