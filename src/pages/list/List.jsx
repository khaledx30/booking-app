import { useEffect, useRef, useState } from "react";
import { useLocation } from "react-router-dom";
import { format } from "date-fns";
import { DateRange } from "react-date-range";
import Navbar from "./../../components/Navbar/Navbar";
import Header from "./../../components/header/Header";
import SearchItem from "../../components/searchItem/SearchItem";
import "./list.css";

export default function List() {
  // Retrieve location state
  const { destination, date, option } = useLocation().state;

  // State variables
  const [openDate, setOpenDate] = useState(false);
  const [selectedDate, setSelectedDate] = useState(date);
  const dateRangeRef = useRef();

  // Close date picker when clicking outside or pressing Escape key
  useEffect(() => {
    function handleOutsideClickOrEscape(event) {
      if (
        !dateRangeRef.current.contains(event.target) ||
        event.key === "Escape"
      ) {
        setOpenDate(false);
      }
    }
    document.addEventListener("mousedown", handleOutsideClickOrEscape);
    document.addEventListener("keydown", handleOutsideClickOrEscape);

    return () => {
      document.removeEventListener("mousedown", handleOutsideClickOrEscape);
      document.removeEventListener("keydown", handleOutsideClickOrEscape);
    };
  }, []);

  // Function to render option input fields dynamically
  const renderOptionInput = (key, value) => (
    <div className="lsOptionItem" key={key}>
      <span className="lsOptionText">{key}</span>
      <input
        type="number"
        min={key === "Adult" ? 1 : 0}
        className="lsOptionInput"
        placeholder={value}
      />
    </div>
  );

  return (
    <div>
      <Navbar />
      <Header />
      <div className="listContainer">
        <div className="listWrapper">
          <div className="listSearch">
            <h1 className="lsTitle">Search</h1>
            {/* Destination input field */}
            <div className="lsItem">
              <label className="label">Destination</label>
              <input type="text" placeholder={destination} />
            </div>
            {/* Date range picker */}
            <div className="lsItem" ref={dateRangeRef}>
              <label>Check-in Date</label>
              <span onClick={() => setOpenDate(!openDate)}>
                {`${format(
                  selectedDate[0].startDate,
                  "MM/dd/yyyy"
                )} to ${format(selectedDate[0].endDate, "MM/dd/yyyy")}`}
              </span>
              {openDate && (
                <DateRange
                  onChange={(item) => setSelectedDate([item.selection])}
                  minDate={new Date()}
                  ranges={selectedDate}
                />
              )}
            </div>
            {/* Options */}
            <div className="lsItem">
              <label>Options</label>
              <div className="lsOptions">
                {Object.entries(option).map(([key, value]) =>
                  renderOptionInput(key, value)
                )}
              </div>
            </div>
            {/* Search button */}
            <button>Search</button>
          </div>
          {/* Result list */}
          <div className="listResult">
            {[...Array(9)].map((_, index) => (
              <SearchItem key={index} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
