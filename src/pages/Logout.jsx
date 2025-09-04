function Logout() {
  const handleLogout = () => {
    // Add logout logic here
    alert("You have been logged out.");
  };

  return (
    <div className="p-5 ml-3 mt-15 max-w-md mx-auto flex flex-col gap-6 w-full items-start font-normal">
      <h1 className="text-2xl md:text-3xl font-medium text-gray-900 w-full">Logout</h1>
      <p className="text-gray-600">Are you sure you want to logout?</p>
      <button onClick={handleLogout} className="bg-emerald-600 text-white px-6 py-2 rounded-lg font-semibold hover:bg-emerald-700 transition min-w-[120px]">Logout</button>
    </div>
  );
}

export default Logout;
