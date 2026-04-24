import { WorkerCard } from "./ads-components/WorkerCard"

export function App() {
  return (
    <div className="flex h-screen w-full items-center justify-center">
      <WorkerCard
        statusWorker="break"
        name="Константин"
        avatar=""
        patronymic="Константинович"
        surname="Константинопольский"
      />
    </div>
  )
}

export default App
