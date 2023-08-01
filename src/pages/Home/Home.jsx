import Navbar from "../../components/Navbar/Navbar";
import Header from "../../components/header/Header";
import styles from "./Home.module.css";
export default function About() {
  return (
    <>
      <div className={styles.color}>
        <Navbar />
        <Header />
      </div>
    </>
  );
}
