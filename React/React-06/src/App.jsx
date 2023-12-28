import "./App.css";
import { Link, Route, Routes } from "react-router-dom";
// import UsingAxios from "./components/UsingAxios";
// import UsingFetch from "./components/UsingFetch";
import Home from "./components/Home";
import About from "./components/About";
import Navbar from "./components/Navbar";
import Users from "./components/Users";
import User from "./components/User";
import NoMatch from "./components/NoMatch";

function App() {
  return (
    <>
      <Navbar />
      <div className="container">
        {/* <UsingFetch /> */}
        {/* <UsingAxios /> */}

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/users" element={<Users />}>
            <Route path=":id" element={<User />} />
          </Route>
          <Route path="*" element={<NoMatch />} />

          {/* <Route
            path="*"
            element={
              <div className="row my-5">
                <div className="col text-center">
                  <h4 className="display-5">Aradığınız sayfa bulunamadı.</h4>
                  <Link to="/">Ana Sayfaya Dön!</Link>
                </div>
              </div>
            }
          /> */}
        </Routes>
      </div>
    </>
  );
}

export default App;
