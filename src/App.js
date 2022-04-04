
import { Route, Routes } from "react-router-dom";
import "./App.css";
import About from "./Components/About/About";
import Blogs from "./Components/Blogs/Blogs";
import Dashboard from "./Components/Dashboard/Dashboard";
import Header from "./Components/Header/Header";
import Home from "./Components/Home/Home";
import NotFound from "./Components/NotFound/NotFound";
import Reviews from "./Components/Reviews/Reviews";

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="/reviews" element={<Reviews/>}></Route>
        <Route path="/dashboard" element={<Dashboard/>}></Route>
        <Route path="/blogs" element={<Blogs />}></Route>
        <Route path="/about" element={<About/>}></Route>
        <Route path="*" element={<NotFound/>}></Route>
      </Routes>
    </div>
  );
}

export default App;
