import SelfPortrait from "../assets/selfPortrait.png";

export default function About(){
    return(
        <section className="min-h-screen bg-background text-foreground">
      <div className="mx-auto grid min-h-[calc(100vh-80px)] max-w-6xl grid-cols-1 items-center gap-10 px-6 md:grid-cols-2">
        {/* Left */}
        <div className="relative flex justify-center md:justify-end">
          <div className="h-[300px] w-[300px] rounded-3xl bg-card md:h-[410px] md:w-[410px]" />

          <div className="absolute left-38 top-5 h-[300px] w-[300px] overflow-hidden rounded-3x md:h-[400px] md:w-[400px]">
                      <img
                        src={SelfPortrait}
                        alt="Portrait of Christine Montcheu"
                        className="h-full w-full object-cover"
                      />
                    </div>
        </div>

        {/* Right */}
        <div>

          <h1 className="mt-3 font-serif text-1xl leading-[0.95] md:text-8xl">
            Christine
          </h1>

          <p className="mt-6 max-w-md font-sans text-lg leading-6 opacity-85 md:text-base">
            I’m a creative and detail-oriented Frontend Developer with a passion for building visually engaging, user-focused digital experiences. Currently studying at IADT, I enjoy turning ideas and designs into responsive, accessible, and interactive web interfaces.

I work primarily with React, JavaScript, HTML, CSS, and Tailwind CSS, and I’m especially interested in how thoughtful design and clean code come together to create intuitive user journeys. I enjoy problem-solving, experimenting with UI interactions, and continuously improving both performance and usability.

Beyond coding, I value collaboration, curiosity, and learning through building. I’m always excited to take on new challenges, refine my skills, and contribute to projects that blend creativity with technology.
          </p>
        </div>
      </div>
    </section>
    );
}