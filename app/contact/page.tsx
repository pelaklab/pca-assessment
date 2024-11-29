import Image from 'next/image';
export default function Contact() {

  return (
    <main className="h-screen w-full bg-ivory grid grid-cols-8 text-xl">
      <div className="md:col-start-2 md:col-span-5 col-span-6 col-start-2 bg-ivory space-y-6">
        <div className="pt-10">
          <Image src="/icons/team.svg" alt="" width={93} height={93} className="mb-10"/>
          <h1 className="md:text-4xl text-2xl font-medium text-left">About Us</h1>
        </div>
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

      <div className="md:col-start-2 md:col-span-5 col-span-6 col-start-2 bg-ivory space-y-6">
        <h1 className="md:text-4xl text-2xl font-medium text-left">Contact Information</h1>
        <div>
          <p> Colorado Posterior Cortical Atrophy Research |
            <a href="mailto:COPCA@CUAnschutz.edu "
              className="text-forget-me-not-purple"

            > email</a>
          </p>
          <p>Katie Li - Website creator |
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