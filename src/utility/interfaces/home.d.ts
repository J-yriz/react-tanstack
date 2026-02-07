interface IQuickCardProps {
  setModalOpen: (isOpen: 'settings' | 'add' | null) => void
}

interface ICompactQuickCardProps extends IQuickCardProps {
  compactQuickCard: boolean
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

interface NavItem {
  path: string;
  icon: (isActive: boolean) => TSX.Element; 
}