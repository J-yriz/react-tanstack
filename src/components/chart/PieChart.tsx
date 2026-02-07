import { PieChart as RechartsPieChart, Pie, Cell, ResponsiveContainer } from 'recharts'

export type ChartData = {
    label: string
    value: number
    color: string
}

type PieChartProps = {
    data: ChartData[]
}

const PieChart = ({ data }: PieChartProps) => {
    // Filter out zero values to avoid Recharts issues or ugly rendering
    const activeData = data.filter(d => d.value > 0)

    if (activeData.length === 0) {
        return <div className="w-full h-full rounded-full bg-gray-200" />
    }

    return (
        <ResponsiveContainer width="100%" height="100%">
            <RechartsPieChart>
                <Pie
                    data={activeData}
                    dataKey="value"
                    nameKey="label"
                    cx="50%"
                    cy="50%"
                    innerRadius="40%"
                    outerRadius="70%"
                    fill="#8884d8"
                    stroke="black"
                    strokeWidth={1}
                    startAngle={90}
                    endAngle={-270}
                    style={{ outline: 'none' }}
                >
                    {activeData.map((entry, index) => (
                        <Cell
                            key={`cell-${index}`}
                            fill={entry.color}
                            className="outline-none focus:outline-none"
                            style={{ outline: 'none' }}
                        />
                    ))}
                </Pie>
            </RechartsPieChart>
        </ResponsiveContainer>
    )
}

export default PieChart
