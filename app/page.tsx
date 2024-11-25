"use client";
import { Provider } from "jotai";
import Image from "next/image";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";

export default function Home() {
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
    <Provider>
      <main className="flex flex-col items-center justify-between">
        <div className="w-full">
          <div className="bg-ivory pl-[12%] pr-[24%] py-24">
            <Image src="/icon.svg" alt="VisCorD logo" width={122} height={67} className="mb-10" />
            <h1 className="lg:text-6xl md:text-4xl text-2xl font-medium text-left pb-10">Rapid Eye Clinic Screening Battery for Visual Cortical Dysfunction (VisCorD) </h1>

            <p className="text-2xl font-normal">The VisCorD is a screening battery designed for
              use in eye clinics to identify potential posterior cortical visual dysfunction
              in patients who have <strong>
                unexplained visual complaints following a comprehensive eye exam*
              </strong>
            </p>
          </div>

          <div className="bg-indigo text-ivory pl-[12%] pr-[24%] py-24 space-y-10 text-xl">
            <h2 className="text-4xl font-medium">Background</h2>
            <p>
              This screening tool was initially recommended in 2023 by the Posterior Cortical Atrophy (PCA)
              Assessment Working Party, part of the Alzheimer&apos;s Association International Society to Advance Alzheimer&apos;s
              Research and Treatment (ISTAART) Atypical Alzheimer&apos;s Disease (AD) Professional Interest Area (PIA)<sup>1</sup>.
              Members of this Working Party developed the VisCorD based on survey data collected from Atypical AD PIA
              members about their approaches to assessing core features of PCA—an atypical Alzheimer&apos;s disease phenotype
              characterized by cortical visual dysfunction with relative preservation of memory and other
              cognitive functions<sup>2</sup>.

            </p>
            <p className="font-bold">
              The Working Party&apos;s consensus recommendations addressed the assessment of core PCA features across three
              settings:
            </p>
            <ol>
              <li>
                <ArrowForwardIcon style={{ marginRight: '0.75rem' }} className="text-periwinkle" />
                the outpatient clinic</li>
              <li>
                <ArrowForwardIcon style={{ marginRight: '0.75rem' }} className="text-periwinkle" />
                formal neuropsychological evaluation
              </li>
              <li>
                <ArrowForwardIcon style={{ marginRight: '0.75rem' }} className="text-periwinkle" />
                research
              </li>
            </ol>
            <p>
              They also proposed the VisCorD as a rapid eye clinic screening battery for
              identifying cortical visual dysfunction within eye clinics.
            </p>
          </div>

          <div className="bg-ivory text-indigo pl-[12%] pr-[24%] py-24 space-y-10 text-xl">
            <span className="font-semibold text-3xl">
              This screening battery consists of a threshold visual
              field perimetry and six test items:
            </span>

            <p>
              Information about each item is found on the instructions page,
              including information on the stimulus (or stimuli),
              administration instructions, and what constitutes a pass or fail for each item.
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


            <p className="pt-8">
              While the battery itself has not been validated, the CPC-Q item has been validated for
              screening for posterior cortical visual dysfunction (see the instruction page for references).
              The other five items were arrived at through expert consensus by the PCA Assessment Working Party.
              <span className="font-semibold"> It is recommended that visual field perimetry and at least two
                additional items from the VisCorD are
                performed for screening. </span>
            </p>

          </div>


          <div className="space-y-10 text-ivory bg-indigo pl-[12%] pr-[24%] text-xl py-24">
            <Image src="/icons/clipboard.svg" alt="" width={86} height={112} className="mb-10" />
            <h2 className="text-4xl font-medium">Interpretation of Results</h2>

            <p>
              If the patient has evidence of a homonymous visual field defect without an imaging
              finding to account for the visual field defect and/or fails one of the six test items,
              then referral to a behavioral neurologist and/or neuropsychologist is indicated.
              <span className="font-semibold"> However, the sensitivity and specificity of the six items are only known for the CPC-Q; thus,
                the false positive and false negative rates for the other five items are unknown.</span>
            </p>

          </div>


          <div className="space-y-10 bg-ivory pl-[12%] pr-[24%] py-24">
            <div><strong>*Disclaimer: </strong>
              The items in the battery are recommended to help screen for visual brain dysfunction
              (aka visual cortical dysfunction). The battery should not be used to diagnose visual cortical dysfunction.
              Patients with poor performance should be referred to a behavioral neurologist for further assessment.
              For patients with ocular diseases that result in loss of visual acuity and/or visual field, test
              results should be interpreted with extreme caution as the tests may be difficult to perform in the
              setting of vision loss due to eye diseases.
            </div>

            <div>
              References:
              <ol className="list-decimal list-outside space-y-2 pl-6">
                <li>
                  Pelak VS, Tang-Wai DF, Boeve BF, Bouwman FH, et al. Consensus recommendations
                  for clinical assessment tools for the diagnosis of posterior cortical atrophy
                  syndrome from the Atypical AD PIA of ISTAART. Alzheimers Dement (Amst).
                  2023 Sep 20;15(3):e12474.
                  doi: <a href="https://doi.org/10.1002/dad2.12474" className="text-blue-500 underline hover:text-blue-700">
                    10.1002/dad2.12474</a>. PMID: 39329067; PMCID: PMC11425198.
                </li>
                <li>
                  Crutch SJ, Schott JM, Rabinovici GD, Murray M, Snowden JS, et al. Alzheimer&apos;s
                  Association ISTAART Atypical Alzheimer&apos;s Disease and Associated Syndromes Professional
                  Interest Area. Consensus classification of posterior cortical atrophy. Alzheimers
                  Dement. 2017 Aug;13(8):870-884.
                  doi: <a href="https://doi.org/10.1016/j.jalz.2017.01.014" className="text-blue-500 underline hover:text-blue-700">
                    10.1016/j.jalz.2017.01.014.
                  </a> Epub 2017 Mar 2. PMID: 28259709; PMCID: PMC5788455.
                </li>
              </ol>
            </div>
          </div>
        </div>
      </main>
    </Provider >
  );
}
