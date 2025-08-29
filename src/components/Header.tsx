import { FcHome } from "react-icons/fc";
import { SiRefinedgithub } from "react-icons/si";

export function Header() {
  return (
    <div className="flex flex-row justify-between items-center">
      <a>
        <a href="/" aria-label="Home">
          <FcHome size={30} className="shrink-0" />
        </a>
      </a>
      <a href="https://github.com/Jennifer-JY" className="hover:cursor-pointer">
        <SiRefinedgithub size={30} className="shrink-0" />
      </a>
    </div>
  );
}
