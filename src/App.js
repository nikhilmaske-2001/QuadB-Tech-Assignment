import './App.css';
import Home from './Pages/Home';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import SeriesDetails from './Pages/SeriesDetails';

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
