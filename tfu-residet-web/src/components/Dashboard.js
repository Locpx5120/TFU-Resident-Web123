import React from 'react';
import '../styles/Dashboard.css';
import Header from './Header';
import DashboardCard from './DashboardCard';

const Dashboard = () => {
  return (
      <section className="content dashboard">
        <h1 className="dashboard_title">Quản lý nhanh</h1>
        <div className="dashboard-cards">
          <DashboardCard number="0" title="Cư dân" link="Danh sách cư dân" />
          <DashboardCard number="0" title="Căn hộ" link="Danh sách căn hộ" />
          <DashboardCard number="2" title="Tòa nhà" link="Danh sách tòa nhà" />
          <DashboardCard number="3" title="Dự án" link="Danh sách dự án" />
        </div>
      </section>
  );
};

export default Dashboard;