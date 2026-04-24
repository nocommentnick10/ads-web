const WORKER_STATUS_MAP = {
  inTheLine: "В линии",
  break: "Перерыв",
  outOfLine: "Не в линии",
} as const

export type WORKER_STATUS_MAP_Type =
  (typeof WORKER_STATUS_MAP)[keyof typeof WORKER_STATUS_MAP]
export type WORKER_STATUS_MAP_Type_Key = keyof typeof WORKER_STATUS_MAP
const REVERSE_WORKER_STATUS_MAP = Object.fromEntries(
  Object.entries(WORKER_STATUS_MAP).map(([key, value]) => [value, key])
) as Record<WORKER_STATUS_MAP_Type, WORKER_STATUS_MAP_Type_Key>

export interface IWorkerCard {
  surname: string
  name: string
  patronymic: string

  avatar: string

  statusWorker: WORKER_STATUS_MAP_Type_Key
}
export { WORKER_STATUS_MAP, REVERSE_WORKER_STATUS_MAP }
