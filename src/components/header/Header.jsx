import {
  faBed,
  faCalendarDays,
  faCar,
  faPerson,
  faPlane,
  faTaxi,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./header.css";
import "react-date-range/dist/styles.css";
import "react-date-range/dist/theme/default.css";
import { useEffect, useRef, useState } from "react";
import { DateRange } from "react-date-range";
import { format } from "date-fns";
// import Test from "../test";
export default function Header() {
  const [openDate, setOpenDate] = useState(false);

  let ref = useRef();
  const [date, setDate] = useState([
    {
      startDate: new Date(),
      endDate: new Date(),
      key: "selection",
    },
  ]);

  const [option, setOption] = useState({
    adult: 1,
    children: 1,
    room: 1,
  });
  const handleOption = (name, operation) => {
    setOption((prev) => {
      return {
        ...prev,
        [name]: operation === "i" ? option[name] + 1 : option[name] - 1,
      };
    });
  };
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
    };
  });
  return (
    <div className="header">
      <div className="headerContainer">
        <div className="headerList">
          <div className="headerListItem active">
            <FontAwesomeIcon icon={faBed} />
            <span>Stays</span>
          </div>
          <div className="headerListItem">
            <FontAwesomeIcon icon={faPlane} />
            <span>Flights</span>
          </div>
          <div className="headerListItem">
            <FontAwesomeIcon icon={faCar} />
            <span>Car rentals</span>
          </div>
          <div className="headerListItem">
            <FontAwesomeIcon icon={faBed} />
            <span>Attractions</span>
          </div>
          <div className="headerListItem">
            <FontAwesomeIcon icon={faTaxi} />
            <span>Airport taxis</span>
          </div>
        </div>
        <h1 className="headerTitle">A lifetime of discounts? It's Genius.</h1>
        <p className="headerDesc">
          Get rewarded for your travels – unlock instant savings of 10% or more
          with a free Lamabooking account
        </p>
        <button className="headerBtn">sign in / Register</button>
        <div className="headerSearch">
          <div className="headerSearchItem">
            <FontAwesomeIcon icon={faBed} className="headerIcon" />
            <input
              type="text"
              placeholder="where are you going"
              className="headerSearchInput"
            />
          </div>
          <div className="headerSearchItem" ref={ref}>
            <FontAwesomeIcon icon={faCalendarDays} className="headerIcon" />
            <span
              onClick={() => setOpenDate(!openDate)}
              className="headerSearchText"
            >
              {format(date[0].startDate, "MM/dd/yyy")} to date
              {format(date[0].endDate, "MM/dd/yyy")}
            </span>

            {openDate && (
              <DateRange
                className="date"
                editableDateInputs={true}
                onChange={(item) => setDate([item.selection])}
                moveRangeOnFirstSelection={false}
                ranges={date}
              />
            )}
          </div>
          <div className="headerSearchItem">
            <FontAwesomeIcon icon={faPerson} className="headerIcon" />
            <span className="headerSearchText">{`${option.adult} Adults ${option.children} children ${option.room} room`}</span>
            <div className="optionContianer">
              <ul className="optionList">
                <li className="optionItem">
                  <span> Adult</span>
                  <div className="optionControler">
                    <button onClick={() => handleOption("adult", "i")}>
                      +
                    </button>
                    {option.adult}
                    <button onClick={() => handleOption("adult", "d")}>
                      -
                    </button>
                  </div>
                </li>
                <li className="optionItem">
                  <span>children</span>
                  <div className="optionControler">
                    <button onClick={() => handleOption("children", "i")}>
                      +
                    </button>
                    {option.children}
                    <button onClick={() => handleOption("children", "d")}>
                      -
                    </button>
                  </div>
                </li>
                <li className="optionItem">
                  <span>romm</span>
                  <div className="optionControler">
                    <button onClick={() => handleOption("room", "i")}>+</button>
                    {option.room}
                    <button onClick={() => handleOption("room", "d")}>-</button>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
        {/* <Test /> */}
      </div>
    </div>
  );
}
// lol
