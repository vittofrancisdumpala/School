// @material-ui/icons
import Dashboard from "@material-ui/icons/Dashboard";
import SettingsIcon from "@material-ui/icons/Settings";
import EventIcon from "@material-ui/icons/Event";
import SearchIcon from '@material-ui/icons/Search';


const routes = [
  {
    path: "",
    name: "Dashboard",
    icon: Dashboard,
    component: "",
    layout: "/dashboard"
  },
  {
    path: "/timeSlot",
    name: "Schedule",
    icon: EventIcon,
    component: "",
    layout: "/dashboard"
  },
  {
    path: "/account",
    name: "settings",
    icon: SettingsIcon,
    component: "",
    layout: "/dashboard"
  },
  {
    path: "/search",
    name: "Search",
    icon: SearchIcon,
    component: "",
    layout: "/dashboard"
  }
];

export default routes;
