export default function Home() {
  return (
    <div className="pt-12 text-gray-100 flex-1 min-h-full h-full mx-auto max-w-screen-md px-4">
      <section className="flex flex-row flex-wrap items-center justify-center">
        <img
          src="assets/profile.jpg"
          className="w-48 my-4 mx-12 rounded-full border-2 border-white ring-offset-1 p-0.5"
        />
        <div className="flex flex-col items-center">
          <div className="flex flex-col gap-1 items-center sm:items-start">
            <h1 className="text-4xl sm:text-5xl tracking-tight font-bold inline-block text-transparent bg-clip-text bg-gradient-to-l from-teal-500 to-teal-400 ">
              Katayoun Timme
            </h1>
            <div className="text-white text-xl font-semibold">
              Team Lead Full Stack
            </div>
            <div className="flex gap-3 text-2xl items-center">
              <a
                href="mailto:katayoun.timme@gmail.com"
                className="hover:text-white flex items-center "
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                  />
                </svg>
                {/* katayoun.timme@gmail.com */}
              </a>
              <a
                href="https://www.linkedin.com/in/katayoun-timme/"
                target="_blank"
                rel="noopener"
              >
                <i class="fab fa-linkedin big-icon hover:text-white"></i>
              </a>
              <a
                href="https://www.github.com/katatimme"
                target="_blank"
                rel="noopener"
              >
                <i class="fab fa-github big-icon hover:text-white"></i>
              </a>
              <a href="assets/cv.pdf" target="_blank" rel="noopener">
                <i class="ai ai-cv big-icon hover:text-white"></i>
              </a>
            </div>
          </div>
        </div>

        <nav>
          <ul></ul>
        </nav>
      </section>
      <section className="mt-8">
        <h2 className="text-white text-2xl tracking-tight font-semibold">
          About me
        </h2>
        <p className="mt-2">
          I am a Team Lead at{" "}
          <a href="https://www.preis.de" className="underline">
            Preis.de
          </a>
          , leading a team of five engineers and developing on the frontend
          myself. I am based in Berlin where I grew up. My background lies in
          mathematics and I enjoy solving hard problems. My main goal is to
          organize the team into an independent and well functioning machine
          contributing to the company's success. I am happy to fill different
          roles on demand to help the team and product to succeed.
        </p>
      </section>
      <section className="mt-8">
        <h2 className="text-white text-2xl tracking-tight font-semibold">
          Professional Interests
        </h2>
        <p className="mt-2">
          Team Management, Design, Software Development, Numerical Analysis,
          Simulation, Fluid Mechanics, Data Science
        </p>
      </section>
      <section className="mt-8">
        <h2 className="text-white text-2xl tracking-tight font-semibold">
          Personal Interests
        </h2>
        <p>
          In my free time I enjoy playing the piano or staying physically active
          with running and exercising. I also appreciate spending time with
          family and friends.
        </p>
      </section>
    </div>
  );
}
