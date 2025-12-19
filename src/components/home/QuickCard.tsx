const QuickCard = ({ isCompact, setModalOpen }: IQuickCardProps) => {
    return (
        <div className={`flex flex-col mt-4 sticky top-0 z-10 transition-all duration-300 ${isCompact ? 'gap-y-1 bg-white/90 backdrop-blur-sm py-2' : 'gap-y-2'}`}>
            <div className={`bg-[#FFFFAF] border-2 rounded-lg flex flex-col justify-between items-stretch transition-all duration-300 ${isCompact ? 'p-2 gap-y-6 shadow-sm mt-4' : 'p-3 gap-y-12'}`}>
                <div className='flex flex-col self-start'>
                    <p className={isCompact ? 'text-lg sm:text-xl md:text-2xl' : 'text-[23px] sm:text-[27px] md:text-[31px]'}>
                        IDR 10.000.000
                    </p>
                    <p className={isCompact ? 'text-[10px] sm:text-sm md:text-base' : 'text-xs sm:text-base md:text-lg'}>
                        weekly total spent
                    </p>
                </div>
                <button className={`self-end transition-all duration-300 ${isCompact ? 'text-[10px] sm:text-sm md:text-base' : 'text-xs sm:text-base md:text-lg'}`}>
                    click to watch full report
                </button>
            </div>
            <button type='button' onClick={() => setModalOpen('add')} className={`bg-[#9EF7FF] border-2 rounded-lg transition-all duration-300 ${isCompact ? 'py-1.5 text-[11px] sm:text-sm md:text-base shadow-sm' : 'py-2.5 text-xs sm:text-base md:text-lg'}`}>
                add transaction
            </button>
        </div>
    )
}

export default QuickCard