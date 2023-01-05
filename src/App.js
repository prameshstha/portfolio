import { Route, Routes } from "react-router-dom";
import "./App.css";
import { Layout } from "./Component";
import { HomePage, MovieRS, LaptopPP } from "./Pages";

function App() {
  return (
    <div className="App">
      <Layout>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/movie-rs" element={<MovieRS />} />
          <Route path="/laptop-price" element={<LaptopPP />} />
        </Routes>
      </Layout>
    </div>
  );
}

export default App;
