import { BrowserRouter, Routes, Route } from "react-router-dom";
import Nav from "./objects/Nav";
import Home from "./views/Home";
import "./style.css"

function App() {
  return (
    <BrowserRouter>
    <div className="app">
    <Nav/>
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </div>
    </BrowserRouter>
  );
}

export default App;
