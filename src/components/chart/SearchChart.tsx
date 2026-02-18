import {  } from "lucide-react"
import { useState } from "react"

const SearchChart = () =>{

    return(
        <div className="flex flex-nowrap max-w-md gap-3">
            <div className="basis-xl outline mx-auto text-start text-ms rounded-xl p-3">Search Month</div>
            <div className="basis-xs outline mx-auto text-center text-ms rounded-xl p-3 bg-[#9EF7FF]">find</div>
            <div className="basis-xs outline mx-auto text-center text-ms rounded-xl p-3 bg-[#FFAE4C]">all time</div>
        </div>
    )
}

export default SearchChart