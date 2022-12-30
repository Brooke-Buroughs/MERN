import React from "react";
import {
  BrowserRouter,
  Routes,
  Route,
  Link
} from "react-router-dom";
import Home from './components/home';
import { useParams } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/number/:number" element={<Number />} />
        <Route path="/hello/:hello" element={<Hello />} />
        <Route path="/hello/:color/:background" element={<Color />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
