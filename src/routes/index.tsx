import ModalAddTransaction from '@/components/home/ModalAddTransaction'
import ModalSettings from '@/components/home/ModalSettings'
import QuickCard from '@/components/home/QuickCard'
import TransactionsHistory from '@/components/home/TransactionsHistory'
import getRandomColor from '@/utility/function/getRandomColor'
import { createFileRoute } from '@tanstack/react-router'
import { useEffect, useMemo, useState } from 'react'

const COMPACT_ENTER_Y = 72
const COMPACT_EXIT_Y = 28

export const Route = createFileRoute('/')({
  component: ReactComponent,
})

function ReactComponent() {
  const [isCompact, setIsCompact] = useState<boolean>(false)

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
    let ticking = false
    const update = () => {
      const y = window.scrollY
      setIsCompact((prev) => {
        if (y > COMPACT_ENTER_Y) return true
        if (y < COMPACT_EXIT_Y) return false
        return prev
      })
      ticking = false
    }
    const onScroll = () => {
      if (!ticking) {
        ticking = true
        requestAnimationFrame(update)
      }
    }
    update()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
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
    <main id='main-page' className='p-6 relative'>
      <p className='text-xl sm:text-2xl md:text-3xl font-bold'>Dashboard</p>

      {/* Quick Information and Add Transaction */}
      <QuickCard isCompact={isCompact} setModalOpen={setModalOpen} />

      {/* Transactions History */}
      <div className='mt-8'>
        <TransactionsHistory transactionsByDay={transactionsByDay} setModalOpen={setModalOpen} />
      </div>

      <div
        className={`fixed inset-0 z-20 flex items-center justify-center bg-black/60 backdrop-blur-[2px] transition-opacity duration-300 ease-out
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