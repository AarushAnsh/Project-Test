
import "./App.css";
import Navbar from "./Components/Navbar";
import MovieDetailsPage from "./Components/MovieDetailsPage";
import { Route, Routes } from "react-router-dom";
import Home from "./Components/Home";
import About from "./Components/About";
import SavedMovie from "./Components/SavedMovie/SavedMovie";

function App() {
 
  return (
    <div className="app_container">
      <Navbar />
      <Routes>
       <Route path="/" element={<Home/>}></Route>
       <Route path="/about" element={<About/>}></Route>
       <Route path="/movie/:id" element={<MovieDetailsPage />} />
       <Route path="/savedMovie" element={<SavedMovie />} />
      </Routes>
    </div>
  );
}

export default App;
