import { Button } from '@/components/ui/button'

function App() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center gap-4 bg-background text-foreground">
      <h1 className="text-4xl font-bold tracking-tight">ReserveHub</h1>
      <p className="text-muted-foreground">
        Online booking for service businesses.
      </p>
      <div className="flex gap-2">
        <Button>Book now</Button>
        <Button variant="outline">For businesses</Button>
      </div>
    </main>
  )
}

export default App