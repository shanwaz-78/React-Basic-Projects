import "./App.css";
import { BrowserRouter as Router } from "react-router-dom";
import NavBar from "./Components/NavBar/NavBar";
import AppRoutes from "./Routes/index";
import NoteState from "./Context/Notes/NotesState";

function App() {
  return (
    <div className="App">
      <NoteState>
        <Router>
          <NavBar />
          <AppRoutes />
        </Router>
      </NoteState>
    </div>
  );
}

export default App;
