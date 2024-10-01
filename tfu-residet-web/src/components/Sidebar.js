import React from 'react';
import '../styles/Sidebar.css';

const Sidebar = () => {
  return (
    <div className="sidebar">
      <div className="profile">
        <img src="profile-picture.jpg" alt="Profile" className="profile-img" />
        <h3>JSX Computer</h3>
        <p>Royal City</p>
      </div>
      <nav>
        <ul>
          <li className="active"><a href="#">Trang chính</a></li>
          <li><a href="#">Đơn hàng</a></li>
          <li><a href="#">Dự án</a></li>
          <li><a href="#">Tòa nhà</a></li>
          <li><a href="#">Phòng ban</a></li>
          <li><a href="#">Thành viên</a></li>
          <li><a href="#">Nhóm quyền</a></li>
          <li><a href="#">Tài liệu</a></li>
          <li><a href="#">Lịch sử</a></li>
          <li><a href="#">Cài đặt</a></li>
        </ul>
      </nav>
    </div>
  );
};

export default Sidebar;