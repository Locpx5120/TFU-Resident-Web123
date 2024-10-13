import React, { useState } from "react";
import "../styles/Sidebar.css";
import { routeArray } from "../constants/routes";
import { Link } from "react-router-dom";
import styled from "styled-components";
import BadgeAvatars from "./Avatar";
import { Box } from "@mui/material";

const StyledUl = styled.ul`
  list-style-type: none;
  padding: 0;
  margin: 0;
`;

const StyledLi = styled.li`
  margin-bottom: 5px;
  transition: all 0.3s ease;

  a {
    display: block;
    padding: 10px 15px;
    text-decoration: none;
    color: #333;
    background-color: #f8f8f8;
    border-radius: 5px;
    transition: all 0.3s ease;
  }

  &:hover a {
    background-color: #e6ffe6;
    padding-left: 25px;
  }

  &.active a {
    background-color: #e6ffe6;
    color: #2e8b57;
    font-weight: bold;
  }
`;

const Sidebar = () => {
  const [activeIndex, setActiveIndex] = useState(null);
  const handleClick = (index) => {
    setActiveIndex(index);
  };
  return (
    <div className="sidebar">
      <div className="profile">
        <Box className="profile-img"><BadgeAvatars src="https://avatar-ex-swe.nixcdn.com/song/2020/08/06/6/0/8/0/1596682420038.jpg" /></Box>
        <h3>JSX Computer</h3>
        <p>Royal City</p>
      </div>
      <nav>
        <StyledUl>
          {routeArray.map((item, i) => (
            <StyledLi
              key={i}
              className={activeIndex === i ? "active" : ""}
              onClick={() => handleClick(i)}
            >
              <Link to={item.route}>{item.routeName}</Link>
            </StyledLi>
          ))}
        </StyledUl>
      </nav>
    </div>
  );
};

export default Sidebar;
