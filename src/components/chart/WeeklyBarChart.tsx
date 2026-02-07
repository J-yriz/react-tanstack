import { BarChart, Bar, XAxis, CartesianGrid, ResponsiveContainer } from 'recharts'

const data = [
    { day: 'Sun', thisWeek: 50, lastWeek: 40 },
    { day: 'Mon', thisWeek: 50, lastWeek: 30 },
    { day: 'Tue', thisWeek: 60, lastWeek: 55 },
    { day: 'Wed', thisWeek: 35, lastWeek: 25 },
    { day: 'Thu', thisWeek: 50, lastWeek: 50 },
    { day: 'Fri', thisWeek: 40, lastWeek: 30 },
    { day: 'Sat', thisWeek: 65, lastWeek: 30 },
]

const WeeklyBarChart = () => {
    return (
        <div className="bg-[#FFFFAF] p-6 rounded-xl border border-black w-full mx-auto mt-10">
            <h2 className="text-xl font-bold">Weekly Chart</h2>
            <p className="text-sm text-gray-800 mb-6">compared spend this week and last week</p>

            <div className="h-64 w-full">
                <ResponsiveContainer width="100%" height="100%">
                    <BarChart
                        data={data}
                        barGap={0}
                        margin={{
                            top: 5,
                            right: 0,
                            left: 0,
                            bottom: 5,
                        }}
                    >
                        <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#00000033" />
                        <XAxis
                            dataKey="day"
                            axisLine={false}
                            tickLine={false}
                            tick={{ fill: '#000', fontSize: 12 }}
                            dy={10}
                        />
                        <Bar
                            dataKey="thisWeek"
                            fill="#5B8FF9"
                            stroke="black"
                            strokeWidth={1}
                            radius={[0, 0, 0, 0]}
                            isAnimationActive={true}
                        />
                        <Bar
                            dataKey="lastWeek"
                            fill="#FFAE4C"
                            stroke="black"
                            strokeWidth={1}
                            radius={[0, 0, 0, 0]}
                            isAnimationActive={true}
                        />
                    </BarChart>
                </ResponsiveContainer>
            </div>

            <div className="flex justify-center gap-6 mt-6">
                <div className="flex items-center gap-2">
                    <div className="w-4 h-4 bg-[#5B8FF9] border border-black rounded-sm" />
                    <span className="text-sm font-medium text-gray-800">This Week</span>
                </div>
                <div className="flex items-center gap-2">
                    <div className="w-4 h-4 bg-[#FFAE4C] border border-black rounded-sm" />
                    <span className="text-sm font-medium text-gray-800">Last Week</span>
                </div>
            </div>
        </div>
    )
}

export default WeeklyBarChart
