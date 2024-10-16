import Dashboard from "../components/Dashboard";
import Project from "../components/ProjectInventor/Project";
import Building from "../components/BuildingInventor/Building";
import History from "../components/History";
import WidgetsIcon from "@mui/icons-material/Widgets";
import BusinessIcon from "@mui/icons-material/Business";
import ApartmentIcon from "@mui/icons-material/Apartment";
import BusinessCenterIcon from "@mui/icons-material/BusinessCenter";
import PersonIcon from "@mui/icons-material/Person";
import SettingsIcon from "@mui/icons-material/Settings";
import DescriptionIcon from "@mui/icons-material/Description";
import HistoryIcon from "@mui/icons-material/History";
import AdminPanelSettingsIcon from "@mui/icons-material/AdminPanelSettings";
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
