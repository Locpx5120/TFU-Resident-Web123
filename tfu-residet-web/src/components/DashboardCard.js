import React from 'react';
import '../styles/DashboardCard.css';

const DashboardCard = ({ number, title, link }) => {
  return (
    <div className="card">
      <h2>{number}</h2>
      <p>{title}</p>
      <a href="#">{link} &rarr;</a>
    </div>
  );
};

export default DashboardCard;
