import { useState } from "react";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Cards from "./components/Cards";
import Overlay from "./components/Overlay";

function App() {
  const [isOverlay, setIsoverlay] = useState(false);
  return (
    <main className={isOverlay ? "container container-blur" : "container"}>
      <Header />

      <section className="cards-container">
        <Cards />
      </section>
      <section className="model-container">
        <button className="show-modal" onClick={() => setIsoverlay(true)}>
          Interested? Click Here
        </button>

        {isOverlay ? (
          <Overlay setIsoverlay={setIsoverlay} isOverlay={isOverlay} />
        ) : null}
      </section>
      <Footer />
    </main>
  );
}

export default App;
