import { Header } from "./components/Header";
import { Goal } from "./components/Goal";
import "./App.css";

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
    </>
  );
}

export default App;
