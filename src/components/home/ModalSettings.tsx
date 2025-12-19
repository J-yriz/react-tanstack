import { Clock9, X } from "lucide-react"

const ModalSettings = ({ isClosing, handleCloseModal }: IModalSettingsProps) => {
    return (
        <div className='w-full px-6 flex justify-center pointer-events-none'>
            <div
                onClick={(e) => e.stopPropagation()}
                className={`flex flex-col gap-y-1 w-full max-w-lg items-stretch pointer-events-auto transition-all duration-300 ease-in-out
                ${isClosing && 'opacity-0 scale-95 translate-y-4'}
              `}
            >
                <button
                    type='button'
                    onClick={handleCloseModal}
                    className='self-end bg-[#FFAE4C] py-2 px-3.5 rounded-xl border-2 shadow-sm'
                >
                    <X strokeWidth={3} className='h-6 w-6 sm:h-7 sm:w-7 md:h-8 md:w-8' />
                </button>

                <div className='bg-[#9EF7FF] border-2 rounded-lg shadow-xl flex flex-col items-stretch'>
                    <div className='flex items-center gap-x-3 self-start m-3'>
                        <div className='py-3.5 px-4 sm:py-4 sm:px-5 md:py-5 md:px-6 w-fit border rounded-lg' style={{ backgroundColor: '#FFDDC1' }}>
                            <p className='text-xl sm:text-2xl md:text-3xl'>🍔</p>
                        </div>
                        <div className='flex flex-col'>
                            <p className='font-bold text-sm sm:text-base md:text-lg'>Transportaions</p>
                            <p className='text-xs sm:text-base md:text-lg'>description</p>
                            <div className='flex items-center gap-x-1'>
                                <Clock9 className='h-3 w-3 sm:h-4 sm:w-4 md:h-5 md:w-5' />
                                <p className='text-xs sm:text-base md:text-lg font-medium'>08:00</p>
                            </div>
                        </div>
                    </div>
                    <p className='text-sm sm:text-base md:text-lg font-bold self-end m-3'>IDR 10.000,00</p>

                    <div className='flex items-center gap-x-2 w-full mt-1 border-t-2 p-3'>
                        <button className='bg-[#FF9F9F] w-full py-2.5 rounded-lg border-2 text-xs sm:text-base md:text-lg'>Delete</button>
                        <button className='bg-[#B7FF8E] w-full py-2.5 rounded-lg border-2 text-xs sm:text-base md:text-lg'>Edit</button>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default ModalSettings