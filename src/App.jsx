import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Countries from "./pages/Countries";
import Header from "./components/Header";
import { useState } from "react";
import SingleCountry from "./pages/SingleCountry";

function App() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <Router>
        <Header setIsOpen={setIsOpen} />
        <Routes>
          <Route
            path="/"
            element={<Countries isOpen={isOpen} setIsOpen={setIsOpen} />}
          />
          <Route path="/country/:id" element={<SingleCountry />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
