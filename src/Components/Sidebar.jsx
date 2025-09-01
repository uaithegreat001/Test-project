import { Link } from 'react-router-dom';
import { Icon } from '@iconify/react';

function Sidebar() {
  return (
    <aside className="w-56 bg-gray-100 border-r min-h-screen border-gray-300 p-5">
      <nav className='mt-20'>
        <ul className="space-y-5">
          <li>
            <Link to="/dashboard" className="flex items-center gap-4 text-gray-700 hover:text-blue-600 text-base font-normal transition-all duration-300 ease-in-out active:bg-blue-100" >
              <Icon icon="hugeicons:dashboard-square-02" className="h-5 w-5 text-gray-700 hover:text-blue-600 transition-all duration-300 ease-in-out" style={{ strokeWidth: 3 }} /> Dashboard
            </Link>
          </li>
          <li>
            <Link to="/buy-bin" className="flex items-center gap-4 text-gray-700 hover:text-blue-600 text-base font-normal transition-all duration-300 ease-in-out">
              <Icon icon="hugeicons:waste" className="h-5 w-5 text-gray-700 hover:text-blue-600 transition-all duration-300 ease-in-out" style={{ strokeWidth: 3 }} /> Buy bin
            </Link>
          </li>
          <li>
            <Link to="/request-schedule" className="flex items-center gap-4 text-gray-700 hover:text-blue-600 text-base font-normal transition-all duration-300 ease-in-out">
              <Icon icon="hugeicons:calendar-03" className="h-5 w-5 text-gray-700 hover:text-blue-600 transition-all duration-300 ease-in-out" style={{ strokeWidth: 3}} /> Request schedule
            </Link>
          </li>
          <li>
            <Link to="/payments" className="flex items-center gap-4 text-gray-700 hover:text-blue-600 text-base font-normal transition-all duration-300 ease-in-out">
              <Icon icon="hugeicons:credit-card" className="h-5 w-5 text-gray-700 hover:text-blue-600 transition-all duration-300 ease-in-out" style={{ strokeWidth: 3 }} /> Payments
            </Link>
          </li>
          <li>
            <Link to="/profile" className="flex items-center gap-4 text-gray-700 hover:text-blue-600 text-base font-normal transition-all duration-300 ease-in-out">
              <Icon icon="hugeicons:user-circle" className="h-5 w-5 text-gray-700 hover:text-blue-600 transition-all duration-300 ease-in-out" style={{ strokeWidth: 3}} /> Profile
            </Link>
          </li>
          <li>
            <Link to="/help" className="flex items-center gap-4 text-gray-700 hover:text-blue-600 text-base font-normal transition-all duration-300 ease-in-out">
              <Icon icon="hugeicons:help-circle" className="h-5 w-5 text-gray-700 hover:text-blue-600 transition-all duration-300 ease-in-out" style={{ strokeWidth: 3 }} /> Help
            </Link>
          </li>
          <li>
            <Link to="/logout" className="flex items-center gap-4 text-gray-700 hover:text-blue-600 text-base font-normal transition-all duration-300 ease-in-out">
              <Icon icon="hugeicons:logout-05" className="h-5 w-5 text-gray-700 hover:text-blue-600 transition-all duration-300 ease-in-out" style={{ strokeWidth: 3 }} /> Logout
            </Link>
          </li>
        </ul>
      </nav>
    </aside>
  );
}

export default Sidebar;