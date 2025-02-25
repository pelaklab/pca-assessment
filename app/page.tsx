"use client";
import { Provider } from "jotai";
import Image from "next/image";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";

export default function Home() {
  return (
    <Provider>
      <main className="w-full text-xl">
        <div className="bg-ivory grid grid-cols-8">
          <div className="py-24 md:col-start-2 md:col-span-5 col-span-6 col-start-2">
            <Image src="/icon.svg" alt="VisCorD logo" width={122} height={67} className="mb-10" />
            <h1 className="md:text-4xl text-2xl font-medium text-left pb-10">
              Rapid Eye Clinic Screening Battery for Visual Cortical Dysfunction (VisCorD) & Visual Field Perimetry
            </h1>

            <p> The VisCorD screening battery is designed for
              use in eye clinics along with the Visual Field Perimetry
              to identify potential posterior cortical visual dysfunction
              in patients who have <strong>
                unexplained visual complaints following a comprehensive eye exam* see disclaimer. 
              </strong>
            </p>
            <br/>
            <br/>
            <p><a href="https://redcap.ucdenver.edu/surveys/?s=EJLK3LN3F9WANDF4" target="_new" style="color:blue; text-decoration:underline"><u>Click here to take the survey</u></a> to help the designers know more about who is utilizing this screening assessment. This information will only be accessible by the team base at University of Colorado School of Medicine.</p>
          </div>
        </div>

        <div className="bg-indigo grid grid-cols-8">
          <div className=" text-ivory md:col-start-2 md:col-span-5 col-span-6 col-start-2 py-24 space-y-10">
            <h2 className="md:text-4xl text-2xl font-medium">Background</h2>
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
        </div>


        <div className="bg-ivory grid grid-cols-8">
          <div className="space-y-10 text-indigo bg-ivory md:col-start-2 md:col-span-5 col-span-6 col-start-2 py-24">
            <Image src="/icons/clipboard.svg" alt="" width={86} height={112} className="mb-10" />
            <h2 className="md:text-4xl text-2xl font-medium">Interpretation of Results</h2>

            <p>
              If the patient has evidence of a homonymous visual field defect without an imaging
              finding to account for the visual field defect and/or fails one of the six test items,
              then referral to a behavioral neurologist and/or neuropsychologist is indicated.
              <span className="font-semibold"> However, the sensitivity and specificity of the six items are only known for the CPC-Q; thus,
                the false positive and false negative rates for the other five items are unknown.</span>
            </p>

          </div>
        </div>

        <div className="bg-indigo grid grid-cols-8">
          <div className="space-y-10 bg-indigo text-ivory md:col-start-2 md:col-span-5 col-span-6 col-start-2 py-24">
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
