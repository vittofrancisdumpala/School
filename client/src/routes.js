// @material-ui/icons
import Dashboard from "@material-ui/icons/Dashboard";
import SettingsIcon from "@material-ui/icons/Settings";
import EventIcon from "@material-ui/icons/Event";

const routes = [
  {
    path: "/dashboard",
    name: "Dashboard",
    icon: Dashboard,
    component: "",
    layout: "/trainer"
  },
  {
    path: "/timeSlot",
    name: "Schedule",
    icon: EventIcon,
    component: "",
    layout: "/trainer"
  },
  {
    path: "/account",
    name: "settings",
    icon: SettingsIcon,
    component: ""
  }
];

export default routes;
