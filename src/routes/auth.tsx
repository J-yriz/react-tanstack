import SignIn from '@/components/auth/SignIn'
import SignUp from '@/components/auth/SignUp'
import { createFileRoute } from '@tanstack/react-router'
import { useState } from 'react'

export const Route = createFileRoute('/auth')({
  component: RouteComponent,
})

function RouteComponent() {
  const [authType, setAuthType] = useState<'sign-in' | 'sign-up' | null>(null)

  return (
    <main
      id="auth-page"
      className="bg-[url(/bg-image.webp)] bg-cover bg-center bg-no-repeat min-h-screen w-full flex flex-col justify-between items-stretch"
    >
      <p className="font-bold text-xl sm:text-2xl md:text-3xl m-5 self-end">JarTrack</p>
      {authType === null ? (
        <>
          <div className='self-center text-center w-72 sm:w-96'>
            <p className='font-bold text-xl sm:text-2xl md:text-3xl'>Welcome To JarTrack</p>
            <p className='text-[15px] sm:text-[19px] md:text-text-[23px]'>can u please do the authentifications first before you continue</p>
          </div>
          <div className='flex flex-col gap-y-3 items-center w-full px-8 pb-9'>
            <button onClick={() => setAuthType('sign-in')} className='bg-[#9EF7FF] py-2 w-full border-2 rounded-lg font-light'>Sign In</button>
            <button onClick={() => setAuthType('sign-up')} className='bg-[#FFAE4C] py-2 w-full border-2 rounded-lg font-light'>Sign Up</button>
          </div>
        </>
      ) : (
        <div className="flex flex-col px-8">

          {/* Title Box Auth */}
          <div className="flex flex-col">
            <p className="font-bold text-xl sm:text-2xl md:text-3xl">{authType === 'sign-in' ? 'Welcome Back' : 'Hello User'}</p>
            <p className="text-[15px] sm:text-[19px] md:text-[23px]">{authType === 'sign-in' ? 'Hallo, nice to meet you again' : 'you can make account to continue'}</p>
          </div>

          {/* Form Box Auth */}
          <div className="bg-[#FFFFAF] p-5 rounded-t-lg border-2 mt-6">
            {authType === 'sign-in' ? (
              <SignIn onClickSignIn={() => setAuthType('sign-up')} />
            ) : (
              <SignUp onClickSignUp={() => setAuthType('sign-in')} />
            )}
          </div>
        </div>
      )}
    </main>
  )
}