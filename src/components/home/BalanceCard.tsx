interface BalanceCardProps {
  amount: string;         
  onClickReport: () => void; 
}

export default function BalanceCard({ amount, onClickReport }: BalanceCardProps){
    return (
        <div className='@container mx-auto flex max-w-sm justify-between gap-x-4 rounded-xl bg-yellow-100 outline font-sans'>
        <div className='self-start'>
          <div className='flex flex-col rounded mt-1 p-1 pl-3'>
              <div className="flex flex-row">
                <h1 className="pr-1">IDR</h1>
                <p className="font-bold">
                    {amount}
                </p>
              </div>
                <h1 className='whitespace-nowrap text-xs text-right'>Weekly total spent</h1>
          </div>
        </div>
          <div className='flex self-end pt-20 p-3'>
              <div>
                <button onClick={onClickReport} className="text-right hover:underline"></button>
                <h3 className='whitespace-nowrap text-xs text-right'>click to watch full report</h3>
              </div>
          </div>
       </div>

    );
};