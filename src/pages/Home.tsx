import { Education } from "../components/Education";
import Footer from "../components/Footer";
import { Intro } from "../components/Intro";
import { Projects } from "../components/Projects";

export function Home() {
  return (
    <div className="mx-11 px-10">
      <Intro />
      <Education />
      <Projects />
      <br />
      <Footer />
    </div>
  );
}
