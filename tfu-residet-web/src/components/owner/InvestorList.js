import React, { Component } from 'react';

class InvestorList extends Component {
    render() {
        const { investors, onSelect } = this.props;

        return (
            <div>
                <h2>Danh sách Nhà đầu tư</h2>
                <ul>
                    {investors.map((investor) => (
                        <li key={investor.id} onClick={() => onSelect(investor)}>
                            {investor.name} - {investor.email}
                        </li>
                    ))}
                </ul>
            </div>
        );
    }
}

export default InvestorList;
