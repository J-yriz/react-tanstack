import { useMemo, useState } from 'react'
import getRandomColor from '@/utility/function/getRandomColor'
import ModalAddTransaction from '@/components/home/ModalAddTransaction'
import ModalSettings from '@/components/home/ModalSettings'
import TransactionsMonthHistory from '@/components/historypage/TransactionsMonthHistory'

const MonthHistory = () => {
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
          date: 'October',
          years: '2025',
          transactions: [
            { type: 'transportation', icon: '🚗', time: '08:00', price: 'IDR 18.000,00' },
            { type: 'food and beverages', icon: '🍔', time: '12:00', price: 'IDR 20.000,00' },
            { type: 'utilities', icon: '💡', time: '15:00', price: 'IDR 150.000,00' },
          ],
        },
        {
          date: 'September',
          years: '2025',
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
        <div>
             <div className='mt-8'>
        <TransactionsMonthHistory transactionsByDay={transactionsByDay} setModalOpen={setModalOpen} />
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
        </div>
        
    )
}

export default MonthHistory