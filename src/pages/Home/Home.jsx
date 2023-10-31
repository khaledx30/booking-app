import Navbar from "../../components/Navbar/Navbar";
import Header from "../../components/header/Header";
import "./Home.css";
import Featured from "./../../components/featured/Featured";
import PropertyList from "../../components/propertyList/propertyList";
import FeaturedProperties from "./../../components/featuredProperties/featuredProperties";
import MaillList from "../../components/mailList/MaillList";
import Footer from "../../components/footer/Footer";
export default function About() {
  return (
    <>
      <div className="test">
        <Navbar />
        <Header type={true} />
        <div className="homeContainer">
          <Featured />
          <h1 className="homeTitle">Browse by property type</h1>
          <PropertyList />
          <h1 className="homeTitle">Homes guests love</h1>
          <FeaturedProperties />
          <MaillList />
          <Footer />
        </div>
      </div>
    </>
  );
}
