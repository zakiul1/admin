import { GoDashboard } from "react-icons/go";
import { GiMoneyStack } from "react-icons/gi";
import { HiOutlineDocumentDuplicate } from "react-icons/hi2";
import { Home } from "@/pages/dashboard";
import { MdAttachMoney } from "react-icons/md";
import Settings from "./pages/dashboard/Settings";
import Expenses from "./pages/dashboard/expenses/Expenses";
import Income from "./pages/dashboard/income/Income";
import Lc from "./pages/dashboard/lc/lc";

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
        element: <Income />,
      },
      {
        icon: <HiOutlineDocumentDuplicate {...icon} />,
        name: "lc",
        path: "/lc",
        element: <Lc />,
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
