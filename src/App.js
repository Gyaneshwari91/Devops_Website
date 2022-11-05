import './App.css';
import NavBar from './components/Navbar';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Github from './pages/Github';
import Docker from './pages/Docker';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <NavBar/>
        <Routes>
          <Route exact path="/" element={<Home/>} />
          <Route exact path="/github" element={<Github/>} />
          <Route exact path="/docker" element={<Docker/>} />
          {/* <Route exact path="/kubernetes" element={<Kubernetes/>} />
          <Route exact path="/gcp" element={<GCP/>} /> */}
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
