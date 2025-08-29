import { FcHome } from "react-icons/fc";
import { SiRefinedgithub } from "react-icons/si";

export function Header() {
  return (
    <div className="flex flex-row justify-between items-center">
      <a>
        <a
          href="https://jennifer-jy.github.io/portfolio/"
          title="Homepage — Jennifer's portfolio"
          aria-label="Homepage — Jennifer's portfolio"
        >
          <FcHome size={30} className="shrink-0" />
        </a>
      </a>
      <a
        href="https://github.com/Jennifer-JY"
        className="hover:cursor-pointer"
        target="_blank"
        rel="noopener noreferrer"
        title="GitHub — Jennifer-JY"
        aria-label="GitHub — Jennifer-JY"
      >
        <SiRefinedgithub size={30} className="shrink-0" />
      </a>
    </div>
  );
}
