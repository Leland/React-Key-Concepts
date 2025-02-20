import "./App.css";

import { Calculator } from "./components/Calculator";
import { Goal } from "./components/Goal";
import { Header } from "./components/Header";

function App() {
  return (
    <>
      <Header>
        <h1>My Goals For This Book</h1>
      </Header>
      <Goal title="Develop a deeper understanding of React's hooks">
        And new developments
      </Goal>
      <Goal title="Get faster with React">
        Work on coding speed and ergonomics
      </Goal>
      <h2>Chapter 3</h2>
      <Calculator />
    </>
  );
}

export default App;
