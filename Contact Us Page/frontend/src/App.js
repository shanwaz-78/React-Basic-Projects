import "./App.css";
import { BrowserRouter as Router } from "react-router-dom";
import NavBar from "./Components/NavBar/NavBar";
import ContactHeader from "./Components/ContactHeader/ContactHeader";
import ContactForm from "./Components/ContactForm/ContactForm";

function App() {
  return (
    <div className="App">
      <Router>
        <NavBar />
        <main >
          <ContactHeader />
          <ContactForm />
        </main>
      </Router>
    </div>
  );
}

export default App;
