import Dashboard from '../components/Dashboard';
import Project from '../components/Project';
import Building from '../components/Building';
import History from '../components/History';
export const routeArray = [
    { route: '/', routeName: 'Trang chính', component: <Dashboard /> },
    { route: '/du-an', routeName: 'Dự án', component: <Project /> },
    { route: '/toa-nha', routeName: 'Tòa nhà', component: <Building /> },
    { route: '/phong-ban', routeName: 'Phòng ban', component: <>Chua Co</> },
    { route: '/thanh-vien', routeName: 'Thành viên', component: <>Chua Co</> },
    { route: '/nhom-quyen', routeName: 'Nhóm quyền', component: <>Chua Co</> },
    { route: '/tai-lieu', routeName: 'Tài liệu', component: <>Chua Co</> },
    { route: '/lich-su', routeName: 'Lịch sử', component: <History /> },
    { route: '/cai-dat', routeName: 'Cài đặt', component: <>Chua Co</> },
];