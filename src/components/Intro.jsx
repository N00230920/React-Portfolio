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

          <div className="absolute right-15 top-10 h-[300px] w-[300px] overflow-hidden rounded-3xl bg-white shadow-lg shadow-black/10 md:h-[390px] md:w-[390px]">
            {/* image later */}
          </div>
        </div>
      </div>
    </section>
  );
}
