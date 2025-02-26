import { Route, Routes } from "react-router-dom";
import "./App.css";
import { NavBar } from "./components/NavBar/NavBar.tsx";
import { Chapter8 } from "./pages/Chapter8.tsx";
import { Chapter9 } from "./pages/Chapter9.tsx";
import { Home } from "./pages/Home.tsx";
import { Chapter10 } from "./pages/Chapter10.tsx";

function App() {
  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Chapter8" element={<Chapter8 />} />
        <Route path="/Chapter9" element={<Chapter9 />} />
        <Route path="/Chapter10" element={<Chapter10 />} />
      </Routes>
      {/* For use by portals */}
      <div id="dialogs"></div>
    </>
  );
}

export default App;
