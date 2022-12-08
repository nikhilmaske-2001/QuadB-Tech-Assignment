import './App.css';
import Home from './components/Home';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Series from './components/Series';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />}></Route >
          <Route path="/series" element={<Series />}>
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
