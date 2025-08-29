import { SiGithub } from "react-icons/si";
import IconWrapper from "./IconWrapper";

export default function GithubIcon() {
  return (
    <IconWrapper>
      <SiGithub className="h-4 w-4" aria-hidden />
      GitHub Repo
    </IconWrapper>
  );
}
