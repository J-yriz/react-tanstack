import { createFileRoute } from '@tanstack/react-router'
import BalanceCard from '@/components/home/balancecard';

export const Route = createFileRoute('/DashBoard')({
  component: RouteComponent,
})

function RouteComponent() {
  return (
    <main id='dashboard' className='block md:hidden'>
      <h1 className='mx-auto max-w-sm mt-5'><b>Dashboard</b></h1>
          <BalanceCard
          amount="10.000,00" 
          onClickReport={() => alert("Open Report")}
          />
      <div className='@container mx-auto flex max-w-sm gap-x-4 rounded-xl bg-blue-100 outline p-3 mt-5'> 
        <a href="#" className="mx-auto text-center text-xs"><h1>add transaction</h1></a>
      </div>

        <h1 className='mx-auto max-w-sm mt-10'><b>Transaction History</b></h1>
        <h1 className='mx-auto max-w-sm text-xs'>transaction history of this week</h1>

      <div>
        
    </div>




    </main>
  );
};
