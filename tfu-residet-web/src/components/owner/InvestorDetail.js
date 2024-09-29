import React, { Component } from 'react';

class InvestorDetail extends Component {
    render() {
        const { investor } = this.props;

        return (
            <div>
                <h2>Chi tiết Nhà đầu tư: {investor.name}</h2>
                <p>Email: {investor.email}</p>
                <p>Số điện thoại: {investor.phone}</p>
                <p>Trạng thái: {investor.status}</p>
            </div>
        );
    }
}

export default InvestorDetail;
