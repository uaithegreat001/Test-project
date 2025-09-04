import { LucideLayoutDashboard, LucideCalendarRange, LucideCreditCard, LucideArchive, LucideUser, LucideHelpCircle, LucideLogOut } from "lucide-react";

function Dashboard() {
  // Dynamic date formatting
  const today = new Date();
  const dayNames = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
  const day = dayNames[today.getDay()];
  const date = today.getDate();
  const year = today.getFullYear();

  return (
    <div className="p-5 ml-3 mt-15 max-w-lg mx-auto flex flex-col gap-4 md:max-w-2xl w-full items-start font-normal">
      <div className="flex flex-col gap-1">
  <h2 className="text-2xl md:text-3xl font-medium text-gray-900">Hello, user</h2>
        <div className="text-gray-500 text-base">Today is {day}, {date}, {year}</div>
      </div>
      {/* ...existing dashboard content... */}
      <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Cum corporis, magnam nisi quae distinctio dicta in ex, earum sapiente, repudiandae dolorem sit nesciunt. Magnam dolorum explicabo minima, ducimus error sed.</p>
    </div>
  );
}

export default Dashboard;
