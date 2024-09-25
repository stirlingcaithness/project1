import NavBar from "./Components/NavBar";
import Blog from "./Pages/Blog";
import Home from "./Pages/Home";
import Character from "./Pages/Character";
import Anime from "./Pages/Anime";
import Amv from "./Pages/Amv";
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
    <div className="App">
      <NavBar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/blog' element={<Blog />} />
        <Route path='/character' element={<Character />} />
        <Route path='/anime' element={<Anime />} />
        <Route path='/amv' element={<Amv />} />
      </Routes>


    </div>
    </BrowserRouter>
  );
}

export default App;
