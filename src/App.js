import { BrowserRouter } from "react-router-dom";
import "./App.css";
import MainRouds from "./components/MainRouds";
import NavBar from "./components/NavBar/NavBar";

function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <MainRouds />
    </BrowserRouter>
  );
}

export default App;
