import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/')({
  component: App,
})

function App() {
  return (
    <main id='home-page'>
      <p>Halaman Utama</p>
    </main>
  )
}
