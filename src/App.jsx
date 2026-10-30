import "./App.css";
import SectionGrid from "./SectionGrid";
import cover from "./assets/student outlooks coveRr (1).png";


function App() {
  return (
    <>
      <header className="bh-cover">
        <img src={cover} alt="Wisconsin's Midterms: The Student Perspective" />
      </header>

      <SectionGrid />

      <main style={{ padding: "2rem" }}>
        {/* stories go here */}
      </main>
    </>
  );
}

export default App;