const QuickCard = ({ setModalOpen }: IQuickCardProps) => {
  return (
    <div className='flex flex-col mt-4 gap-y-2'>
      <div className='bg-[#FFFFAF] border-2 rounded-lg flex flex-col justify-between items-stretch transition-all duration-300 p-3 gap-y-12'>
        <div className='flex flex-col self-start'>
          <p className='text-[23px] sm:text-[27px] md:text-[31px]'>
            IDR 10.000.000
          </p>
          <p className='text-xs sm:text-base md:text-lg'>
            weekly total spent
          </p>
        </div>
        <button className='self-end transition-all duration-300 text-xs sm:text-base md:text-lg'>
          click to watch full report
        </button>
      </div>
      <button type='button' onClick={() => setModalOpen('add')} className='bg-[#9EF7FF] border-2 rounded-lg transition-all duration-300 py-2.5 text-xs sm:text-base md:text-lg'>
        add transaction
      </button>
    </div>
  )
}

export default QuickCard