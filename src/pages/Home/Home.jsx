import Navbar from "../../components/Navbar/Navbar";
import Header from "../../components/header/Header";
import "./Home.css";
import Featured from "./../../components/featured/Featured";
export default function About() {
  return (
    <>
      <div className="test">
        <Navbar />
        <Header type={true} />
        <div className="homeContainer">
          <Featured />
          <h1 className="homeTitle">Browse by property type</h1>
        </div>
      </div>
    </>
  );
}
