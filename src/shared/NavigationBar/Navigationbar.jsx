import React from "react";
import { Link, useNavigate } from "react-router-dom";

const roleNavItems = {
  admin: [
    { label: "Dashboard", path: "/dashboard/admin" },
    { label: "Users", path: "/dashboard/admin/users" },
    { label: "Reports", path: "/dashboard/admin/reports" },
  ],
  hr: [
    { label: "Dashboard", path: "/dashboard/hr" },
    { label: "Employees", path: "/dashboard/hr/employees" },
    { label: "Leave", path: "/dashboard/hr/leave" },
    { label: "Recruitment", path: "/dashboard/hr/recruitment" },
  ],
  subadmin: [
    { label: "Dashboard", path: "/dashboard/subadmin" },
    { label: "Staff", path: "/dashboard/subadmin/staff" },
    { label: "Tasks", path: "/dashboard/subadmin/tasks" },
  ],
  accounts: [
    { label: "Dashboard", path: "/dashboard/accounts" },
    { label: "Schedules", path: "/dashboard/accounts/schedules" },
    { label: "Presence", path: "/dashboard/accounts/presence" },
    { label: "Tasks", path: "/dashboard/accounts/tasks" },
    { label: "Messages", path: "/dashboard/accounts/messages" },
    { label: "Performance", path: "/dashboard/accounts/performance" },
    { label: "Documents", path: "/dashboard/accounts/documents" },
    { label: "Support", path: "/dashboard/accounts/support" },
    { label: "Payslips", path: "/dashboard/accounts/payslips" },
  ],
  employee: [
     { label: "Dashboard", path: "/dashboard/employee" },
    { label: "Schedules", path: "/dashboard/employee/schedules" },
    { label: "Presence", path: "/dashboard/employee/presence" },
    { label: "Tasks", path: "/dashboard/employee/tasks" },
    { label: "Messages", path: "/dashboard/employee/messages" },
    { label: "Performance", path: "/dashboard/employee/performance" },
    { label: "Documents", path: "/dashboard/employee/documents" },
    { label: "Support", path: "/dashboard/employee/support" },
    { label: "Payslips", path: "/dashboard/employee/payslips" },
  ],
};

const Navigationbar = () => {
  const navigate = useNavigate();
  const role = localStorage.getItem("role");

  const handleLogout = () => {
    localStorage.clear();
    navigate("/");
  };

  const navItems = roleNavItems[role] || [];

  return (
    <nav className="bg-white h-screen w-42 shadow-lg flex flex-col justify-between sticky top-0">
      {/* Logo / Brand */}
      <div className="px-1 py-4 flex justify-center items-center">
        <img src="/logo.webp" alt="logo"  className="h-full"/>
      </div>

      {/* Navigation Links */}
      <ul className="flex flex-col flex-grow px-4 py-6 space-y-3 overflow-auto">
        {navItems.map((item) => (
          <li key={item.path}>
            <Link
              to={item.path}
              className="block rounded-lg px-4 py-3 text-gray-700 font-semibold hover:bg-blue-100 hover:text-blue-700 transition"
              activeclassname="bg-blue-200 text-blue-800" // For React Router v6, use NavLink instead of Link to handle active class
            >
              {item.label}
            </Link>
          </li>
        ))}
      </ul>

      {/* Logout Button */}
      <div className="px-6 pb-6">
        <button
          onClick={handleLogout}
          className="w-full bg-red-600 cursor-pointer hover:bg-red-700 text-white py-2 rounded-md shadow-md font-semibold transition"
        >
          Logout
        </button>
      </div>
    </nav>
  );
};

export default Navigationbar;
