import "./App.css";
import SearchBar from "./Components/SearchBar/SearchBar";
import SideBar from "./Components/SideBar/SideBar";
import Product from './Components/Product/Product';

function App() {
  return (
    <div className="App">
      <SearchBar />
      <div className="main-content">
        <SideBar />
        <Product />
      </div>
    </div>
  );
}

export default App;
