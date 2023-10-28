import {Routes, Route} from "react-router-dom"
import './App.css';
import { Signup } from "./components/Signup";
import { Login } from "./components/Login";
import CreateNotes from "./components/CreateNotes";
import { Notes } from "./components/Notes";
import { EditNote } from "./components/EditNote";

function App() {
  return (
    <div className="App">
      <h1>Notes Taking Application</h1>
      <Routes>
        <Route path="/register" element={<Signup/>}/>
        <Route path="/login" element={<Login/>}/>
        <Route path="/create" element={<CreateNotes/>}/>
        <Route path="/notes" element={<Notes/>}/>
        <Route path="/notes/edit/:noteId" element={<EditNote/>} />
      </Routes>
    </div>
  );
}

export default App;
