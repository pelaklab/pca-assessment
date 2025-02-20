import Image from 'next/image';
export default function Contact() {
// fake comment
  return (
    <main className="lg:h-screen h-full w-full bg-ivory text-xl grid grid-cols-8">
      <div className="md:col-start-2 md:col-span-5 col-span-6 col-start-2 space-y-6">
        <div className="pt-10">
          <Image src="/icons/team.svg" alt="" width={93} height={93} className="mb-10" />
          <h1 className="md:text-4xl text-2xl font-medium text-left">About Us</h1>
        </div>
        <p>
          This resource was developed by <a href="https://medschool.cuanschutz.edu/neurology/faculty"
            className="text-forget-me-not-purple underline hover:no-underline">
            Dr. Victoria Pelak</a>&nbsp;
          and her research team to provide a
          user-friendly set of tools for researchers and clinicians to screen for visual cortical
          dysfunction. The tool is recommended to help identify those with posterior cortical
          atrophy (PCA) syndrome, which is most commonly caused by Alzheimer&apos;s disease and,
          less commonly, dementia with Lewy bodies. Dr. Pelak leads Colorado Posterior Cortical
          Atrophy Support, and the webpages and additional resources can be found&nbsp;
          <a href="https://medschool.cuanschutz.edu/pca"
            className="text-forget-me-not-purple underline hover:no-underline"
          >
            here
          </a>
          .
        </p>
        <div>
          <p>
            VisCorD Website Team:
          </p>
          <ul className="list-disc pl-5">
            <li>
              Dr. Victoria Pelak
            </li>
            <li>
              Lily Noteboom
            </li>
            <li>
              Asher Mahood
            </li>
            <li>
              Katie Li
            </li>
            <li>
              Jessica St. Onge - Design and UX research -&nbsp;
              <a href="https://www.jkstonge.com/"
                className="text-forget-me-not-purple underline hover:no-underline">website</a>
            </li>
          </ul>
        </div>
        <div className="space-y-1 pb-10">
          <p>
            To contact about tasks, scoring or general questions of the screening assessment on this website:&nbsp;
            <a href="mailto:copca@cuanschutz.edu"
              className="text-forget-me-not-purple underline hover:no-underline">email</a>
          </p>
          <p>
            To contact about the website:&nbsp;
            <a href="mailto:katie.li@cuanschutz.edu"
              className="text-forget-me-not-purple underline hover:no-underline">email</a>
          </p>
        </div>
      </div>
    </main>
  );
}
