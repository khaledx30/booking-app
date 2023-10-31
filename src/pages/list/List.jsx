import Navbar from "./../../components/Navbar/Navbar";
import Header from "./../../components/header/Header";
import "./list.css";
export default function List() {
  return (
    <div>
      <Navbar></Navbar>
      <Header></Header>
      <div className="listContainer">
        <div className="listWrapper">
          <div className="listSearch">
            <h1 className="lsTitle">Search</h1>
            <div className="lsItem">
              <label className="label">Destination</label>
              <input type="text" />
            </div>
          </div>
          <div className="listResult"></div>
        </div>
      </div>
    </div>
  );
}
