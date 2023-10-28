import {Routes, Route} from "react-router-dom"
import './App.css';
import { Signup } from "./components/Signup";
import { Login } from "./components/Login";
import CreateNotes from "./components/CreateNotes";
import { Notes } from "./components/Notes";
import { EditNote } from "./components/EditNote";
import { Navbar } from "./components/Navbar";
import { AllRoutes } from "./components/AllRoutes";

function App() {
  return (
    <div className="App">
      <Navbar/>
      <h1>Notes Taking Application</h1>
      <AllRoutes/>
    </div>
  );
}

export default App;
