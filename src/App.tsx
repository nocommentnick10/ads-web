import { WorkerCard } from "./ads-components/WorkerCard"

export function App() {
  return (
    <div className="flex h-screen w-full items-center justify-center">
      <WorkerCard
        avatar=""
        surname="Константинопольский"
        name="Константин"
        patronymic="Константинович"
        statusWorker="inTheLine"
      />
      <WorkerCard
        avatar=""
        surname="Константинопольский"
        name="Константин"
        patronymic="Константинович"
        statusWorker="outOfLine"
      />
      <WorkerCard
        avatar=""
        surname="Константинопольский"
        name="Константин"
        patronymic="Константинович"
        statusWorker="break"
      />
    </div>
  )
}

export default App
