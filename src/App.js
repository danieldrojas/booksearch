import Navbar from "./components/Navbar";
import Main from "./pages/Main";

function App() {
  return (
    <>
      <Navbar />
      <div className="container">
        <div className="row">
          <div className="col s12">
            <Main />
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
