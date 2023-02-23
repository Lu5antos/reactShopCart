// Components
import Home from "./pages/home";
import Store from "./pages/store";
import About from "./pages/about";
import Navbar from "./components/Navbar";

// React Imports
import { Routes, Route } from "react-router-dom";
import { Container } from "react-bootstrap";

function App() {
  return (
    <>
      <Navbar />
      <Container className="mb-4">
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/store" element={<Store />}></Route>
          <Route path="/about" element={<About />}></Route>
        </Routes>
      </Container>
    </>
  );
}

export default App;
