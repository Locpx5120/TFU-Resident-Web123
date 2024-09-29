import React, { Component } from 'react';
import '../../assets/styles/owner/Dashboard.css'; // Import CSS nếu cần

class Dashboard extends Component {
    render() {
        return (
            <div className="dashboard">
                <h2>Quản lý nhanh</h2>
                <div className="dashboard-card">
                    <span>0</span>
                    <p>Cư dân</p>
                    <a href="/residents">Danh sách cư dân</a>
                </div>
                <div className="dashboard-card">
                    <span>0</span>
                    <p>Căn hộ</p>
                    <a href="/apartments">Danh sách căn hộ</a>
                </div>
                <div className="dashboard-card">
                    <span>2</span>
                    <p>Tòa nhà</p>
                    <a href="/buildings">Danh sách tòa nhà</a>
                </div>
                <div className="dashboard-card">
                    <span>3</span>
                    <p>Dự án</p>
                    <a href="/projects">Danh sách dự án</a>
                </div>
            </div>
        );
    }
}

export default Dashboard;
