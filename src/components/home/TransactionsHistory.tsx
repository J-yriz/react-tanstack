import { Clock9, Settings } from "lucide-react"

const TransactionsHistory = ({ transactionsByDay, setModalOpen }: ITransactionHistoryProps) => {
    return (
        <>
            <p className='text-xl sm:text-2xl md:text-3xl font-bold'>Transactions History</p>
            <div className='flex flex-col gap-y-9 w-full'>
                {transactionsByDay.map((items) => (
                    <div key={items.date} className='flex flex-col gap-y-3'>
                        <div className='flex items-center gap-x-1.5'>
                            <Clock9 className='h-4 w-4 sm:h-5 sm:w-5 md:h-6 md:w-6' />
                            <p className='text-xs sm:text-base md:text-lg'>{items.date} transactions</p>
                        </div>
                        <div className='flex flex-col gap-y-5'>
                            {items.transactions.map((trans, index) => (
                                <div key={`${items.date}-${index}`} className='flex items-end justify-between'>
                                    <div className='flex items-center gap-x-3'>
                                        <div className='py-3.5 px-4 sm:py-4 sm:px-5 md:py-5 md:px-6 w-fit border rounded-lg' style={{ backgroundColor: trans.color }}>
                                            <p className='text-xl sm:text-2xl md:text-3xl'>{trans.icon}</p>
                                        </div>
                                        <div className='flex flex-col'>
                                            <p className='font-bold text-sm sm:text-base md:text-lg'>{trans.type.charAt(0).toUpperCase() + trans.type.slice(1)}</p>
                                            <p className='text-xs sm:text-base md:text-lg'>description</p>
                                            <div className='flex items-center gap-x-1'>
                                                <Clock9 className='h-3 w-3 sm:h-4 sm:w-4 md:h-5 md:w-5' />
                                                <p className='text-xs sm:text-base md:text-lg font-medium'>{trans.time}</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className='flex flex-col items-end gap-y-1.5'>
                                        <button type='button' onClick={() => setModalOpen('settings')} className='border bg-[#B7FF8E] p-1 rounded-lg text-[10px] sm:text-[14px] md:text-[18px]'>
                                            <Settings className='h-4 w-4 sm:h-5 sm:w-5 md:h-6 md:w-6' />
                                        </button>
                                        <p className='text-sm sm:text-base md:text-lg font-bold'>{trans.price}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </>
    )
}

export default TransactionsHistory