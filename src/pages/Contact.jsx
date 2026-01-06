import NavBar from "../components/NavBar";
import Footer from "../components/Footer";

export default function Contact() {
  return (
    <div className="min-h-screen bg-sand text-olive overflow-x-hidden">
      {/* NavBar */}
      <NavBar />

      {/* Page content */}
      <main className="mx-auto w-full max-w-6xl px-6 pt-14 pb-24">
        {/* Title */}
        <h1 className="font-serif text-7xl leading-none md:text-8xl">
          Contact
        </h1>

        {/* email / phone */}
        <div className="mt-6 flex gap-10 font-serif text-xl md:text-2xl">
          <a href="mailto:cmontcheu@gmail.com" className="hover:opacity-80">
            email
          </a>
          <a href="tel:+353896052699" className="hover:opacity-80">
            phone
          </a>
        </div>

        {/* Form panel */}
        <section className="mt-10 rounded-2xl bg-card px-8 py-10 shadow-soft md:px-16 md:py-14">
          <form className="mx-auto max-w-4xl">
            {/* Name + Email */}
            <div className="grid grid-cols-1 gap-10 md:grid-cols-2 md:gap-16">
              <input
                type="text"
                placeholder="Name"
                className="h-12 w-full rounded-md bg-primary-foreground px-4 font-sans text-olive placeholder:text-olive/60 outline-none focus:ring-2 focus:ring-primary"
              />

              <input
                type="email"
                placeholder="Email"
                className="h-12 w-full rounded-md bg-primary-foreground px-4 font-sans text-olive placeholder:text-olive/60 outline-none focus:ring-2 focus:ring-primary"
              />
            </div>

            {/* Message */}
            <div className="mt-12">
              <textarea
                placeholder="Message"
                rows={7}
                className="w-full resize-none rounded-md bg-primary-foreground px-4 py-4 font-sans text-olive placeholder:text-olive/60 outline-none focus:ring-2 focus:ring-primary"
              />
            </div>

            {/* Send */}
            <div className="mt-10 flex justify-center">
              <button
                type="submit"
                className="rounded-lg bg-accent px-7 py-2 font-sans text-base text-olive shadow-soft hover:opacity-90"
              >
                Send
              </button>
            </div>
          </form>
        </section>
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}
