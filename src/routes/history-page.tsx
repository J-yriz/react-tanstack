import { createFileRoute } from '@tanstack/react-router'
import Search from '@/components/calendar/Search';
import History from '@/components/historypage/MonthHistory';

export const Route = createFileRoute('/history-page')({
  component: RouteComponent,
})

function RouteComponent() {
  return (
        <main id="HistoryPage" className="">
         <h1 className='mx-auto max-w-md mt-5 text-xl'><b>History</b></h1>
         <div className='mx-auto max-w-md mt-5'> <Search/></div>
         <div className='mx-auto max-w-md mt-5'> <History/></div>
    </main>
)
}
