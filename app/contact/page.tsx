export default function Contact() {

  return (
    <main className="flex h-full flex-col items-start justify-between p-24 w-3/5">
      <h1 className="my-4 text-lg text-gray-500">About Us</h1>
      <p>Our website functions as an initial clinical screening tool to assess the
        visual processing and spatial recognition skills of patients, to
        improve the diagnosis of patients with posterior cortical atrophy (PCA).
        PCA is a rare form of Alzheimer&apos;s disease often presents with visual issues
        and is misdiagnosed because of its atypical presentation</p>
      <p>This work is part of&nbsp;
        <a href="https://www.uchealth.org/provider/victoria-pelak-md/"
          className="font-medium text-blue-600 underline dark:text-blue-500 hover:no-underline">
          Dr. Victoria Pelak&apos;s
        </a>
        &nbsp;clinical research.

        She is a neuro-opthamologist at the University of Colorado Anschutz Medical Campus,
        a professor in the Department of Neurology and Ophthalmology.
      </p>
      <h1 className="my-4 text-lg text-gray-500">Contact Information</h1>
      <p>Lily - Neurology Research Assistant</p>
      <p>Katie - Web Contractor - <a href="mailto:katie.li@cuanschutz.org"
        className="font-medium text-blue-600 underline dark:text-blue-500 hover:no-underline"
      > email </a></p>
    </main>
  );

}
