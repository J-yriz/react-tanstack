const CompactQuickCard = ({ compactQuickCard, setModalOpen }: ICompactQuickCardProps) => {
    return (
        <div className={`fixed top-0 left-0 right-0 z-10 p-6 transition-transform duration-500 ease-in-out pointer-events-none ${compactQuickCard ? 'translate-y-0' : '-translate-y-full'}`}>
            <div className='bg-[#FFFFAF] gap-y-3 border-2 rounded-lg flex flex-col justify-between p-3 max-w-3xl mx-auto w-full pointer-events-auto'>
                <div className='flex flex-col'>
                    <p className='text-lg sm:text-xl md:text-2xl'>
                        IDR 10.000.000
                    </p>
                    <div className='flex items-center justify-between'>
                        <p className='text-xs sm:text-base md:text-lg'>
                            weekly total spent
                        </p>
                        <button className='transition-all duration-300 text-xs sm:text-base md:text-lg'>
                            click to watch full report
                        </button>
                    </div>
                </div>
                <button type='button' onClick={() => setModalOpen('add')} className='bg-[#9EF7FF] border-2 rounded-lg transition-all duration-300 py-2.5 text-xs sm:text-base md:text-lg'>
                    add transaction
                </button>
            </div>
        </div>
    )
}

export default CompactQuickCard