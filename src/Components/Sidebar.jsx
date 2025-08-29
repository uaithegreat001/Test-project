import { Link } from 'react-router-dom';
import { LucideLayoutDashboard, LucideCalendarRange, LucideCreditCard, LucideArchive, LucideUser, LucideHelpCircle, LucideLogOut } from 'lucide-react';

function Sidebar() {
  return (
    <aside className="w-56 bg-gray-200   p-5">
      <nav className='mt-15'>
        <ul className="space-y-5">
          <li>
            <Link to="/dashboard" className="flex items-center gap-2 text-gray-700 hover:text-blue-600  text-sm font-medium transition-all duration-300 ease-in-out">
              <LucideLayoutDashboard strokeWidth={2.25} className="h-4 w-4 text-gray-700 hover:text-blue-600 font-medium transition-all duration-300 ease-in-out" /> Dashboard
            </Link>
          </li>
          <li>
            <Link to="/buy-bin" className="flex items-center gap-2 text-gray-700 hover:text-blue-600 text-sm font-medium transition-all duration-300 ease-in-out">
              <LucideArchive strokeWidth={2.25} className="h-4 w-4 text-gray-700 hover:text-blue-600 font-medium transition-all duration-300 ease-in-out" /> Buy bin
            </Link>
          </li>
          <li>
            <Link to="/request-schedule" className="flex items-center gap-2 text-gray-700 hover:text-blue-600 text-sm font-medium transition-all duration-300 ease-in-out">
              <LucideCalendarRange strokeWidth={2.25} className="h-4 w-4 text-gray-700 hover:text-blue-600 font-medium transition-all duration-300 ease-in-out" /> Request schedule
            </Link>
          </li>
          <li>
            <Link to="/payments" className="flex items-center gap-2 text-gray-700 hover:text-blue-600 text-sm font-medium transition-all duration-300 ease-in-out">
              <LucideCreditCard strokeWidth={2.25} className="h-4 w-4 text-gray-700 hover:text-blue-600 font-medium transition-all duration-300 ease-in-out" /> Payments
            </Link>
          </li>
          <li>
            <Link to="/profile" className="flex items-center gap-2 text-gray-700 hover:text-blue-600 text-sm font-medium transition-all duration-300 ease-in-out">
              <LucideUser strokeWidth={2.25} className="h-4 w-4 text-gray-700 hover:text-blue-600 font-medium transition-all duration-300 ease-in-out" /> Profile
            </Link>
          </li>
          <li>
            <Link to="/help" className="flex items-center gap-2 text-gray-700 hover:text-blue-600 text-sm font-medium transition-all duration-300 ease-in-out">
              <LucideHelpCircle strokeWidth={2.25} className="h-4 w-4 text-gray-700 hover:text-blue-600 font-medium transition-all duration-300 ease-in-out" /> Help
            </Link>
          </li>
          <li>
            <Link to="/logout" className="flex items-center gap-2 text-gray-700 hover:text-blue-600 text-sm font-medium transition-all duration-300 ease-in-out">
              <LucideLogOut strokeWidth={2.25} className="h-4 w-4 text-gray-700 hover:text-blue-600 font-medium transition-all duration-300 ease-in-out" /> Logout
            </Link>
          </li>
        </ul>
      </nav>
    </aside>
  );
}

export default Sidebar;