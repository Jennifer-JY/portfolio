import { faEnvelope } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export function Intro() {
  return (
    <div className="my-14 font-roboto space-y-4">
      <h1 className="text-4xl font-bold ">Hi, I'm Jennifer</h1>
      <h3 className="text-gray-400 italic">
        Graduate Software engineer/developer
      </h3>
      <p className="inline-flex items-center gap-2  text-gray-800">
        <FontAwesomeIcon icon={faEnvelope} />
        <span className="underline">Email me: yujiayue921@outlook.com</span>
      </p>
    </div>
  );
}
