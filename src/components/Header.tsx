import { NavLink } from "react-router-dom";
import { FcHome } from "react-icons/fc";
import { SiRefinedgithub } from "react-icons/si";
import blogIcon from "/notebook-svgrepo-com.svg";
export function Header() {
  return (
    <header className="mt-2 flex flex-row justify-between items-center py-2">
      <nav className="flex flex-row gap-10 items-center">
        <NavLink
          to="/"
          end
          className={({ isActive }) =>
            `text-lg font-medium ${
              isActive ? "text-blue-600" : "text-gray-700 hover:text-blue-600"
            }`
          }
          title="Homepage — Jennifer's portfolio"
          aria-label="Homepage — Jennifer's portfolio"
        >
          <div className="flex flex-row items-center gap-2">
            <FcHome size={30} className="shrink-0" /> <span>Home</span>
          </div>
        </NavLink>

        <NavLink
          to="/blog"
          className={({ isActive }) =>
            `text-lg font-medium ${
              isActive ? "text-blue-600" : "text-gray-700 hover:text-blue-600"
            }`
          }
        >
          <div className="flex flex-row items-center gap-2">
            <img src={blogIcon} alt="Blog icon" className="w-10 h-10" />
            <span>Blog</span>
          </div>
        </NavLink>
      </nav>

      {/* External GitHub link */}
      <a
        href="https://github.com/Jennifer-JY"
        className="hover:opacity-80 transition-opacity"
        target="_blank"
        rel="noopener noreferrer"
        title="GitHub — Jennifer-JY"
        aria-label="GitHub — Jennifer-JY"
      >
        <SiRefinedgithub size={30} className="shrink-0" />
      </a>
    </header>
  );
}
