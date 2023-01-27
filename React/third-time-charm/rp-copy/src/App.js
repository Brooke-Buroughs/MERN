import './App.css';
import {
  BrowserRouter,
  Routes,
  Route
} from 'react-router-dom';
import Home from './components/home';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/:wordorNumber" element={<Home />} />
        <Route path="/:wordorNumber/:fontColor/:backgroundColor" element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;