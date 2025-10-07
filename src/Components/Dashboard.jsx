import Dashicon from "../assets/Dashboard.png";
import EMRicon from "../assets/assessment.png";
import reporticon from "../assets/report.png";
import seticon from "../assets/Settings.png";
import { useState } from "react";

import "../style/Dashboard.css";

function Dashboard({ isOpen }) {

  const [isClick, setIsClick] = useState(false);

  const iconClicked = () => {
    setIsClick()
  }
  return (
    <div className={`expanded ${isOpen ? "open" : ""}`}>
      <div className="side">
        <ol className={`sidebar ${isOpen ? "open" : ""}`}>
          <li>
            <img src={Dashicon} alt="icon1" />
            {isOpen && <p>Dashboard</p>}
          </li>
          <li>
            <img src={EMRicon} alt="icon1" />
            {isOpen && <p>EMR Copilet</p>}
          </li>
          <li>
            <img src={reporticon} alt="icon1" />
            {isOpen && <p>Reports</p>}
          </li>
          <li>
            <img src={seticon} alt="icon1" />
            {isOpen && <p>Setings</p>}
          </li>
        </ol>
      </div>
    </div>
  );
}

export default Dashboard;
