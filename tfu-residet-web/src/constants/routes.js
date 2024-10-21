// inventors
import Dashboard from "../components/Dashboard";
import Project from "../components/ProjectInventor/Project";
import Building from "../components/BuildingInventor/Building";
import History from "../components/History";
// owners
import DashboardOwner from "../components/owner/dashboard";
import Agent from "../components/owner/agent";
import ReportInvestor from "../components/owner/report";
import HistoryOnwer from "../components/owner/history";
// icons
import WidgetsIcon from "@mui/icons-material/Widgets";
import BusinessIcon from "@mui/icons-material/Business";
import ApartmentIcon from "@mui/icons-material/Apartment";
import BusinessCenterIcon from "@mui/icons-material/BusinessCenter";
import PersonIcon from "@mui/icons-material/Person";
import SettingsIcon from "@mui/icons-material/Settings";
import DescriptionIcon from "@mui/icons-material/Description";
import HistoryIcon from "@mui/icons-material/History";
import NotificationsIcon from '@mui/icons-material/Notifications';
import AdminPanelSettingsIcon from "@mui/icons-material/AdminPanelSettings";
import DirectorPage from "../pages/buildingDirector/dashboard";
import SalaryListPage from "../pages/buildingDirector/agent";
import HouseHold from "../pages/buildingDirector/householdManagement";
import DetailHouseHold from "../pages/buildingDirector/householdManagement/DetailHouseHold";
import PaymentHistory from "../pages/buildingDirector/paymentHistory";
import Notification from "../pages/buildingDirector/notification";
export const routeArray = [
  {
    route: "/",
    routeName: "Trang chính",
    component: <Dashboard />,
    icon: <WidgetsIcon />,
  },
  {
    route: "/du-an",
    routeName: "Dự án",
    component: <Project />,
    icon: <BusinessIcon />,
  },
  {
    route: "/toa-nha",
    routeName: "Tòa nhà",
    component: <Building />,
    icon: <ApartmentIcon />,
  },
  {
    route: "/phong-ban",
    routeName: "Phòng ban",
    component: <>Chua Co</>,
    icon: <BusinessCenterIcon />,
  },
  {
    route: "/thanh-vien",
    routeName: "Thành viên",
    component: <>Chua Co</>,
    icon: <PersonIcon />,
  },
  {
    route: "/nhom-quyen",
    routeName: "Nhóm quyền",
    component: <>Chua Co</>,
    icon: <AdminPanelSettingsIcon />,
  },
  {
    route: "/tai-lieu",
    routeName: "Tài liệu",
    component: <>Chua Co</>,
    icon: <DescriptionIcon />,
  },
  {
    route: "/lich-su",
    routeName: "Lịch sử",
    component: <History />,
    icon: <HistoryIcon />,
  },
  {
    route: "/cai-dat",
    routeName: "Cài đặt",
    component: <>Chua Co</>,
    icon: <SettingsIcon />,
  },
];

export const routeOwner = [
  {
    route: "/",
    routeName: "Trang chính",
    component: <DashboardOwner />,
    icon: <WidgetsIcon />,
  },
  {
    route: "/thanh-vien",
    routeName: "Thành viên",
    component: <Agent />,
    icon: <PersonIcon />,
  },
  {
    route: "/bao-cao",
    routeName: "Báo cáo",
    component: <ReportInvestor />,
    icon: <DescriptionIcon />,
  },
  {
    route: "/lich-su",
    routeName: "Lịch sử",
    component: <HistoryOnwer />,
    icon: <HistoryIcon />,
  },
  {
    route: "/cai-dat",
    routeName: "Cài đặt",
    component: <>Chua Co</>,
    icon: <SettingsIcon />,
  },
];

export const routeDirector = [
  {
    route: "/",
    routeName: "Trang chính",
    component: <DirectorPage />,
    icon: <WidgetsIcon />,
  },
  {
    route: "/thanh-vien",
    routeName: "Quản lý thành viên",
    component: <SalaryListPage />,
    icon: <PersonIcon />,
  },
  {
    route: "/cu-dan",
    routeName: "Quản lý cư dân",
    component: <HouseHold />,
    icon: <PersonIcon />,
  },
  {
    route: "/cu-dan/:id",
    routeName: "Chi tiết cư dân",
    component: <DetailHouseHold />,
    hidden: true,
  },
  {
    route: "/thong-bao",
    routeName: "Thông báo",
    component: <Notification />,
    icon: <NotificationsIcon />,
  },
  {
    route: "/lich-su-thanh-toan",
    routeName: "Lịch sử thanh toán",
    component: <PaymentHistory />,
    icon: <HistoryIcon />,
  },
];
