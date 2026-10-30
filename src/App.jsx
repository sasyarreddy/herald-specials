import "./App.css";
import SectionGrid from "./SectionGrid";
import FeatureBoxes from "./FeatureBoxes";
import cover from "./assets/cover.jpg";



function App() {
  return (
    <>
      <header className="bh-cover">
        <img src={cover} alt="Wisconsin's Midterms: The Student Perspective" />
      </header>

<FeatureBoxes />

<SectionGrid />

      <main style={{ padding: "2rem" }}>
        {/* stories go here */}
      </main>
    </>
  );
}

export default App;