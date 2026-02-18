const Notes = () => {
  return (
        <div className='flex flex-col mt-4 gap-y-2'>
        <div className='bg-[#FFFFAF] border-2 rounded-lg flex flex-col justify-between items-stretch transition-all duration-300 p-3 gap-y-12'>
            <div className='flex flex-col self-start'>

            <div className="flex flex-row pb-2">
                <div className="w-8 h-8 bg-[#FF9F9F] outline rounded"></div>
                <p className="pl-2 py-1">Over Spending ~ More than 20.000</p>
            </div>
            <div className="flex flex-row pb-2">
                <div className="w-8 h-8 bg-[#FFFFAF] outline rounded"></div>
                <p className="pl-2 py-1">Normal Spending ~ In Range ( 16.000 - 20.000 )</p>
            </div>
            <div className="flex flex-row">
                <div className="w-8 h-8 bg-[#B7FF8E] outline rounded"></div>
                <p className="pl-2 py-1">Good Spending ~ Less Than 16.000</p>
            </div>
        </div>
      </div>
    
    </div>
  )
}

export default Notes