import { createFileRoute } from '@tanstack/react-router'
import SearchChart from '@/components/chart/SearchChart';
import TransactionCard from '@/components/chart/TransactionCard';
import ExpenseDonutChart from '@/components/chart/ExpenseDonutChart';
import NotesChart from '@/components/chart/NotesChart';


export const Route = createFileRoute('/chart-page')({
  component: RouteComponent,
})

function RouteComponent() {
  const transactionsByDay = [
    {
        date: "Sun 5th ~ Sun 12th", 
        transactions: [
            { type: "Health", desc: "description", time: "20:00", price: "IDR 18.000", icon: "🏥" },
            { type: "Food", desc: "description", time: "20:00", price: "IDR 18.000", icon: "🍔" },
            { type: "Food", desc: "description", time: "20:00", price: "IDR 18.000", icon: "🍔" },
            { type: "Transport", desc: "description", time: "20:00", price: "IDR 18.000", icon: "🚌" },
            { type: "Food", desc: "description", time: "20:00", price: "IDR 18.000", icon: "🍔" },
            { type: "Transport", desc: "description", time: "20:00", price: "IDR 18.000", icon: "🚌" },
        ]
    },
    {
        date: "Mon 6th ~ Mon 13th", 
        transactions: [
            { type: "Health", desc: "description", time: "20:00", price: "IDR 18.000", icon: "🏥" },
            { type: "Food", desc: "description", time: "20:00", price: "IDR 18.000", icon: "🍔" },
            { type: "Food", desc: "description", time: "20:00", price: "IDR 18.000", icon: "🍔" },
            { type: "Transport", desc: "description", time: "20:00", price: "IDR 18.000", icon: "🚌" },
            { type: "Food", desc: "description", time: "20:00", price: "IDR 18.000", icon: "🍔" },
            { type: "Transport", desc: "description", time: "20:00", price: "IDR 18.000", icon: "🚌" },
        ]
    }
  ];

  return (
    <main id='ChartPage' className='p-6 bg-white min-h-screen pb-24'>
       <h1 className='mx-auto max-w-md mt-5 text-xl'><b>Chart</b></h1>
       <h1 className='mx-auto max-w-md text-ms mt-2'>spent money allocation</h1>
        <div className='mx-auto max-w-md mt-5'> <SearchChart/></div>

      <div className="mb-8">
           <ExpenseDonutChart />
           <NotesChart/>
        </div>

        <h2 className="font-bold text-lg mb-4 mt-8">Each Day Comparison</h2>
        <div className="flex flex-col gap-8">
            {transactionsByDay.map((group, groupIndex) => (
                <div key={groupIndex}>
                    <p className="text-gray-500 text-sm mb-4">{group.date}</p>
                    <div className="grid grid-cols-2 gap-4">
                        {group.transactions.map((trans, index) => (
                            <TransactionCard 
                                key={index}
                                type={trans.type}
                                description={trans.desc}
                                time={trans.time}
                                price={trans.price}
                                icon={trans.icon}
                                variant={index % 2 === 0 ? 'blue' : 'yellow'}
                            />
                        ))}
                    </div>
                </div>
            ))}
        </div>
    </main>
  )
}
