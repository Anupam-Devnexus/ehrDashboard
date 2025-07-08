import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';

// Dashboards
import Admin from "./Pages/Dashboard/Admin/pages/AdminDashboard";
import HR from "./Pages/Dashboard/HR/pages/HRDashboard";
import Subadmin from "./Pages/Dashboard/Subadmin/pages/SubadminDashboard";
import Accounts from "./Pages/Dashboard/Accounts/pages/AccountsDashboard";
import Employee from "./Pages/Dashboard/Employee/pages/EmployeeDashboard";

// Auth
import Login from "./Pages/auth/Login";

// ProtectedRoute
import ProtectedRoute from './shared/ProtectedRoutes/ProtectedRoute';

function App() {
  return (
    <Router>
      <Routes>
        {/* Public Route */}
        <Route path="/" element={<Login />} />

        {/* Admin Route */}
        <Route element={<ProtectedRoute allowedRole="admin" />}>
          <Route path="/dashboard/admin" element={<Admin />} />
        </Route>

        {/* HR Route */}
        <Route element={<ProtectedRoute allowedRole="hr" />}>
          <Route path="/dashboard/hr" element={<HR />} />
        </Route>

        {/* Subadmin Route */}
        <Route element={<ProtectedRoute allowedRole="subadmin" />}>
          <Route path="/dashboard/subadmin" element={<Subadmin />} />
        </Route>

        {/* Accounts Route */}
        <Route element={<ProtectedRoute allowedRole="accounts" />}>
          <Route path="/dashboard/accounts" element={<Accounts />} />
        </Route>

        {/* Employee Route */}
        <Route element={<ProtectedRoute allowedRole="employee" />}>
          <Route path="/dashboard/employee" element={<Employee />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
