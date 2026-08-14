import Navbar from "./Components/Navbar";
import MovieDetailsPage from "./Components/MovieDetailsPage";
import { Route, Routes } from "react-router-dom";
import Home from "./Components/Home";
import About from "./Components/About";
import SavedMovie from "./Components/SavedMovie/SavedMovie";

function App() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      <main className="mx-auto max-w-6xl px-4 py-6">
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/about" element={<About />}></Route>
          <Route path="/movie/:id" element={<MovieDetailsPage />} />
          <Route path="/savedMovie" element={<SavedMovie />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;
