import SelfPortrait from "../assets/Portrait.png";

export default function Intro() {
  return (
    <section className="min-h-screen bg-background text-foreground">
      <div className="mx-auto grid min-h-[calc(100vh-80px)] max-w-6xl grid-cols-1 items-center gap-10 px-6 md:grid-cols-2">
        {/* Left */}
        <div>
          <p className="font-sans text-lg opacity-80">Hello I’m</p>

          <h1 className="mt-3 font-serif text-6xl leading-[0.95] md:text-8xl">
            Christine
            <br />
            Montcheu
          </h1>

          <p className="mt-6 max-w-md font-sans text-lg leading-6 opacity-85 md:text-base">
            I’m a student developer focused on JavaScript, creative coding, and
            full-stack systems. I design and engineer projects that blend clean
            code with fun, responsive interactions.
          </p>
        </div>

        {/* Right */}
        <div className="relative flex justify-center md:justify-end">
          <div className="h-[300px] w-[300px] rounded-3xl bg-card md:h-[410px] md:w-[410px]" />

          <div className="absolute left-32 top-5 h-[300px] w-[300px] overflow-hidden rounded-3x md:h-[400px] md:w-[400px]">
            <img
              src={SelfPortrait}
              alt="Portrait of Christine Montcheu"
              className="h-full w-full object-cover"
            />
          </div>

        </div>
      </div>
    </section>
  );
}
