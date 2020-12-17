import { BrowserRouter as Router, Route } from 'react-router-dom'
import Navbar from "./components/Navbar";
import HomePage from "./pages/HomePage";

function App() {
  return (
      <Router>
        <Navbar />
        <div className="container">
          <div className="row">
          <div className="col s12">
            <Route path="/" component={HomePage} exact />
            </div>
          </div>
        </div>
      </Router>
  );
}

export default App;
