import "./App.css";
import { Link, Route, Routes } from "react-router-dom";
import { IoPersonCircleOutline } from "react-icons/io5";
import { FaLocationDot } from "react-icons/fa6";
import { FaMagnifyingGlass } from "react-icons/fa6";
import { GoHomeFill } from "react-icons/go";
import imagineaTa from "./img/bkgplante.jpeg";
import imaginea2 from "./img/planta.webp";
import imaginea3 from "./img/cactus.webp";
import Search from "./search";
import Maps from "./maps";
import Login from "./login";

function Home() {
  return (
    <div className="fullscreen-container">
      <img src={imagineaTa} className="background-image" />
      <div className="overlay-text3">
        <h1>Welcome !</h1>
      </div>

      <div className="overlay-text">
        <h1>Planta rara</h1>
        <img src={imaginea2} className="img" />
      </div>

      <div className="overlay-text2">
        <h1>Cactus</h1>
        <img src={imaginea3} className="img" />
      </div>
    </div>
  );
}

function App() {
  return (
    <>
      <div className="sidebar">
        <ul>
          <li>
            <Link to="/">
              <GoHomeFill
                style={{
                  fontSize: "50px",
                  color: "green",
                  marginLeft: "30px",
                  marginTop: "20px",
                  marginBottom: "40px",
                  cursor: "pointer",
                }}
              />
            </Link>
          </li>
          <li>
            <Link to="/login">
              <IoPersonCircleOutline
                style={{
                  fontSize: "40px",
                  color: "green",
                  marginLeft: "30px",

                  marginBottom: "40px",
                  cursor: "pointer",
                }}
              />
            </Link>
          </li>
          <li>
            <Link to="/search">
              <FaMagnifyingGlass
                style={{
                  fontSize: "30px",
                  color: "green",
                  marginLeft: "35px",
                  cursor: "pointer",
                  marginBottom: "40px",
                }}
              />
            </Link>
          </li>
          <li>
            <Link to="/maps">
              <FaLocationDot
                style={{
                  fontSize: "30px",
                  color: "green",
                  marginLeft: "35px",
                  cursor: "pointer",
                  marginBottom: "40px",
                }}
              />
            </Link>
          </li>
        </ul>
      </div>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/search" element={<Search />} />
        <Route path="/maps" element={<Maps />} />
      </Routes>
    </>
  );
}

export default App;
