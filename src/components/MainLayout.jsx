import React, { useState } from 'react';
import { FaHome, FaBox, FaShoppingCart, FaChartLine, FaMoneyBillWave, FaUsersCog, FaWarehouse, FaBars, FaSignOutAlt } from "react-icons/fa";
import logo from '../logo.png';
import { NavLink } from 'react-router-dom';
export default function MainLayout({ children }) {
  const [isOpen, setIsOpen] = useState(true);
  const toggle = () => setIsOpen(!isOpen);
  const menuItem = [
    {
      path: "/home",
      name: "Home",
      icon: <FaHome />
    },
    {
      path: "/dashboard",
      name: "Dashboard",
      icon: <FaChartLine />
    },
    {
      path: "/product",
      name: "Product",
      icon: <FaBox />
    },
    {
      path: "/order",
      name: "Order",
      icon: <FaShoppingCart />
    },
    {
      path: "/sales",
      name: "Sales",
      icon: <FaMoneyBillWave />
    },
    {
      path: "/manageUser",
      name: "Manage User",
      icon: <FaUsersCog />
    },
    {
      path: "/stock",
      name: "Stock",
      icon: <FaWarehouse />
    }
  ];

  return (
    <div className="container">
      <div style={{ width: isOpen ? "200px" : "50px" }} className="sidebar">
        <div className="top_section">
          <img src={logo} style={{ display: isOpen ? "block" : "none" }} className="logo" />
          <div style={{ marginLeft: isOpen ? "50px" : "0px" }} className="bars">
            <FaBars onClick={toggle} />
          </div>
        </div>
        {
          menuItem.map((item, index) => (
            <NavLink to={item.path} key={index} className="link" activeclassName="active">
              <div className="icon">{item.icon}</div>
              <div style={{ display: isOpen ? "block" : "none" }} className="link_text">{item.name}</div>
            </NavLink>
          ))
        }
        <button style={{ marginLeft: isOpen ? "20px" : "0px", width: isOpen ? "150px" : "50px" }} className="logout-btn">
          <FaSignOutAlt />
          <span style={{ display: isOpen ? "block" : "none" }}>Logout</span>
        </button>
      </div>
      <main>{children}</main>
    </div>
  )
}