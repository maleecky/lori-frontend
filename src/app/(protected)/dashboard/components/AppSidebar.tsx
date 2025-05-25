const DashSidebarLayout = () => {
  return (
    <div>
      <div className="flex flex-col w-64 bg-gray-100 h-screen shadow-md">
        <div className="flex items-center justify-center h-16 bg-blue-500 text-white font-bold text-xl">
          Dashboard
        </div>
        <nav className="flex flex-col p-4 space-y-2">
          <a
            href="#"
            className="text-gray-700 hover:bg-blue-500 hover:text-white p-2 rounded"
          >
            Home
          </a>
          <a
            href="#"
            className="text-gray-700 hover:bg-blue-500 hover:text-white p-2 rounded"
          >
            Profile
          </a>
          <a
            href="#"
            className="text-gray-700 hover:bg-blue-500 hover:text-white p-2 rounded"
          >
            Settings
          </a>
          <a
            href="#"
            className="text-gray-700 hover:bg-blue-500 hover:text-white p-2 rounded"
          >
            Logout
          </a>
        </nav>
      </div>
    </div>
  );
};

export default DashSidebarLayout;
