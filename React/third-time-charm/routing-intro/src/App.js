import React from "react";
import {
  BrowserRouter,
  Routes,
  Route,
  Link
} from "react-router-dom";
import Home from './components/home';
import About from './components/about';
import './App.css';
import Survey from "./components/survey";
import { useParams } from "react-router-dom";
// import Results from "./components/results";

const Location = (props) => {
  const { city } = useParams();

  return (
    <h1>Welcome to { city }</h1>
  );
}

function App() {
  return (
    <BrowserRouter>
      <p>
        <Link to="/location/seattle">Seattle</Link>
        |
        <Link to="/location/chicago">Chicago</Link>
        |
        <Link to="/location/burbank">Burbank</Link>
      </p>
      <Routes>
        <Route path="/location/:city" element={<Location />} />
        <Route path="/about" element={<About />} />
        <Route exact path="/" element={<Home />} />
        <Route path="/survey" element={<Survey />} />
        {/* <Route path="/results" element={<Results />} /> */}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
