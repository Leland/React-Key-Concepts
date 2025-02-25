import { Routes, Route } from "react-router-dom";
import { Home } from "./pages/Home.tsx";
import { Chapter8 } from "./pages/Chapter8.tsx";
import { NavBar } from "./components/NavBar/NavBar.tsx";
import "./App.css";

function App() {
  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Chapter8" element={<Chapter8 />} />
      </Routes>
      {/* For use by portals */}
      <div id="dialogs"></div>
    </>
  );
}

export default App;
