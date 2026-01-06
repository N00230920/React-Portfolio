import { Link } from "react-router-dom";

export default function CTA() {
  return (
    <section id="contact" className="py-16">
      <div className="mx-auto max-w-3xl rounded-[26px] bg-card px-8 py-16 text-center shadow-soft">
        <h2 className="font-serif text-5xl text-card-foreground">
          Do you have a project<br />in mind?
        </h2>

        <div className="mt-8">
          <Link
            to="/contact"
            className="inline-flex items-center justify-center rounded-lg bg-accent px-5 py-2 font-sans text-lg text-card shadow-soft hover:opacity-90"
          >
            Contact Moi
          </Link>
        </div>
      </div>
    </section>
  );
}
