import Navbar from "../../../../shared/NavigationBar/Navigationbar"

export default function AccountsDashboard() {
  return (
    <div className="flex item-center  bg-gradient-to-r from-blue-200 to-blue-300 min-h-screen">
      <Navbar />
      <div className="flex flex-col items-center justify-center h-screen">
        <h1 className="text-4xl font-bold mb-4">Accounts Dashboard</h1>
        <p className="text-lg">Welcome to the Admin Dashboard!</p>
      </div>
    </div>
  );
}