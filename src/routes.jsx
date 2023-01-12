import { GoDashboard } from "react-icons/go";
import { GiMoneyStack } from "react-icons/gi";
import { Home } from "@/pages/dashboard";
import Expenses from "./pages/dashboard/Expenses";
import { MdAttachMoney } from "react-icons/md";
import Transaction from "./pages/dashboard/Transaction";
import Settings from "./pages/dashboard/Settings";

const icon = {
  className: "w-4 h-4 text-inherit",
};

export const routes = [
  {
    layout: "dashboard",
    pages: [
      {
        icon: <GoDashboard {...icon} />,
        name: "dashboard",
        path: "/home",
        element: <Home />,
      },
      {
        icon: <GiMoneyStack {...icon} />,
        name: "expenses",
        path: "/expenses",
        element: <Expenses />,
      },
      {
        icon: <MdAttachMoney {...icon} />,
        name: "income",
        path: "/income",
        element: <Home />,
      },
    ],
  },
  {
    title: "Settings",
    layout: "dashboard",
    pages: [
      {
        icon: <GoDashboard {...icon} />,
        name: "settings",
        path: "/setting",
        element: <Settings />,
      },
    ],
  },
];

export default routes;
