import { Link, useLocation } from '@tanstack/react-router';
import { CalendarDays, ChartColumn , CircleUser, Clock, House } from 'lucide-react';

const BottomNav = () => {
    const location = useLocation(); 
    const currentPath = location.pathname;

   const navItems: Array<NavItem> = [
    {
      path: '/calendarpage',
      icon: (isActive) => (
        <CalendarDays className={`w-6 h-6 ${isActive ? 'text-blue-600' : 'text-black'}`}/>
      ),
    },
    {
      path: '/HistoryPage',
      icon: (isActive) => (
        <Clock  className={`w-6 h-6 ${isActive ? 'text-blue-600' : 'text-black'}`}/>
        ),
    },
    {
      path: '/',
      icon: (isActive) => (
        <House  className={`w-6 h-6 ${isActive ? 'text-blue-600' : 'text-black'}`}/>
      ),
    },
    {
      path: '/ChartPage',
      icon: (isActive) => (
        <ChartColumn  className={`w-6 h-6 ${isActive ? 'text-blue-600' : 'text-black'}`}/>
      ),
    },
    {
      path: '/index.tsx',
      icon: (isActive) => (
        <CircleUser  className={`w-6 h-6 ${isActive ? 'text-blue-600' : 'text-black'}`}/>
      ),
    },
  ]

  if (currentPath === '/login') return null; // agar tidak muncuk di login 
    return (
        <nav className='fixed bottom-8 left-6 right-6 bg-[#9EF7FF] py-2.5 rounded-lg outline'>
            <div className="flex justify-around items-center">
               {navItems.map((item) => {
                const isActive = currentPath === item.path;
                if (item.path === '/') {
                    return (
                    <Link
                        key={item.path}
                        to={item.path}
                        className="flex flex-col items-center justify-center w-full h-full space-y-1 active:scale-95 transition"
                    >
                        {item.icon(isActive)}
                    </Link>
                    );
                }
                return (
                    <Link
                        key={item.path}
                        to={item.path}
                        className="flex flex-col items-center justify-center w-full h-full space-y-1 active:scale-95 transition"
                        >
                        <div>{item.icon(isActive)}</div>
                    </Link>
                )
               })}
            </div>
        </nav>
    )
}

export default BottomNav