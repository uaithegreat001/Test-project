import React from "react";

function AdminPanel() {
  return (
    <div className="flex min-h-screen bg-gray-50">
      {/* Sidebar */}
      <aside className="w-64 bg-white border-r flex flex-col py-8 px-4">
        <h2 className="text-2xl font-bold mb-8 text-emerald-700">Admin Panel</h2>
        <nav className="flex flex-col gap-4">
          <a href="#dashboard" className="text-gray-700 hover:text-emerald-700 font-medium">Dashboard</a>
          <a href="#users" className="text-gray-700 hover:text-emerald-700 font-medium">Users</a>
          <a href="#payments" className="text-gray-700 hover:text-emerald-700 font-medium">Payments</a>
          <a href="#settings" className="text-gray-700 hover:text-emerald-700 font-medium">Settings</a>
        </nav>
      </aside>
      {/* Main Content */}
      <main className="flex-1 p-8">
        {/* Dashboard Summary */}
        <section id="dashboard" className="mb-10">
          <h3 className="text-xl font-semibold mb-4">Dashboard Summary</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <div className="bg-white p-4 rounded shadow text-center">
              <div className="text-3xl font-bold text-emerald-700">120</div>
              <div className="text-gray-600">Total Users</div>
            </div>
            <div className="bg-white p-4 rounded shadow text-center">
              <div className="text-3xl font-bold text-emerald-700">₦50,000</div>
              <div className="text-gray-600">Total Payments</div>
            </div>
            <div className="bg-white p-4 rounded shadow text-center">
              <div className="text-3xl font-bold text-emerald-700">15</div>
              <div className="text-gray-600">Pending Requests</div>
            </div>
            <div className="bg-white p-4 rounded shadow text-center">
              <div className="text-3xl font-bold text-emerald-700">5</div>
              <div className="text-gray-600">Admins</div>
            </div>
          </div>
        </section>
        {/* Users Section */}
        <section id="users" className="mb-10">
          <h3 className="text-xl font-semibold mb-4">User Management</h3>
          <div className="bg-white rounded shadow p-4 overflow-x-auto">
            <table className="min-w-full">
              <thead>
                <tr>
                  <th className="px-4 py-2 text-left">Name</th>
                  <th className="px-4 py-2 text-left">Email</th>
                  <th className="px-4 py-2 text-left">Role</th>
                  <th className="px-4 py-2 text-left">Status</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="px-4 py-2">Jane Doe</td>
                  <td className="px-4 py-2">jane@example.com</td>
                  <td className="px-4 py-2">User</td>
                  <td className="px-4 py-2 text-emerald-700">Active</td>
                </tr>
                <tr>
                  <td className="px-4 py-2">John Smith</td>
                  <td className="px-4 py-2">john@example.com</td>
                  <td className="px-4 py-2">Admin</td>
                  <td className="px-4 py-2 text-emerald-700">Active</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>
        {/* Payments Section */}
        <section id="payments">
          <h3 className="text-xl font-semibold mb-4">Payment Management</h3>
          <div className="bg-white rounded shadow p-4 overflow-x-auto">
            <table className="min-w-full">
              <thead>
                <tr>
                  <th className="px-4 py-2 text-left">Date</th>
                  <th className="px-4 py-2 text-left">User</th>
                  <th className="px-4 py-2 text-left">Amount</th>
                  <th className="px-4 py-2 text-left">Status</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="px-4 py-2">2025-08-30</td>
                  <td className="px-4 py-2">Jane Doe</td>
                  <td className="px-4 py-2">₦10,000</td>
                  <td className="px-4 py-2 text-emerald-700">Successful</td>
                </tr>
                <tr>
                  <td className="px-4 py-2">2025-08-29</td>
                  <td className="px-4 py-2">John Smith</td>
                  <td className="px-4 py-2">₦5,000</td>
                  <td className="px-4 py-2 text-red-500">Failed</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>
      </main>
    </div>
  );
}

export default AdminPanel;
