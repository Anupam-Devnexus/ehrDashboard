import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

// Mock users for demo
const users = [
  { id: "Admin123", password: "345", role: "admin" },
  { id: "HR123", password: "hrpass", role: "hr" },
  { id: "Subadmin123", password: "456", role: "subadmin" },
  { id: "Accounts123", password: "accpass", role: "accounts" },
  { id: "Employee123", password: "emppass", role: "employee" },
  { id: "TourMgr123", password: "tour123", role: "tour-manager" },
  { id: "Recruit123", password: "hireme", role: "recruiter" },
  { id: "Guide123", password: "guidepass", role: "guide" },
  { id: "Driver123", password: "drive123", role: "driver" },
  { id: "Support123", password: "help123", role: "support" },
  { id: "Trainer123", password: "trainme", role: "trainer" },
];

export default function Login() {
  const navigate = useNavigate();
  const [credentials, setCredentials] = useState({ id: "", password: "" });
  const [error, setError] = useState("");

  const handleChange = (e) => {
    setCredentials({ ...credentials, [e.target.name]: e.target.value });
  };

  const handleLogin = (e) => {
    e.preventDefault();
    const user = users.find(
      (u) => u.id === credentials.id && u.password === credentials.password
    );

    if (user) {
      localStorage.setItem("role", user.role);
      localStorage.setItem("userID", user.id);
      navigate(`/dashboard/${user.role}`);
    } else {
      setError("Invalid ID or Password");
    }
  };

  return (
    <div className="min-h-screen w-full flex items-center justify-center bg-gradient-to-r from-sky-100 via-blue-100 to-blue-200 px-4">
      <div className="bg-white rounded-3xl shadow-xl w-full max-w-md overflow-hidden">
        <div className="bg-blue-600 py-6 px-8 text-white text-center">
          <h1 className="text-3xl font-bold tracking-wide">Fantastic Fare</h1>
          <p className="text-sm mt-1">Tour & Travel HRMS Dashboard</p>
        </div>

        <div className="p-8">
          {error && <p className="text-red-600 text-center mb-4">{error}</p>}

          <form onSubmit={handleLogin} className="space-y-5">
            <div>
              <label className="block text-gray-700 font-semibold mb-1">User ID</label>
              <input
                type="text"
                name="id"
                value={credentials.id}
                onChange={handleChange}
                className="w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
                placeholder="e.g. Admin123"
                required
              />
            </div>
            <div>
              <label className="block text-gray-700 font-semibold mb-1">Password</label>
              <input
                type="password"
                name="password"
                value={credentials.password}
                onChange={handleChange}
                className="w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
                placeholder="Enter your password"
                required
              />
            </div>

            <button
              type="submit"
              className="w-full bg-blue-600 hover:bg-blue-700 text-black font-medium py-2 rounded-md shadow-lg transition duration-300"
            >
              Login
            </button>
          </form>

          <div className="mt-6 text-xs text-gray-500 text-center">
            <p>Demo Credentials</p>
            <ul className="mt-1 space-y-1">
              <li>Admin: <strong>Admin123 / 345</strong></li>
              <li>HR: <strong>HR123 / hrpass</strong></li>
              <li>Employee: <strong>Employee123 / emppass</strong></li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
