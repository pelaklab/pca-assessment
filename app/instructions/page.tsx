import React from 'react';
import Image from 'next/image';

const InstructionsPage: React.FC = () => {
    return (
        <main className="h-full w-full bg-ivory text-xl grid grid-cols-8">
            <div className="md:col-start-2 md:col-span-5 col-span-6 col-start-2 space-y-6">
                <div className="pt-10 pb-4">
                    <Image src="/icons/scroll.svg" alt="" width={90} height={96} className="mb-10" />
                    <h1 className="text-4xl font-medium text-left">VisCorD Instructions</h1>
                </div>

                <div className="pb-10 space-y-6">
                    <p>
                        <span className="font-semibold">It is recommended that visual field perimetry and at least two additional items from the VisCorD are performed for screening.
                        </span> If a patient has a homonymous
                        visual field defect without an imaging finding to account for the visual field defect
                        and fails one of the six items on the VisCorD, then referral to a behavioral neurologist
                        and/or neuropsychologist is indicated.
                    </p>
                    <p>
                        However, the sensitivity and specificity of the
                        six items are only known for the CPC-Q; thus, the false positive and false negative
                        rate for the other five items are unknown and patients should be made aware of the
                        limitations of screening tests.
                    </p>
                    <p className="font-semibold"> Viewing distance: All tests should be performed at a comfortable viewing distance except for Crowding test, which has specific requirements.
                    </p>
                </div>

                <div className="pb-10 py-10 text-base">


                    {/* Instructions table */}
                    <div className="border rounded-xl overflow-hidden border-black">
                        <table className="min-w-full divide-y divide-black">
                            <thead className="bg-periwinkle text-lg">
                                <tr className="divide-x divide-black">
                                    <th className="py-6 p-2 text-left">
                                        The Six Items (approximate time for administration)
                                    </th>
                                    <th className="py-6 p-2 text-left">Stimulus/Stimuli</th>
                                    <th className="py-6 p-2 text-left">Instructions</th>
                                    <th className="py-6 p-2 text-left">Pass or Fail</th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-black">
                                <tr className="divide-x divide-black">
                                    <td className="align-top px-3 py-4">
                                        <p>
                                            Threshold visual field perimetry (5 minutes)
                                            <br />
                                            <br />
                                            <span className="font-semibold"> NOT AVAILABLE ON THIS SITE </span>
                                        </p>
                                    </td>
                                    <td className="align-top px-3 py-4">
                                        Threshold visual field perimetry for each eye. The Humphrey Visual
                                        Field Analyzer 24-2 SITA FAST protocol or equivalent is recommended.
                                    </td>
                                    <td className="align-top px-3 py-4">
                                        As per machine protocol.
                                    </td>
                                    <td className="align-top px-3 py-4">
                                        The clinician must interpret the results as usual.
                                        The presence of a homonymous (quadrant or hemifield)
                                        visual field defect in the absence of brain imaging that
                                        accounts for the homonymous defect is suspicious for cortical
                                        visual dysfunction.
                                    </td>
                                </tr>
                                <tr className="divide-x divide-black">
                                    <td className="align-top px-3 py-4">
                                        Poppelreuter-Ghent Overlapping Figures<sup>1</sup>
                                        <br />
                                        (1 minute)
                                    </td>
                                    <td className="align-top px-3 py-4">
                                        Line drawings of four overlapping figures:
                                        <ol className="list-decimal list-inside">
                                            <li>Hand saw</li>
                                            <li>Umbrella</li>
                                            <li>Pear</li>
                                            <li>Coffee cup/mug</li>
                                        </ol>
                                    </td>
                                    <td className="align-top px-3 py-4">
                                        Ask the patient to name all items they see. If problems arise naming an
                                        item or items, ask the patient to describe the item or its use,
                                        which is acceptable.
                                    </td>
                                    <td className="align-top px-3 py-4space-y-4">
                                        <p>
                                            <em>Pass</em>: To pass, the patient must accurately name or describe all four
                                            objects without errors of omission or commission.
                                        </p>
                                        <p>
                                            <em>Fail</em>: If the patient is unable to name or describe all four objects
                                            or reports seeing objects or pieces of objects that are not in the drawing,
                                            they fail this test
                                        </p>
                                    </td>
                                </tr>
                                <tr className="divide-x divide-black">
                                    <td className="align-top px-3 py-4">
                                        Navon Figures<sup>2</sup>
                                        <br />
                                        (1 minute)
                                    </td>
                                    <td className="align-top px-3 py-4">
                                        <p>
                                            Navon figures are letters or shapes composed of a set of different smaller letters or shapes.
                                            The stimuli here consist of a letter &quot;H&quot; formed by multiple &quot;S&quot;
                                            letters and a “triangle” shape formed by multiple small “circles”.
                                        </p>
                                    </td>
                                    <td className="align-top px-3 py-4">
                                        Ask the patient to describe what they see.
                                    </td>
                                    <td className="align-top px-3 py-4 space-y-4">
                                        <p>
                                            <em>Pass</em>: To pass, the patient must describe
                                            both the local images (S and circles) and the global
                                            images (H and circles).
                                        </p>
                                        <p>
                                            <em>Fail</em>: If the patient is unable to name
                                            or describe all four figures (H of multiple “S”
                                            letters and triangle of multiple circles), they fail this test.
                                        </p>
                                    </td>

                                </tr>
                                <tr className="divide-x divide-black">
                                    <td className="align-top px-3 py-4">
                                        Intersecting pentagons copy task<sup>3</sup>
                                        <br />
                                        (1 minute)
                                    </td>
                                    <td className="align-top px-3 py-4">
                                        A line drawing of intersecting pentagons.
                                    </td>
                                    <td className="align-top px-3 py-4 space-y-2">
                                        <p>
                                            Ask the patient to copy the drawing (do not describe the
                                            drawing or name the shapes they are to copy) onto a blank
                                            piece of paper while viewing the drawing. They are not allowed
                                            to draw on top of a reproduced copy of the intersecting pentagons.
                                        </p>
                                        <p>
                                            If you have a tablet, they can use a stylus to copy the pentagons,
                                            and you can download the image to your device.
                                        </p>
                                        <p>
                                            Best used with a touch screen device or a blank piece
                                            of paper instead of a mouse.
                                        </p>
                                    </td>
                                    <td className="align-top px-3 py-4 space-y-4">
                                        <p>
                                            <em>Pass</em>: To pass, the patient must copy the drawing with five sides to
                                            each figure with an overlap of one corner from each pentagon that
                                            creates a 4-sided figure.
                                        </p>
                                        <p>
                                            <em>Fail</em>: If the patient is unable to copy the drawing appropriately
                                            after 2 attempts, they fail this test.
                                        </p>
                                    </td>
                                </tr>
                                <tr className="divide-x divide-black">
                                    <td className="align-top px-3 py-4">
                                        Reading two paragraphs: one in in cursive and one in non-cursive font<sup>4</sup>
                                        <br />
                                        (3 minutes)
                                    </td>
                                    <td className="align-top px-3 py-4 space-y-4">
                                        <p>
                                            Two paragraphs, with one in cursive font and the other
                                            in non-cursive font.
                                        </p>
                                        <p>
                                            Note: The paragraphs are written at reading levels
                                            between the 3rd and 5th grade.
                                        </p>
                                    </td>
                                    <td className="align-top px-3 py-4 space-y-4">
                                        <p>
                                            Present the patient with the non-cursive paragraph to read a
                                            loud and listen and record errors (by simply counting or recording
                                            the type of error). Present the patient with the cursive paragraph
                                            to read aloud and record the errors in the same manner.
                                        </p>
                                        <p>
                                            Types of errors: struggling to track to the proper line of text,
                                            re-reading a word or words, backtracking, or otherwise struggling
                                            to read smoothly.
                                        </p>
                                    </td>
                                    <td className="align-top px-3 py-4 space-y-4">
                                        <p>
                                            <em>Pass</em>: To pass, the patient must be able to read both
                                            paragraphs without errors. The patient should read both paragraphs
                                            smoothly.
                                        </p>
                                        <p>
                                            <em>Fail</em>: If the patient makes errors while reading
                                            either paragraph they fail this reading screening test.
                                        </p>
                                    </td>
                                </tr>

                                <tr className="divide-x divide-black">
                                    <td className="align-top px-3 py-4">
                                        A visual crowding task<sup>5</sup>
                                        <br />
                                        (2-3 minutes)
                                    </td>
                                    <td className="align-top px-3 py-4 space-y-4">
                                        The stimuli consist of four strings of 7 letters and digits.
                                        Two of the strings have minimal space between the letters and
                                        digits (crowded strings), and two strings have greater space
                                        between the letters and digits (uncrowded strings).
                                    </td>
                                    <td className="align-top px-3 py-4 space-y-4">
                                        <p>First, you must calibrate the viewing distance before starting.
                                            Calibration instructions are on the test page for crowding.
                                        </p>
                                        <p>
                                            Each string is presented alone, and the patient is
                                            asked to read the string.
                                        </p>
                                        <p>
                                            Count the errors made for each string. Errors include
                                            skipping or misreading a digit or letter.
                                        </p>
                                    </td>
                                    <td className="align-top px-3 py-4 space-y-4">
                                        <p>
                                            <em>Pass</em>: The patient must read each string without
                                            errors for both the crowded and uncrowded conditions.
                                        </p>
                                        <p>
                                            <em>Fail</em>: If the patient makes more total errors
                                            reading the crowded strings than reading the uncrowded strings.
                                        </p>
                                    </td>
                                </tr>
                                <tr className="divide-x divide-black">
                                    <td className="align-top px-3 py-4">
                                        Colorado Posterior Cortical Questionnaire (CPC-Q)<sup>6</sup>
                                        <br />
                                        (6-7 minutes)
                                    </td>
                                    <td className="align-top px-3 py-4">
                                        Fifteen questions regarding visual dysfunction, and each question
                                        is answered using a Likert scale as follows: Never (0), Almost Never (1),
                                        Sometimes (2), Fairly Often (3), or Very Often (4).
                                    </td>
                                    <td className="align-top px-3 py-4">
                                        Ask the patient to fill out the questionnaire. However, if
                                        they have difficulty reading, the examiner should read the questions
                                        and the response choices to the patient and record responses.
                                        The total score is added from the individual responses.
                                    </td>
                                    <td className="align-top px-3 py-4 space-y-4">
                                        <p>
                                            <em>Pass</em>: To pass, the patient must have a total score of 6 or lower.
                                        </p>
                                        <p>
                                            <em>Fail</em>: If the patient has a total
                                            score of 7 or greater, they fail this screening questionnaire.
                                        </p>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>

                </div>

                <div className="mt-4 pb-10">
                    <h2 className="text-md"><strong>References:</strong></h2>
                    <ol className="list-decimal list-inside space-y-2 text-sm">
                        <li>
                            Della Sala S, Laiacona M, Spinnler H, Trivelli C.
                            Poppelreuter-Ghent&apos;s Overlapping Figures Test: its sensitivity to age, and its clinical use.
                            Arch Clin Neuropsychol. Nov 1995;10(6):511-34.&nbsp;
                            <a href="https://doi.org/10.1016/0887-6177(94)00049-v"
                                className="text-blue-700 underline hover:text-blue-900">
                                doi:10.1016/0887-6177(94)00049-v
                            </a>
                        </li>
                        <li>
                            Navon D. Forest before trees: The precedence of global features in visual perception.
                            Cogn Psychol. 1977;9:353-383.
                        </li>
                        <li>
                            Folstein MF, Folstein SE, McHugh PR. &quot;Mini-mental state&quot;.
                            A practical method for grading the cognitive state of patients for the clinician.
                            J Psychiatr Res. Nov 1975;12(3):189-98.
                        </li>
                        <li>
                            Pelak VS, Tang‐Wai DF, Boeve BF, Bouwman FH, Graff‐Radford J, Rabinovici G, Holden SK,
                            Townley RA, Day GS, Whitwell J, Ossenkoppele R, Boon BDC, Putcha D, Onyike CU, Snyder H, Crutch S,
                            Yong KXX. Consensus recommendations for clinical assessment tools for the diagnosis of posterior
                            cortical atrophy syndrome from the Atypical AD PIA of ISTAART. Alzheimer&apos;s & Dementia: Diagnosis,
                            Assessment & Disease Monitoring. 2023;15(3):e12474.&nbsp;
                            <a href="https://doi.org/10.1002/dad2.12474"
                                className="text-blue-700 underline hover:text-blue-900">
                                doi:10.1002/dad2.12474
                            </a>
                        </li>
                        <li>
                            Whitney D, Levi DM. Visual crowding: a fundamental limit on conscious perception and object recognition.
                            Trends Cogn Sci. Apr 2011;15(4):160-8.&nbsp;
                            <a href="https://doi.org/10.1016/j.tics.2011.02.005"
                                className="text-blue-700 underline hover:text-blue-900">
                                doi:10.1016/j.tics.2011.02.005
                            </a>
                        </li>
                        <li>
                            Holden SK, Pelak VS, Sooy T, Heffernan KS, McConnell BV, Pressman PS, Bettcher BM.
                            Development of the Colorado posterior cortical questionnaire within an Alzheimer&apos;s disease study cohort.
                            J Clin Exp Neuropsychol. Apr 2022;44(3):226-236.&nbsp;
                            <a href="https://doi.org/10.1080/13803395.2022.2105820"
                                className="text-blue-700 underline hover:text-blue-900">
                                doi:10.1080/13803395.2022.2105820
                            </a>
                        </li>
                    </ol>
                </div>
            </div>
        </main >
    );
};

export default InstructionsPage;