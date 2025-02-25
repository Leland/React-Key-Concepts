import { Goal } from "../components/Goal";
import { Header } from "../components/Header";
import { Chapter4 } from "../components/Chapters/Chapter4";
import { Chapter5 } from "../components/Chapters/Chapter5";
import { Chapter7 } from "../components/Chapters/Chapter7";

export function Home() {
  return (
    <main
      style={{
        border: "solid 1px #aaa",
        padding: "1rem",
        borderRadius: "0.5rem",
        backgroundColor: "#fff",
      }}
    >
      <section>
        <Header>
          <h1>My Goals For This Book</h1>
        </Header>
        <Goal title="Develop a deeper understanding of React's hooks">
          And new developments
        </Goal>
        <Goal title="Get faster with React">
          Work on coding speed and ergonomics
        </Goal>
      </section>
      <section>
        <h2>Chapter 4</h2>
        <Chapter4 />
      </section>
      <section>
        <h2>Chapter 5</h2>
        <Chapter5 />
      </section>
      <section>
        <h2>Chapter 7</h2>
        <Chapter7 />
      </section>
    </main>
  );
}
