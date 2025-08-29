import { SiVercel } from "react-icons/si";
import IconWrapper from "./IconWrapper";

export default function VercelIcon() {
  return (
    <IconWrapper>
      <SiVercel className="h-4 w-4" aria-hidden />
      Live Demo
    </IconWrapper>
  );
}
