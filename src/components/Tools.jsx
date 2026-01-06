// src/components/Tools.jsx
import HtmlIcon from "../assets/SVG/html.svg";
import CssIcon from "../assets/SVG/css.svg";
import JsIcon from "../assets/SVG/js.svg";
import PhpIcon from "../assets/SVG/php.svg";
import ExpressIcon from "../assets/SVG/exp.svg";
import P5Icon from "../assets/SVG/p5.svg";
import PythonIcon from "../assets/SVG/python.svg";
import ReactIcon from "../assets/SVG/react.svg";
import BootstrapIcon from "../assets/SVG/bs.svg";
import ScssIcon from "../assets/SVG/scss.svg";

import MysqlIcon from "../assets/SVG/sql.svg";
import AiIcon from "../assets/SVG/illust.svg";
import PsIcon from "../assets/SVG/photo.svg";
import PostgresIcon from "../assets/SVG/postg.svg";
import MongoIcon from "../assets/SVG/mongodb.svg";
import FigmaIcon from "../assets/SVG/figma.svg";
import DockerIcon from "../assets/SVG/docker.svg";
import SimsIcon from "../assets/SVG/sims.svg";

function ToolItem({ icon, label }) {
  return (
    <div className="flex items-center gap-3">
      {/* Icon container */}
      <div className="flex h-10 w-10 items-center justify-center rounded-md bg-card-foreground/10">
        <img
          src={icon}
          alt=""
          className="h-10 w-10 object-contain opacity-100"
        />
      </div>

      {/* Label */}
      <span className="font-sans text-sm opacity-85">{label}</span>
    </div>
  );
}


function ToolPanel({ title, items }) {
  return (
    <div className="rounded-2xl bg-card px-8 py-6 text-card-foreground shadow-sm shadow-black/10">
      <p className="font-sans text-lg uppercase tracking-wide text-buton opacity-90">
        {title}
      </p>

      <div className="mt-5 grid grid-cols-2 gap-x-10 gap-y-4 md:grid-cols-5 text-popover-foreground">
        {items.map((it) => (
          <ToolItem key={it.label} icon={it.icon} label={it.label} />
        ))}
      </div>
    </div>
  );
}

export default function Tools() {
  const dev = [
    { icon: HtmlIcon, label: "HTML" },
    { icon: CssIcon, label: "CSS" },
    { icon: JsIcon, label: "Javascript" },
    { icon: PhpIcon, label: "PHP" },
    { icon: ExpressIcon, label: "Express.js" },
    { icon: P5Icon, label: "P5.js" },
    { icon: PythonIcon, label: "Python" },
    { icon: ReactIcon, label: "React" },
    { icon: BootstrapIcon, label: "Bootstrap" },
    { icon: ScssIcon, label: "SCSS" },
  ];

  const other = [
    { icon: MysqlIcon, label: "MySQL" },
    { icon: AiIcon, label: "Adobe Illustrator" },
    { icon: PsIcon, label: "Adobe Photoshop" },
    { icon: PostgresIcon, label: "PostgreSQL" },
    { icon: MongoIcon, label: "MongoDB" },
    { icon: FigmaIcon, label: "Figma" },
    { icon: DockerIcon, label: "Docker" },
    { icon: SimsIcon, label: "Sims" },
  ];

  return (
    <section className="bg-background text-foreground">
      <div className="mx-auto max-w-6xl px-6">
        <h2 className="mb-3 font-serif text-4xl md:text-5xl">Tools</h2>

        <div className="space-y-10">
          <ToolPanel title="Development" items={dev} />
          <ToolPanel title="Other Skills" items={other} />
        </div>
      </div>
    </section>
  );
}
