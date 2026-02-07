import CompactQuickCard from '@/components/home/CompactQuickCard'
import ModalAddTransaction from '@/components/home/ModalAddTransaction'
import ModalSettings from '@/components/home/ModalSettings'
import QuickCard from '@/components/home/QuickCard'
import TransactionsHistory from '@/components/home/TransactionsHistory'
import getRandomColor from '@/utility/function/getRandomColor'
import { createFileRoute } from '@tanstack/react-router'
import { useEffect, useMemo, useState } from 'react'

const SCROLL_Y = 250;

export const Route = createFileRoute('/')({
  component: ReactComponent,
})

function ReactComponent() {
  const [compactQuickCard, setCompactQuickCard] = useState<boolean>(false)

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

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > SCROLL_Y) {
        setCompactQuickCard(true)
      } else {
        setCompactQuickCard(false)
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    if (modalOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'auto'
    }

    return () => {
      document.body.style.overflow = 'auto'
    }
  }, [modalOpen])

  return (
    <main id='main-page' className='p-6 relative pb-24'>
      <div className="max-w-3xl mx-auto w-full">
        <p className='text-xl sm:text-2xl md:text-3xl font-bold'>Dashboard</p>

        {/* Quick Information and Add Transaction */}
        <QuickCard setModalOpen={setModalOpen} />

        {/* Compact QuickCard */}
        <CompactQuickCard compactQuickCard={compactQuickCard} setModalOpen={setModalOpen} />

        {/* Transactions History */}
        <div className='mt-8'>
          <TransactionsHistory transactionsByDay={transactionsByDay} setModalOpen={setModalOpen} />
        </div>
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