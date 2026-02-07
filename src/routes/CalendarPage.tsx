import { createFileRoute } from '@tanstack/react-router'
import { useMemo, useState } from 'react'
import Search from '@/components/calendar/Search';
import Calendar from '@/components/calendar/Calendar';
import Notes from '@/components/calendar/Notes'
import getRandomColor from '@/utility/function/getRandomColor'
import ModalAddTransaction from '@/components/home/ModalAddTransaction'
import ModalSettings from '@/components/home/ModalSettings'
import TransactionsHistory from '@/components/home/TransactionsHistory'

export const Route = createFileRoute('/CalendarPage')({
  component: RouteComponent,
})

function RouteComponent() {
  const [modalOpen, setModalOpen] = useState<"settings" | "add" | null>(null)
  const [isClosing, setIsClosing] = useState<boolean>(false)

  const handleCloseModal = () => {
    setIsClosing(true)
    setTimeout(() => {
      setModalOpen(null)
      setIsClosing(false)
    }, 300)
  }

  const transactionsByDay = useMemo(
    () =>
      [
        {
          date: 'today',
          transactions: [
            { type: 'transportation', icon: '🚗', time: '08:00', price: 'IDR 18.000,00' },
            { type: 'food and beverages', icon: '🍔', time: '12:00', price: 'IDR 20.000,00' },
            { type: 'utilities', icon: '💡', time: '15:00', price: 'IDR 150.000,00' },
          ],
        },
        {
          date: 'yesterday',
          transactions: [
            { type: 'entertainment', icon: '🎬', time: '19:00', price: 'IDR 75.000,00' },
            { type: 'groceries', icon: '🛒', time: '10:00', price: 'IDR 200.000,00' },
            { type: 'entertainment', icon: '🎬', time: '19:00', price: 'IDR 75.000,00' },
            { type: 'groceries', icon: '🛒', time: '10:00', price: 'IDR 200.000,00' },
            { type: 'entertainment', icon: '🎬', time: '19:00', price: 'IDR 75.000,00' },
            { type: 'groceries', icon: '🛒', time: '10:00', price: 'IDR 200.000,00' },
          ],
        },
      ].map((items) => ({
        ...items,
        transactions: items.transactions.map((trans) => ({
          ...trans,
          color: getRandomColor(),
        })),
      })),
    [],
  )

  return (
        <main id='calendarpage' className='p-6 relative'>
             <h1 className='mx-auto max-w-md mt-5 text-xl'><b>Calendar</b></h1>
            <div className='mx-auto max-w-md mt-5'> <Search/></div>
             <div className='mt-6'>
               <Calendar/>
           </div>
       
            <div className='flex flex-col text-end mx-auto max-w-md mt-5'>
                    <p className='text-3xl'>
                        IDR 40.000,00
                    </p>
                    <p className='text-xs sm:text-base md:text-lg'>
                       October total spending money
                    </p>
            </div>
           <Notes/>

             <div className='mt-8'>
        <TransactionsHistory transactionsByDay={transactionsByDay} setModalOpen={setModalOpen} />
      </div>

      <div
        className={`fixed inset-0 z-10 flex items-center justify-center bg-black/60 backdrop-blur-[2px] transition-opacity duration-300 ease-out
          ${!modalOpen ? 'opacity-0 pointer-events-none' : 'opacity-100 pointer-events-auto'}`}
        onClick={handleCloseModal}
      >
        {modalOpen && (
          modalOpen === 'settings' ? (
            <ModalSettings isClosing={isClosing} handleCloseModal={handleCloseModal} />
          ) : (
            <ModalAddTransaction isClosing={isClosing} handleCloseModal={handleCloseModal} />
          )
        )}
      </div>
       
       
           </main>
    )
}
