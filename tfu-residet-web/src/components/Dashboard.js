import React from 'react';
import '../styles/Dashboard.css';
import Header from './Header';
import DashboardCard from './DashboardCard';

const Dashboard = () => {
  return (
    <div className="main-content">
      <Header />
      <section className="dashboard">
        <h1>Quản lý nhanh</h1>
        <div className="dashboard-cards">
          <DashboardCard number="0" title="Cư dân" link="Danh sách cư dân" />
          <DashboardCard number="0" title="Căn hộ" link="Danh sách căn hộ" />
          <DashboardCard number="2" title="Tòa nhà" link="Danh sách tòa nhà" />
          <DashboardCard number="3" title="Dự án" link="Danh sách dự án" />
        </div>
      </section>
    </div>
  );
};

export default Dashboard;