interface IQuickCardProps {
  isCompact: boolean
  setModalOpen: (isOpen: 'settings' | 'add' | null) => void
}

interface ITransactionHistoryProps {
  transactionsByDay: { date: string; transactions: any[] }[]
  setModalOpen: (isOpen: 'settings' | 'add' | null) => void
}

interface IModalSettingsProps {
  isClosing: boolean
  handleCloseModal: () => void
}

interface IModalAddTransactionProps extends IModalSettingsProps {
    
}