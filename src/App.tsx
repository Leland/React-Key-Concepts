import { Routes, Route } from "react-router-dom";
import { Home } from "./pages/Home.tsx";
import { NavBar } from "./components/NavBar/NavBar.tsx";
import "./App.css";

function App() {
  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
      {/* For use by portals */}
      <div id="dialogs"></div>
    </>
  );
}

export default App;
