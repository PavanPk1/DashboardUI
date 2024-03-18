import { FaChartPie, FaUsers, FaSearch } from "react-icons/fa";
import { AiOutlineTransaction, AiFillSchedule } from "react-icons/ai";
import { IoSettings } from "react-icons/io5";
import { FaBell } from "react-icons/fa6";

import "./index.css";
import { useState } from "react";
import Card from "../Card";
import PiChart from "../PiChart";
import Schedules from "../Schedules";
import LineChartGraph from "../LineChartGraph";
import Cookies from "js-cookie";
import { useNavigate } from "react-router-dom";

const data = [
  {
    id: 1,
    name: "Total Revenues",
    money: "$2,129,430",
    color: "#DDEFE0",
    icon: "https://res.cloudinary.com/dwsbjx12w/image/upload/v1710754421/Vector_aesolc.png",
  },
  {
    id: 2,
    name: "Total Transactions",
    money: "1,520",
    color: "#F4ECDD",
    icon: "https://res.cloudinary.com/dwsbjx12w/image/upload/v1710754421/Vector_2_g3usg9.png",
  },
  {
    id: 3,
    name: "Total Likes",
    money: "1,520",
    color: "#EFDADA",
    icon: "https://res.cloudinary.com/dwsbjx12w/image/upload/v1710754421/Vector_1_hzbzgb.png",
  },
  {
    id: 4,
    name: "Total Users",
    money: "2,430",
    color: "#DEE0EF",
    icon: "https://res.cloudinary.com/dwsbjx12w/image/upload/v1710754421/Vector_3_om7lhw.png",
  },
];

const Dashboard = () => {
  const [search, setSearch] = useState("");
  const onChangeSearch = (e) => setSearch(e.target.value);
  const navigate = useNavigate();

  if (Cookies.get("isSignedIn") === false) {
    return navigate('/')
  }
  return (
    <div className="dashboardContainer">
      <div className="leftbar">
        <h1 className="title">Board.</h1>
        <ul className="unorderedList">
          <li className="list active">
            <FaChartPie size={25} className="icon" />
            Dashboard
          </li>
          <li className="list">
            <AiOutlineTransaction size={25} className="icon" />
            Transactions
          </li>
          <li className="list">
            <AiFillSchedule size={25} className="icon" />
            Schedules
          </li>
          <li className="list">
            <FaUsers size={25} className="icon" />
            Users
          </li>
          <li className="list">
            <IoSettings size={25} className="icon" />
            Settings
          </li>
        </ul>
      </div>
      <div className="dashboard">
        <div className="container1">
          <h1 className="dashboard-title">Dashboard</h1>
          <div className="operations">
            <div className="searchContainer">
              <input
                type="search"
                placeholder="Search"
                value={search}
                onChange={onChangeSearch}
                className="search"
              />
              <FaSearch size={20} className="searchIcon" />
            </div>
            <div className="profile-bell">
              <FaBell size={25} />
              <div className="profile">
                <img
                  src="https://www.w3schools.com/howto/img_avatar.png"
                  alt="profile"
                  className="img"
                />
              </div>
            </div>
          </div>
        </div>
        <ul className="container2">
          {data.map((item) => (
            <Card details={item} key={item.id} />
          ))}
        </ul>
        <div className="container3">
          <h1 className="activites">Activities</h1>
          <div className="lineGraph">
            <LineChartGraph />
          </div>
        </div>
        <div className="container4">
          <div className="charts">
            <div className="chart-details-container">
              <h1 className="chart-title">Top Products</h1>
              <select>
                <option>May-June 2021</option>
              </select>
            </div>
            <PiChart />
          </div>
          <div className="charts">
            <Schedules />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
