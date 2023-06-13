import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import { Home } from "./pages";
import { Header, Sidebar } from "./components";

function App() {
  return (
    <div className="App flex">
      <div className="sticky w-[300px]">
        <Sidebar />
      </div>
      <div className="w-[100%] flex flex-col flex-1 z-1000">
        <div className="w-[100%] h-16">
          <Header />
        </div>
        <div className="pl-12 pt-5">
          <Router>
            <Routes>
              <Route path="/" exact element={<Home />} />
            </Routes>
          </Router>
        </div>
      </div>
    </div>
  );
}

export default App;
