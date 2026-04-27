import { WorkerCard } from "./ads-components/WorkerCard"

export function App() {
  return (
    <div className="flex h-screen w-full flex-col items-center justify-center gap-10">
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
