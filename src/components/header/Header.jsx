import { faBed } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./header.css";
export default function Header() {
  // const element = <FontAwesomeIcon icon={faBed} />;
  return (
    <div className="header">
      <div className="headerList">
        <div className="headerListItem">
          <FontAwesomeIcon icon={faBed} />
        </div>
      </div>
    </div>
  );
}
