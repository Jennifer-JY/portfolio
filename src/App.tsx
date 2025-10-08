import { Route, Routes } from "react-router-dom";
import { Home } from "./pages/Home";
import Layout from "./components/Layout";
import { BlogLayout } from "./components/Blog/Layout";
import { BlogIntro } from "./components/Blog/Intro";
import { Javascript } from "./components/Blog/Javascript";

function App() {
  return (
    <>
      <Routes>
        <Route element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="blog" element={<BlogLayout />}>
            <Route index element={<BlogIntro />} />
            <Route path="js" element={<Javascript />} />
          </Route>
        </Route>
      </Routes>
    </>
  );
}

export default App;
