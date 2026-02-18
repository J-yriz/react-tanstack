import {
  Bar,
  BarChart,
  CartesianGrid,
  ResponsiveContainer,
  Tooltip,
  XAxis,
} from 'recharts'

const NotesChart = () => {
  const categories = [
    { color: 'bg-[#FF9F9F]', label: 'Health and Medicine' },
    { color: 'bg-[#FFFFAF]', label: 'Assignment' },
    { color: 'bg-[#FF9FD2]', label: 'Food and Beverages' },
    { color: 'bg-[#BC9FFF]', label: 'Transportation' },
    { color: 'bg-[#9EF7FF]', label: 'Shopping' },
    { color: 'bg-[#537FF1]', label: 'Home and Stuff' },
  ]

  // Struktur data: 1 Hari punya 2 nilai (thisWeek & lastWeek)
  const weeklyData = [
    { name: 'Sun', thisWeek: 4000, lastWeek: 2400 },
    { name: 'Mon', thisWeek: 3000, lastWeek: 1398 },
    { name: 'Tue', thisWeek: 2000, lastWeek: 9800 },
    { name: 'Wed', thisWeek: 2780, lastWeek: 3908 },
    { name: 'Thu', thisWeek: 1890, lastWeek: 4800 },
    { name: 'Fri', thisWeek: 2390, lastWeek: 3800 },
    { name: 'Sat', thisWeek: 3490, lastWeek: 4300 },
  ]

  return (
    //     { NAMA_ARRAY.map((ISI_DATA, NOMOR_URUT) => (
    //     <TAG_HTML key={NOMOR_URUT}>
    //        {ISI_DATA}
    //     </TAG_HTML>
    // )) }
    <div className="flex flex-col mt-4 gap-y-2">
      <div className="flex flex-col mt-4 gap-y-2">
        {categories.map((item, index) => (
          <div key={index} className="flex flex-row items-center">
            <div className={`w-5 h-5 ${item.color} outline`}></div>
            <p className="pl-2">{item.label}</p>
          </div>
        ))}
      </div>

      {/* bar chart */}
      <div className="bg-[#FFFFAF] border-2 rounded-lg flex flex-col justify-between items-stretch transition-all duration-300 p-3 gap-y-12 mt-5">
        <div className="h-64 w-full">
            <ResponsiveContainer width="100%" height="100%">
                <BarChart data={weeklyData}>
                    {/* Garis Grid (dibuat putus-putus) */}
                    <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#a0a0a0" />
                    
                    {/* Sumbu X (Hari) */}
                    <XAxis dataKey="name" tick={{fill: 'black'}} axisLine={false} tickLine={false} />
                    
                    {/* Tooltip saat di-hover */}
                    <Tooltip cursor={{fill: 'transparent'}} />

                    {/* BATANG 1: This Week (Biru) */}
                    <Bar 
                        dataKey="thisWeek" 
                        fill="#537FF1" 
                        stroke="#000000" 
                        strokeWidth={1.5} 
                    />

                    {/* BATANG 2: Last Week (Orange) */}
                    <Bar 
                        dataKey="lastWeek" 
                        fill="#FFAE4C" 
                        stroke="#000000" 
                        strokeWidth={1.5} 
                    />
                </BarChart>
            </ResponsiveContainer>
        </div>
      </div>

      <div className="flex justify-center gap-5">
        <div className="flex">
          <div className="w-5 h-5 bg-[#537FF1] outline"></div>
          <p className="pl-2 ">This Week</p>
        </div>
        <div className="flex">
          <div className="w-5 h-5 bg-[#FFAE4C] outline"></div>
          <p className="pl-2 ">Last Week</p>
        </div>
      </div>
    </div>
  )
}

export default NotesChart
