import { useState } from "react";
import {
  eachDayOfInterval,
  endOfMonth,
  endOfWeek,
  format,
  isSameMonth,
  startOfMonth,
  startOfWeek,
} from 'date-fns';

const Calendar = () => {
    const [currentDate] = useState(new Date(2024, 9, 1));

    const monthStart = startOfMonth(currentDate);
    const monthEnd = endOfMonth(monthStart);
    const startDate = startOfWeek(monthStart);
    const endDate = endOfWeek(monthEnd);

    const calendarDays = eachDayOfInterval({
    start: startDate,
    end: endDate,
  });

  const getStatusColor = (day: Date) => {
    const dateNum = day.getDate();
    if ([30, 31].includes(dateNum)) return 'bg-[#00000059]'; 
    if ([4, 5, 16, 22].includes(dateNum)) return 'bg-[#FF9F9F]';
    if ([3, 8, 13, 14, 15, 19, 24, 25, 26].includes(dateNum)) return 'bg-[#FFFFAF]'; 
    
    return 'bg-[#B7FF8E]'; // Default Hijau 
  };

  const hatchedPattern = {
    backgroundImage: `repeating-linear-gradient(
      45deg,
      #ccc,
      #ccc 5px,
      transparent 2px,
      transparent 8px
    ), repeating-linear-gradient(
      -45deg,
      #ccc,
      #ccc 5px,
      transparent 2px,
      transparent 8px
    )`
  };

    return(
    <div className="w-full max-w-md mx-auto text-black">
    
      <div className="mb-4">
        <h1 className="text-xl font-bold">October</h1>
        <p className="text-sm">October 2025</p>
        <p className="text-right text-sm mt-2">Click to watch the report each day</p>
      </div>

      <div className="border-2 border-black">
        
        <div className="grid grid-cols-7">
          {calendarDays.map((day) => {
            const isCurrentMonth = isSameMonth(day, monthStart);
            
            const cellStyle = "h-16 border border-black p-2 flex items-end justify-end text-sm font-medium transition-colors cursor-pointer hover:opacity-80";
            let bgClass = "";
            let customStyle = {};

            if (!isCurrentMonth) {
              customStyle = hatchedPattern;
              bgClass = "bg-white"; 
            } else {
              bgClass = getStatusColor(day);
            }

            return (
              <div 
                key={day.toString()} 
                className={`${cellStyle} ${bgClass}`}
                style={customStyle}
                onClick={() => alert(`Clicked: ${format(day, 'dd MMMM yyyy')}`)}
              >
                {isCurrentMonth ? format(day, 'd') : ''}
              </div>
            );
          })}
        </div>

      </div>
        <div className="grid grid-cols-7 border-t border-black bg-white">
          {['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'].map((day) => (
            <div key={day} className="text-center py-4 text-black text-sm">
              {day}
            </div>
          ))}
        </div>

      <div className="w-full h-0.5 bg-black mt-1"></div>

    </div>
    )
}

export default Calendar