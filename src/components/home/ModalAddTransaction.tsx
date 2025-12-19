import { ChevronDown, X } from "lucide-react"
import { useState } from "react";

const ModalAddTransaction = ({ isClosing, handleCloseModal }: IModalAddTransactionProps) => {
    const [categoryDropdown, setCategoryDropdown] = useState<boolean>(false);
    const [selectedCategory, setSelectedCategory] = useState<string>('Category');

    const categories = [
        { value: 'transportation', label: 'Transportation', icon: '🚗' },
        { value: 'food', label: 'Food & Beverages', icon: '🍔' },
        { value: 'utilities', label: 'Utilities', icon: '💡' },
        { value: 'entertainment', label: 'Entertainment', icon: '🎬' },
        { value: 'groceries', label: 'Groceries', icon: '🛒' },
    ];

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

                <div className='bg-[#FFFFAF] border-2 rounded-lg shadow-xl flex flex-col items-stretch gap-y-4'>
                    <div className='flex flex-col items-start border-b-2 p-3'>
                        <p className='text-lg sm:text-xl md:text-2xl font-bold'>Add Transaction</p>
                        <p className='text-sm sm:text-base md:text-lg'>
                            {(() => {
                                const date = new Date()
                                const dayName = date.toLocaleDateString('en-US', { weekday: 'long' })
                                const day = date.getDate()
                                const suffix = (() => {
                                    if (day % 10 === 1 && day !== 11) return 'st'
                                    if (day % 10 === 2 && day !== 12) return 'nd'
                                    if (day % 10 === 3 && day !== 13) return 'rd'
                                    return 'th'
                                })()
                                const month = date.toLocaleDateString('id-ID', { month: 'long' })
                                const monthCapitalized = month.charAt(0).toUpperCase() + month.slice(1)
                                return `${dayName}, ${day}${suffix} ${monthCapitalized} ${date.getFullYear()}`
                            })()}
                        </p>
                    </div>
                    <form className='flex flex-col gap-y-3 px-3'>
                        <div className='flex items-center gap-x-1.5'>
                            <label className='relative'>
                                <button
                                    type='button'
                                    onClick={() => setCategoryDropdown(!categoryDropdown)}
                                    className='bg-[#9EF7FF] py-3 px-4 border rounded-lg flex items-center focus:outline-none'
                                >
                                    <p className='text-xs sm:text-base md:text-lg'>{selectedCategory.length > 8 ? selectedCategory.slice(0, 8) + '...' : selectedCategory}</p>
                                    <ChevronDown className={`h-4 w-4 sm:h-5 sm:w-5 md:h-6 md:w-6 ml-2 transition-transform duration-300 ${categoryDropdown ? 'rotate-180' : ''}`} />
                                </button>

                                <div
                                    className={`absolute top-full left-0 mt-1 w-48 bg-white border-2 rounded-lg shadow-lg overflow-hidden transition-all duration-300 ease-out z-10 ${categoryDropdown
                                        ? 'opacity-100 translate-y-0 max-h-96'
                                        : 'opacity-0 -translate-y-2 max-h-0 pointer-events-none'
                                        }`}
                                >
                                    <div className='flex flex-col'>
                                        {categories.map((category) => (
                                            <label
                                                key={category.value}
                                                className='flex items-center gap-x-3 p-3 hover:bg-[#9EF7FF]/30 cursor-pointer transition-colors'
                                                onClick={() => {
                                                    setSelectedCategory(category.label);
                                                    setCategoryDropdown(false);
                                                }}
                                            >
                                                <input
                                                    type='radio'
                                                    name='category'
                                                    value={category.value}
                                                    checked={selectedCategory === category.label}
                                                    onChange={() => { }}
                                                    className='w-4 h-4 cursor-pointer'
                                                />
                                                <span className='text-xl'>{category.icon}</span>
                                                <p className='text-sm sm:text-base'>{category.label}</p>
                                            </label>
                                        ))}
                                    </div>
                                </div>
                            </label>
                            <label className='flex-1'>
                                <input
                                    type="text"
                                    className='w-full border rounded-lg p-3 bg-white text-xs sm:text-base md:text-lg focus:outline-none placeholder:text-black placeholder:font-light'
                                    placeholder='Transaction Value'
                                />
                            </label>
                        </div>

                        <label className='flex flex-col'>
                            <p className='text-xs sm:text-base md:text-lg'>Transaction Description</p>
                            <textarea
                                className='w-full border rounded-lg p-3 bg-white text-xs sm:text-base md:text-lg focus:outline-none placeholder:text-black placeholder:font-light min-h-27.5 resize-none'
                                placeholder='Add description for this transaction'
                            />
                        </label>

                        <div className='flex flex-col'>
                            <p className='text-xs sm:text-base md:text-lg'>Transaction Date and Time</p>
                            <div className='flex items-center w-full gap-x-1.5'>
                                <label className='flex-1'>
                                    <input
                                        ref={(input) => {
                                            if (input) {
                                                input.style.colorScheme = 'light';
                                                input.onclick = () => {
                                                    input.showPicker?.();
                                                };
                                            }
                                        }}
                                        type="date"
                                        className='w-full border rounded-lg p-3 bg-white text-xs sm:text-base md:text-lg focus:outline-none placeholder:text-black placeholder:font-light cursor-pointer'
                                    />
                                </label>
                                <label className='flex-1'>
                                    <input
                                        ref={(input) => {
                                            if (input) {
                                                input.style.colorScheme = 'light';
                                                input.onclick = () => {
                                                    input.showPicker?.();
                                                };
                                            }
                                        }}
                                        type="time"
                                        className='w-full border rounded-lg p-3 bg-white text-xs sm:text-base md:text-lg focus:outline-none placeholder:text-black placeholder:font-light'
                                        placeholder='Transaction Time'
                                    />
                                </label>
                            </div>
                        </div>
                    </form>

                    <div className='flex items-center gap-x-2 w-full border-t-2 p-3'>
                        <button className='bg-[#B7FF8E] w-full py-2.5 rounded-lg border-2 text-xs sm:text-base md:text-lg'>Save</button>
                        <button className='bg-[#9EF7FF] w-full py-2.5 rounded-lg border-2 text-xs sm:text-base md:text-lg'>Save and exit</button>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default ModalAddTransaction