import React from "react";

const Sidebar = () => {
  return (
    <div className="w-64 h-full bg-blue-800 text-white">
      <div className="p-4 text-lg font-bold">App Name</div>
      <nav>
        <a href="#" className="block p-4 hover:bg-blue-600">
          Dashboard
        </a>
        <a href="#" className="block p-4 hover:bg-blue-600">
          Profile
        </a>
        <a href="#" className="block p-4 hover:bg-blue-600">
          Settings
        </a>
      </nav>
    </div>
  );
};

export default Sidebar;
