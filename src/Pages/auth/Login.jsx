import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const users = [
  { id: "Admin123", password: "345", role: "admin" },
  { id: "HR123", password: "hrpass", role: "hr" },
  { id: "Subadmin123", password: "456", role: "subadmin" },
  { id: "Accounts123", password: "accpass", role: "accounts" },
  { id: "Employee123", password: "emppass", role: "employee" },
];

export default function Login() {
  const navigate = useNavigate();
  const [credentials, setCredentials] = useState({ id: "", password: "" });
  const [error, setError] = useState("");

  const handleChange = (e) => {
    setCredentials({ ...credentials, [e.target.name]: e.target.value });
    if (error) setError("");
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
    <div className="min-h-screen bg-gradient-to-br from-blue-400 via-cyan-400 to-indigo-600 flex items-center justify-center px-6 py-12">
      <div className="max-w-md w-full bg-white rounded-3xl shadow-2xl overflow-hidden relative">
        {/* Accent bar on left */}
        <div className="absolute left-0 top-0 bottom-0 w-2 bg-gradient-to-b from-cyan-600 via-indigo-700 to-purple-700 rounded-l-3xl"></div>

        <div className="p-10">
          {/* Logo */}
          <div className="flex justify-center mb-8">
            <img
              src="/logo.webp"
              alt="Tour & Travel Logo"
              className="h-16 w-auto object-contain"
            />
          </div>

          {/* Heading */}
          <h1 className="text-3xl font-extrabold text-center text-indigo-700 mb-2 tracking-wide">
            Welcome Back
          </h1>
          <p className="text-center text-indigo-500 font-semibold mb-8">
            Tour & Travel HRMS Dashboard
          </p>

          {/* Error message */}
          {error && (
            <p className="mb-6 text-center text-red-600 font-semibold animate-pulse select-none">
              {error}
            </p>
          )}

          {/* Login form */}
          <form onSubmit={handleLogin} className="space-y-6">
            <div>
              <label
                htmlFor="id"
                className="block text-indigo-700 font-medium mb-2"
              >
                User ID
              </label>
              <input
                type="text"
                id="id"
                name="id"
                value={credentials.id}
                onChange={handleChange}
                placeholder="Enter your User ID"
                required
                className={`w-full px-4 py-3 rounded-xl border border-indigo-300 focus:border-indigo-600 focus:ring-2 focus:ring-indigo-400 transition outline-none text-indigo-900 ${
                  error ? "ring-2 ring-red-400" : ""
                }`}
              />
            </div>

            <div>
              <label
                htmlFor="password"
                className="block text-indigo-700 font-medium mb-2"
              >
                Password
              </label>
              <input
                type="password"
                id="password"
                name="password"
                value={credentials.password}
                onChange={handleChange}
                placeholder="Enter your password"
                required
                className={`w-full px-4 py-3 rounded-xl border border-indigo-300 focus:border-indigo-600 focus:ring-2 focus:ring-indigo-400 transition outline-none text-indigo-900 ${
                  error ? "ring-2 ring-red-400" : ""
                }`}
              />
            </div>

            <button
              type="submit"
              className="w-full py-3 rounded-xl bg-gradient-to-r from-cyan-500 to-indigo-600 text-white font-bold text-lg hover:from-cyan-600 hover:to-indigo-700 transition shadow-lg"
            >
              Login
            </button>
          </form>

          {/* Demo credentials */}
          <div className="mt-10 text-center text-indigo-700 text-sm">
            <p className="font-semibold mb-4">Demo Credentials</p>
            <ul className="space-y-1">
              <li>
                <span className="font-semibold">Admin:</span>{" "}
                <span className="font-mono bg-indigo-100 px-2 py-1 rounded text-indigo-800">
                  Admin123 / 345
                </span>
              </li>
              <li>
                <span className="font-semibold">HR:</span>{" "}
                <span className="font-mono bg-indigo-100 px-2 py-1 rounded text-indigo-800">
                  HR123 / hrpass
                </span>
              </li>
              <li>
                <span className="font-semibold">Employee:</span>{" "}
                <span className="font-mono bg-indigo-100 px-2 py-1 rounded text-indigo-800">
                  Employee123 / emppass
                </span>
              </li>
              <li>
                <span className="font-semibold">Subadmin:</span>{" "}
                <span className="font-mono bg-indigo-100 px-2 py-1 rounded text-indigo-800">
                  Subadmin123 / 456
                </span>
              </li>
              <li>
                <span className="font-semibold">Accounts:</span>{" "}
                <span className="font-mono bg-indigo-100 px-2 py-1 rounded text-indigo-800">
                  Accounts123 / accpass
                </span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
