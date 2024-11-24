import Image from 'next/image';
export default function Contact() {

  return (
    <main className="h-screen w-full bg-ivory">
      <div className="px-[20%] py-10 space-y-6 bg-ivory">
        <Image src="/icons/team.svg" alt="" width={93} height={93} />
        <h1 className="md:text-6xl text-2xl font-medium text-left">About Us</h1>
        <p>Our website functions as an <span className="font-semibold">
          initial clinical screening tool</span> to assess the
          visual processing and spatial recognition skills of patients, to
          improve the diagnosis of patients with posterior cortical atrophy (PCA).
          PCA is a rare form of Alzheimer&apos;s disease often presents with visual issues
          and is misdiagnosed because of its atypical presentation</p>

        <p>This work is part of&nbsp;
          <a href="https://www.uchealth.org/provider/victoria-pelak-md/"
            className="font-medium text-forget-me-not-purple underline hover:no-underline">
            Dr. Victoria Pelak&apos;s
          </a>
          &nbsp;clinical research.

          She is a neuro-opthamologist at the University of Colorado Anschutz Medical Campus,
          a professor in the Department of Neurology and Ophthalmology.
        </p>
      </div>

      <div className="px-[20%] space-y-6 bg-ivory pb-10">
        <h1 className="md:text-6xl text-2xl font-medium text-left">Contact Information</h1>
        <div>
          <p>Lily Noteboom - Neurology Clinical Research Assistant |
            <a href="mailto:lily.noteboom@cuanschutz.edu"
              className="text-forget-me-not-purple"

            > email</a>
          </p>
          <p>Katie Li - Web Contractor |
            <a href="mailto:katie.li@cuanschutz.edu"
              className="text-forget-me-not-purple"
            > email </a>
          </p>
          <p>Jessica St. Onge - Designer and UX researcher |
            <a href="https://www.jkstonge.com/"
              className="text-forget-me-not-purple"
            > website </a></p>
        </div>
      </div>
    </main>
  );

}
