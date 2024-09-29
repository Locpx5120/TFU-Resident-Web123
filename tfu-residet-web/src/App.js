import React from 'react';
// Import các thành phần cần thiết
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import DashboardPage from './pages/owner/DashboardPage';
import InvestorManagementPage from './pages/owner/InvestorManagementPage';
import InvestorDetailPage from './pages/owner/InvestorDetailPage';
import ReportPage from './pages/owner/ReportPage';
import NotificationPage from './pages/owner/NotificationPage';
import PaymentPage from './pages/owner/PaymentPage';
import SettingsPage from './pages/owner/SettingsPage';

class App extends React.Component {
    render() {
        return (
            <Router>
                <Routes>
                    <Route path="/" element={<DashboardPage />} />
                    <Route path="/investors" element={<InvestorManagementPage />} />
                    <Route path="/investors/:id" element={<InvestorDetailPage />} />
                    <Route path="/reports" element={<ReportPage />} />
                    <Route path="/notifications" element={<NotificationPage />} />
                    <Route path="/payments" element={<PaymentPage />} />
                    <Route path="/settings" element={<SettingsPage />} />
                </Routes>
            </Router>
        );
    }
}

export default App;
