import { Outlet, createRootRoute } from '@tanstack/react-router'
import { TanStackRouterDevtoolsPanel } from '@tanstack/react-router-devtools'
import { TanStackDevtools } from '@tanstack/react-devtools'

import { NotFound } from '@/components/NotFound'
import BottomNav from '@/components/BottomNav'

export const Route = createRootRoute({
  component: () => (
    <>
      <Outlet />
      <BottomNav />
      <TanStackDevtools
        config={{
          position: 'bottom-right',
        }}
        plugins={[
          {
            name: 'Tanstack Router',
            render: <TanStackRouterDevtoolsPanel />,
          },
        ]}
      />
    </>
  ),
  notFoundComponent: () => <main id='not-found-page'><NotFound /></main>,
})
