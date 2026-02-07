import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/TabBar')({
  component: RouteComponent,
})

function RouteComponent() {
  return <div>Hello "/tabbar"!</div>
}
