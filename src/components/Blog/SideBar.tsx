import { NavLink } from "react-router-dom";
import jsIcon from "/javascript-svgrepo-com.svg";
import introIcon from "/presentation-svgrepo-com.svg";

interface SideBarNav {
  icon: string;
  link: string;
  name: string;
  alt: string;
}

const sideBarNavs: SideBarNav[] = [
  {
    icon: introIcon,
    link: ".",
    name: "Intro",
    alt: "Intro Icon",
  },
  {
    icon: jsIcon,
    link: "js",
    name: "JS Notes",
    alt: "JS Icon",
  },
];

export function SideBar() {
  return (
    <nav className="md:w-50 h-lvh border border-gray-300 p-5 shadow-md flex flex-col gap-5 sticky top-6 self-start">
      {sideBarNavs.map((s) => {
        return (
          <NavLink
            key={s.name}
            to={s.link}
            end={s.link === "."}
            className={({ isActive }) =>
              `flex flex-row gap-1 pb-3 items-center transition-opacity ${
                isActive ? "border-b border-amber-400" : ""
              }`
            }
          >
            <img src={s.icon} alt={s.alt} width={25} height={25} />
            <span className="hidden md:block font-mono text-sm">{s.name}</span>
          </NavLink>
        );
      })}
    </nav>
  );
}
