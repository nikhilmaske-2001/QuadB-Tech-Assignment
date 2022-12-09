import './App.css';
import Home from './components/Home';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import SeriesDetails from './components/SeriesDetails';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />}></Route >
          <Route path="/series/:id" element={<SeriesDetails />}></Route >
        </Routes>
      </BrowserRouter>
    </div >
  );
}

export default App;
