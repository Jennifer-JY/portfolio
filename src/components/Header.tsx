import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";

export function Header() {
  return (
    <div className="flex flex-row justify-end items-center">
      <a href="https://github.com/Jennifer-JY" className="hover:cursor-pointer">
        <FontAwesomeIcon icon={faGithub} size="2x" />
      </a>
    </div>
  );
}
