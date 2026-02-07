import { createFileRoute } from '@tanstack/react-router'
import { useMemo, useRef } from 'react'
import getRandomColor from '../utility/function/getRandomColor'
import PieChart, { type ChartData } from '../components/chart/PieChart'
import WeeklyBarChart from '../components/chart/WeeklyBarChart'

export const Route = createFileRoute('/chart')({
  component: RouteComponent,
})

function RouteComponent() {
  const colorCache = useRef<Record<string, string>>({})

  const chartData: ChartData[] = useMemo(() => {
    const categories = [
      { label: 'Health and Medicine', value: 20 },
      { label: 'Assignment', value: 48 },
      { label: 'Food and Beverages', value: 35 },
      { label: 'Transportation', value: 15 },
      { label: 'Shopping', value: 25 },
      { label: 'Home and Stuff', value: 10 },
    ]

    return categories.map(cat => {
      if (!colorCache.current[cat.label]) {
        colorCache.current[cat.label] = getRandomColor()
      }
      return {
        ...cat,
        color: colorCache.current[cat.label]
      }
    })
  }, [])

  return (
    <main
      id="chart-page"
      className="p-6 bg-[url(/bg-image.webp)] bg-cover bg-center bg-no-repeat min-h-screen pb-24"
    >
      <div className="max-w-3xl mx-auto w-full">
        <p className='text-xl sm:text-2xl md:text-3xl font-bold'>Chart</p>
        <p>spent money allocation</p>

        <div className="flex items-center gap-3 mb-8">
          <div className="relative flex-1">
            <input
              type="text"
              placeholder="search month"
              className="w-full border border-black rounded-xl px-4 py-2.5 bg-white focus:outline-none"
            />
          </div>
          <button className="bg-[#FFAE4C] px-6 py-2.5 rounded-xl border border-black font-medium text-black whitespace-nowrap hover:bg-[#ff9d2e] transition-colors">
            all time
          </button>
        </div>

        <div className="flex justify-center mb-10 h-64 sm:h-80 w-full">
          <PieChart data={chartData} />
        </div>

        <div className="space-y-3">
          {chartData.map((item) => (
            <div key={item.label} className="flex items-center gap-3">
              <div
                className="w-5 h-5 border border-black rounded-sm shrink-0"
                style={{ backgroundColor: item.color }}
              />
              <span className="text-gray-900 font-medium">{item.label}</span>
            </div>
          ))}
        </div>

        <WeeklyBarChart />
      </div>
    </main>
  )
}
