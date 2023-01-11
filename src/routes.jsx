import { GoDashboard } from "react-icons/go";
import { GiMoneyStack } from "react-icons/gi";
import { Home } from "@/pages/dashboard";
import Expenses from "./pages/dashboard/Expenses";
import { MdAttachMoney } from "react-icons/md";

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
    layout: "auth",
    pages: [
      {
        icon: <GoDashboard {...icon} />,
        name: "settings",
        path: "/income",
        element: <Home />,
      },
    ],
  },
];

export default routes;
