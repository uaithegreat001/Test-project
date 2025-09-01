import { Link, useLocation } from 'react-router-dom';
import { Icon } from '@iconify/react';

function Sidebar() {
  const location = useLocation(); // Get current path

  // A helper to check if the current route is active
  const linkClasses = (path) =>
    `flex items-center gap-4 text-base font-normal  px-2 py-2 rounded-md
    ${location.pathname === path 
      ? "bg-emerald-100 border border-emerald-300 text-emerald-700 font-semibold" 
      : "text-gray-700 hover:text-emerald-600"}`;

  const iconClasses = (path) =>
    `h-5 w-5 transition-all duration-300 ease-in-out
    ${location.pathname === path ? "text-emerald-500" : "text-gray-700"}`;

  return (
    <aside className="w-56 bg-gray-100 border-r min-h-screen border-gray-300 p-4">
      <nav className="mt-20">
        <ul className="space-y-3">
          <li>
            <Link to="/dashboard" className={linkClasses("/dashboard")}>
              <Icon icon="hugeicons:dashboard-square-02" className={iconClasses("/dashboard")} style={{ strokeWidth: 3 }} />
              Dashboard
            </Link>
          </li>

          <li>
            <Link to="/buy-bin" className={linkClasses("/buy-bin")}>
              <Icon icon="hugeicons:waste" className={iconClasses("/buy-bin")} style={{ strokeWidth: 3 }} />
              Buy bin
            </Link>
          </li>

          <li>
            <Link to="/request-schedule" className={linkClasses("/request-schedule")}>
              <Icon icon="hugeicons:calendar-03" className={iconClasses("/request-schedule")} style={{ strokeWidth: 3 }} />
              Request collection
            </Link>
          </li>

          <li>
            <Link to="/payments" className={linkClasses("/payments")}>
              <Icon icon="hugeicons:credit-card" className={iconClasses("/payments")} style={{ strokeWidth: 3 }} />
              Payments
            </Link>
          </li>

          <li>
            <Link to="/profile" className={linkClasses("/profile")}>
              <Icon icon="hugeicons:user-circle" className={iconClasses("/profile")} style={{ strokeWidth: 3 }} />
              Profile
            </Link>
          </li>

          <li>
            <Link to="/help" className={linkClasses("/help")}>
              <Icon icon="hugeicons:help-circle" className={iconClasses("/help")} style={{ strokeWidth: 3 }} />
              Help
            </Link>
          </li>

          <li>
            <Link to="/logout" className={linkClasses("/logout")}>
              <Icon icon="hugeicons:logout-05" className={iconClasses("/logout")} style={{ strokeWidth: 3 }} />
              Logout
            </Link>
          </li>
        </ul>
      </nav>
    </aside>
  );
}

export default Sidebar;
