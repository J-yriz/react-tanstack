import { Eye, EyeClosed } from "lucide-react"
import { useState } from "react";

const SignUp = ({ onClickSignUp }: ISignUpProps) => {
    const [showPassword, setShowPassword] = useState<boolean>(false);

    return (
        <form className="flex flex-col gap-y-2">
            <label className="w-full">
                <input type="email" className="w-full border rounded-lg p-2 bg-white text-black focus:outline-none placeholder:text-black" placeholder="Email" />
            </label>
            <label className="flex gap-x-2 w-full">
                <input
                    type={showPassword ? "text" : "password"}
                    className="w-full border rounded-lg p-2 bg-white text-black focus:outline-none placeholder:text-black"
                    placeholder="Password"
                />
                <button type="button" onClick={() => { setShowPassword(!showPassword) }} className="w-11 bg-[#FFAE4C] rounded-lg border flex items-center justify-center cursor-pointer">
                    {showPassword ? <Eye /> : <EyeClosed />}
                </button>
            </label>
            <label className="text-xs sm:text-base md:text-lg text-center w-full">
                <p>already have an account? <span><button type="button" onClick={onClickSignUp} className="font-bold underline">Sign In here</button></span></p>
            </label>
            <button className="bg-[#9EF7FF] py-2 w-full border-2 rounded-lg font-light mt-3">Sign Up</button>
        </form>
    )
}

export default SignUp