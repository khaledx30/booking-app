import { useLocation } from "react-router-dom";
import Navbar from "./../../components/Navbar/Navbar";
import Header from "./../../components/header/Header";
import "./list.css";
import { useEffect, useRef, useState } from "react";
import { format } from "date-fns";
import { DateRange } from "react-date-range";
import SearchItem from "../../components/searchItem/SearchItem";

export default function List() {
  const location = useLocation();
  const [destination, setDestaination] = useState(location.state.destination);
  const [date, setDate] = useState(location.state.date);
  const [option, setOption] = useState(location.state.option);
  const [openDate, setOpenDate] = useState(false);
  let ref = useRef();
  useEffect(() => {
    function clicked(event) {
      if (!ref.current.contains(event.target) || event.key === "Escape") {
        setOpenDate(false);
      }
    }
    document.addEventListener("mousedown", clicked);
    document.addEventListener("keydown", clicked);

    return () => {
      document.removeEventListener("mousedown", clicked);
      document.removeEventListener("keydown", clicked);
    };
  }, []);
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
              <input type="text" placeholder={destination} />
            </div>
            <div className="lsItem" ref={ref}>
              <label>Check-in Date</label>
              <span onClick={() => setOpenDate(!openDate)}>{`${format(
                date[0].startDate,
                "MM/dd/yyyy"
              )} to ${format(date[0].endDate, "MM/dd/yyyy")}`}</span>
              {openDate && (
                <DateRange
                  onChange={(item) => setDate([item.selection])}
                  minDate={new Date()}
                  ranges={date}
                />
              )}
              <div className="lsItem">
                <label>Options</label>
                <div className="lsOptions">
                  <div className="lsOptionItem">
                    <span className="lsOptionText">
                      Min price <small>per night</small>
                    </span>
                    <input type="number" className="lsOptionInput" min={0} />
                  </div>
                  <div className="lsOptionItem">
                    <span className="lsOptionText">
                      Max price <small>per night</small>
                    </span>
                    <input type="number" className="lsOptionInput" min={0} />
                  </div>
                  <div className="lsOptionItem">
                    <span className="lsOptionText">Adult</span>
                    <input
                      type="number"
                      min={1}
                      className="lsOptionInput"
                      placeholder={option.adult}
                    />
                  </div>
                  <div className="lsOptionItem">
                    <span className="lsOptionText">Children</span>
                    <input
                      type="number"
                      min={0}
                      className="lsOptionInput"
                      placeholder={option.children}
                    />
                  </div>
                  <div className="lsOptionItem">
                    <span className="lsOptionText">Room</span>
                    <input
                      type="number"
                      min={1}
                      className="lsOptionInput"
                      placeholder={option.room}
                    />
                  </div>
                </div>
              </div>
            </div>
            <button>Search</button>
          </div>
          <div className="listResult">
            <SearchItem />
            <SearchItem />
            <SearchItem />
            <SearchItem />
            <SearchItem />
            <SearchItem />
            <SearchItem />
            <SearchItem />
            <SearchItem />
          </div>
        </div>
      </div>
    </div>
  );
}
