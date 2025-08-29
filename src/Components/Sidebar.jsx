import { Link } from 'react-router-dom';
import { LucideLayoutDashboard, LucideCalendarRange, LucideCreditCard, LucideArchive, LucideUser, LucideHelpCircle, LucideLogOut } from 'lucide-react';

function Sidebar() {
  return (
    <aside className="w-56 bg-gray-100 p-5 min-h-screen">
      <nav>
        <ul className="space-y-5">
          <li>
            <Link to="/dashboard" className="flex items-center gap-2 text-gray-700 hover:text-blue-600 text-base">
              <LucideLayoutDashboard className="h-5 w-5 text-inherit" /> Dashboard
            </Link>
          </li>
          <li>
            <Link to="/buy-bin" className="flex items-center gap-2 text-gray-700 hover:text-blue-600 text-base">
              <LucideArchive className="h-5 w-5 text-inherit" /> Buy bin
            </Link>
          </li>
          <li>
            <Link to="/request-schedule" className="flex items-center gap-2 text-gray-700 hover:text-blue-600 text-base">
              <LucideCalendarRange className="h-5 w-5 text-inherit" /> Request schedule
            </Link>
          </li>
          <li>
            <Link to="/payments" className="flex items-center gap-2 text-gray-700 hover:text-blue-600 text-base">
              <LucideCreditCard className="h-5 w-5 text-inherit" /> Payments
            </Link>
          </li>
          <li>
            <Link to="/profile" className="flex items-center gap-2 text-gray-700 hover:text-blue-600 text-base">
              <LucideUser className="h-5 w-5 text-inherit" /> Profile
            </Link>
          </li>
          <li>
            <Link to="/help" className="flex items-center gap-2 text-gray-700 hover:text-blue-600 text-base">
              <LucideHelpCircle className="h-5 w-5 text-inherit" /> Help
            </Link>
          </li>
          <li>
            <Link to="/logout" className="flex items-center gap-2 text-gray-700 hover:text-blue-600 text-base">
              <LucideLogOut className="h-5 w-5 text-inherit" /> Logout
            </Link>
          </li>
        </ul>
      </nav>
    </aside>
  );
}

export default Sidebar;
