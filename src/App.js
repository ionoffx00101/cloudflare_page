import "./App.css";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="App">
        <h1 className="text-3xl font-bold underline">Hello world!</h1>
        <button className="btn btn-primary">Button</button>
      </div>
    </Router>
  );
}

export default App;
