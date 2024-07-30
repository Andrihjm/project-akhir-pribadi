import { IoMdCart } from "react-icons/io";
import { MdDashboardCustomize, MdCategory } from "react-icons/md";
import { LiaTruckLoadingSolid } from "react-icons/lia";
import { FaUser } from "react-icons/fa";

export const menuNavbar = [
  {
    id: 1,
    name: "Dashboard",
    icon: MdDashboardCustomize,
    link: "/admin/dashboard",
  },
  {
    id: 2,
    name: "Products",
    icon: IoMdCart,
    link: "/admin/productList",
  },
  {
    id: 3,
    name: "Category",
    icon: MdCategory,
    link: "/admin/categoryList",
  },
  {
    id: 4,
    name: "Order",
    icon: LiaTruckLoadingSolid,
    link: "/admin/orderLins",
  },
  {
    id: 5,
    name: "User",
    icon: FaUser,
    link: "/admin/userList",
  },
];
