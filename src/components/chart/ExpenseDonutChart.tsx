import { Cell, Pie, PieChart, ResponsiveContainer } from 'recharts';

const data = [
  { name: 'Medicine', value: 400, color: '#FF928A' }, 
  { name: 'Assignment', value: 300, color: '#FFFFAF' }, 
  { name: 'Food', value: 300, color: '#FF9FD2' }, 
  { name: 'Transport', value: 200, color: '#BC9FFF' }, 
  { name: 'Shopping', value: 278, color: '#9EF7FF' }, 
  { name: 'Home', value: 189, color: '#537FF1' }, 
];

const ExpenseDonutChart = () => {
  return (
    <div className="h-64 w-full relative">
      <ResponsiveContainer width="100%" height="100%" >
        <PieChart>
          <Pie
            className='border'
            data={data}
            cx="50%"
            cy="50%"
            innerRadius={20} 
            outerRadius={100}
            paddingAngle={0}
            dataKey="value"
            stroke="#000000"
            strokeWidth={2}
          >
            {data.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={entry.color} />
            ))}
          </Pie>
        </PieChart>
      </ResponsiveContainer>
      {/* Teks Putih di tengah donut kalau mau */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
         <div className="bg-white rounded-full w-20 h-20 border"></div>
      </div>
    </div>
  );
};

export default ExpenseDonutChart;