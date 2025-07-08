import Navigationbar from "../../../../shared/NavigationBar/Navigationbar";


export default function HRDashboard() {
  return (
    <div className="flex item-center  bg-gradient-to-r from-blue-200 to-blue-300 min-h-screen">
      <Navigationbar />
      <div className="flex flex-col items-center justify-center h-screen">
        <h1 className="text-4xl font-bold mb-4">Hr Dashboard</h1>
        <p className="text-lg">Welcome to the Hr Dashboard!</p>
      </div>
    </div>
  );
}