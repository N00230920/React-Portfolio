import LinkedInIcon from "../assets/SVG/linked.svg";
import GithubIcon from "../assets/SVG/git.svg";

export default function Footer() {
  return (
    <footer className="bg-card text-card-foreground">
      <div className="mx-auto flex max-w-6xl flex-col gap-8 px-6 py-10 md:flex-row md:items-end md:justify-between">
        {/* Left */}
        <div className="space-y-3">
          <p className="font-serif text-xl md:text-2xl">Contact Me</p>

          <div className="space-y-1 text-sm opacity-90">
            <p>
              <span className="opacity-80">Email :</span>{" "}
              <a
                className="underline underline-offset-4 hover:opacity-100"
                href="mailto:you@example.com"
              >
                you@example.com
              </a>
            </p>

            <p>
              <span className="opacity-80">Phone :</span>{" "}
              <a
                className="underline underline-offset-4 hover:opacity-100"
                href="tel:+15555555555"
              >
                +1 (555) 555-5555
              </a>
            </p>
          </div>

          <div className="flex items-center gap-3 pt-2">
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noreferrer"
              className="rounded-md border border-card-foreground/20 p-2 hover:bg-card-foreground/10"
              aria-label="LinkedIn"
            >
              <img src={LinkedInIcon} alt="" className="h-5 w-5 opacity-90" />
            </a>

            <a
              href="https://github.com"
              target="_blank"
              rel="noreferrer"
              className="rounded-md border border-card-foreground/20 p-2 hover:bg-card-foreground/10"
              aria-label="GitHub"
            >
              <img src={GithubIcon} alt="" className="h-5 w-5 opacity-90" />
            </a>
          </div>
        </div>

        {/* Right */}
        <div className="text-sm opacity-80 md:text-right">
          <p>© {new Date().getFullYear()} — Built & designed by Your Name</p>
        </div>
      </div>
    </footer>
  );
}
