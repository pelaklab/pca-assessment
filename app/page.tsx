"use client";
import { Provider } from "jotai";

export default function Home() {

  return (
    <Provider>
      <main className="flex flex-col items-center justify-between p-24">
        <div className="h-full w-full space-y-4">
          <h1 className="text-2xl font-bold text-center">Rapid Eye Clinic Screening Battery for Visual Cortical Dysfunction (VisCorD) </h1>
          <p><strong>Disclaimer: </strong>
            The items in the battery are recommended to help screen for visual brain dysfunction
            (aka visual cortical dysfunction). The battery should not be used to diagnose visual cortical dysfunction.
            Patients with poor performance should be referred to a behavioral neurologist for further assessment.
            For patients with ocular diseases that result in loss of visual acuity and/or visual field, test
            results should be interpreted with extreme caution as the tests may be difficult to perform in the
            setting of vision loss due to eye diseases.
          </p>

          <p><strong>Background: </strong> The VisCorD is a screening battery designed for
            use in eye clinics to identify potential posterior cortical visual dysfunction
            in patients who have <strong>
              unexplained visual complaints following a comprehensive eye exam.
            </strong>
            This screening tool was initially recommended in 2023 by the Posterior Cortical Atrophy (PCA)
            Assessment Working Party, part of the Alzheimer&apos;s Association International Society to Advance Alzheimer&apos;s
            Research and Treatment (ISTAART) Atypical Alzheimer&apos;s Disease (AD) Professional Interest Area (PIA)<sup>1</sup>.
            Members of this Working Party developed the VisCorD based on survey data collected from Atypical AD PIA
            members about their approaches to assessing core features of PCA—an atypical Alzheimer&apos;s disease phenotype
            characterized by cortical visual dysfunction with relative preservation of memory and other
            cognitive functions<sup>2</sup>.
            The Working Party&apos;s consensus recommendations addressed the assessment of core PCA features across three
            settings: the outpatient clinic, formal neuropsychological evaluation, and research.
            They also proposed the VisCorD as a rapid eye clinic screening battery for
            identifying cortical visual dysfunction within eye clinics.</p>

          <p>
            <strong>The VisCorD Battery: </strong> This screening battery consists of a threshold visual
            field perimetry and six test items: 1) Poppelreuter-Ghent overlapping figures tasks,
            2) Navon figures tasks, 2) the intersecting pentagon copy task, 3) a paragraph reading task,
            4) a visual crowding task, and 5) the Colorado Posterior Cortical Questionnaire (CPC-Q).
            While the battery itself has not been validated, the CPC-Q item has been validated for
            screening for posterior cortical visual dysfunction (see the instruction page for references).
            The other five items were arrived at through expert consensus by the PCA Assessment Working Party.
            It is recommended that visual field perimetry and at least two additional items from the VisCorD are
            performed for screening.
          </p>
          <p>
            <strong>Item Instructions: </strong>
            Information about each item is found on the instructions page,
            including information on the stimulus (or stimuli),
            administration instructions, and what constitutes a pass or fail for each item.
          </p>

          <p>
            <strong>Interpretation of Results: </strong>
            If the patient has evidence of a homonymous visual field defect without an imaging
            finding to account for the visual field defect and/or fails one of the six test items,
            then referral to a behavioral neurologist and/or neuropsychologist is indicated.
            However, the sensitivity and specificity of the six items are only known for the CPC-Q; thus,
            the false positive and false negative rates for the other five items are unknown.
          </p>

          <div className="space-y-2">
            <strong>References: </strong>
            <ol className="list-decimal list-inside space-y-2">
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
      </main>
    </Provider>
  );
}
