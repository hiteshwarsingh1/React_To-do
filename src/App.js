import logo from './logo.svg';
import './App.css';
import Main from "./components/main";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faTrash,faHandPointRight } from "@fortawesome/free-solid-svg-icons";
library.add(faTrash,faHandPointRight);
function App() {
  return (
    <div className="App">
      
      <Main />
    </div>
  );
}

export default App;
