import "./App.css";
import Create from "./components/Create";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Read from "./components/Read";
import Update from "./components/Update";

function App() {
  return (
    <div className="App" id="bg">
      <Router>
        <Navbar />
        <Routes>
          <Route exact path="/"  />
          <Route exact path="/create" element={<Create />} />
          <Route exact path="/update" element={<Update />} />
          <Route exact path="/read" element={<Read />} />
        </Routes>
        <Footer />
      </Router>
      
    </div>
  );
}

export default App;
