import { Education } from "./components/Education";
import Footer from "./components/Footer";
import { Header } from "./components/Header";
import { Intro } from "./components/Intro";
import { Projects } from "./components/Projects";

function App() {
  return (
    <>
      <div className="my-4 mx-11  p-10">
        <Header />
        <Intro />
        <Education />
        <Projects />
        <br />
        <Footer />
      </div>
    </>
  );
}

export default App;
