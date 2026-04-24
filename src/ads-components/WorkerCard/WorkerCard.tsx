import { useState } from "react"
import {
  WORKER_STATUS_MAP,
  type IWorkerCard,
  type WORKER_STATUS_MAP_Type_Key,
} from "./WorkerCard.type"
import {
  ArrowRight,
  CircleX,
  Clock4,
  Phone,
  SquareArrowRightExit,
  UserRound,
} from "lucide-react"

export const WorkerCard = ({
  surname,
  name,
  patronymic,
  avatar,
  statusWorker,
  ...props
}: IWorkerCard) => {
  const initialStatus = WORKER_STATUS_MAP[statusWorker]

  //TODO вставить все необходимые иконки, поменять иконку выхода и телефона и сделать конфигурацию svgr cli

  const [status, setStatus] = useState<string>(initialStatus)

  const btnTextStyles = `text-sm text-white font-semibold leading-[18px] tracking-normal cursor-pointer`

  //   const [timeInWork, setTimeInWork] = useState<>()

  const handleStatusChange = (newStatus: WORKER_STATUS_MAP_Type_Key): void => {
    //отправляем запрос на сервер для изменения статуса работника
    //if response successful => меняем статус в компоненте, иначе показываем ошибку
    setStatus(WORKER_STATUS_MAP[newStatus])
  }
  const statusColors = {
    [WORKER_STATUS_MAP["inTheLine"]]: "bg-[#319E4B]",
    [WORKER_STATUS_MAP["break"]]: "bg-[#F9A811]",
    [WORKER_STATUS_MAP["outOfLine"]]: "bg-[#ADADAD]",
  }

  return (
    <div className="flex-col justify-center rounded-2xl bg-[#EBEBEB] shadow-[0_0_15px_0_rgba(0,0,0,0.1)]">
      <div className="rounded-2xl bg-white p-4">
        {/* WORKER__INFO */}
        <div className="mb-8 flex items-center gap-4 font-semibold">
          {avatar !== null && avatar.length ? (
            <div>
              <img src={avatar} />
            </div>
          ) : (
            <div
              className={`max-w-min rounded-full border-2 border-[${statusColors[status]}] bg-white p-[13px]`}
            >
              {" "}
              <UserRound size={30} color="gray" />
            </div>
          )}

          <div className="flex-row gap-3">
            {/* INDICATION__USER__STATUS */}
            <div className="flex-col justify-items-start gap-3">
              <div>
                <div className="flex-row items-start">
                  <div className="flex gap-10">
                    <div className="flex-col gap-3">
                      <p>{surname}</p>
                      <div className="flex gap-2">
                        <span>{name}</span>
                        <span>{patronymic}</span>
                      </div>
                    </div>
                    <ArrowRight
                      onClick={() => console.log("d")}
                      className="cursor-pointer"
                    />
                  </div>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <div className="flex items-center gap-1 text-sm font-semibold uppercase">
                  <Phone size={24} color="#319E4B" />
                  <div>{status}</div>
                </div>
                {status === WORKER_STATUS_MAP["outOfLine"] ? null : (
                  <span className="uppercase">04:52</span>
                )}
              </div>
            </div>
          </div>
        </div>

        {/* USER_FUNCTIONS_DEPENDING_ON_THE_STATUS */}
        <div>
          {status === WORKER_STATUS_MAP["inTheLine"] ? (
            <div className="flex w-full items-center gap-3">
              <button
                type="button"
                className={`flex items-center gap-1 bg-[#F9A811] ${btnTextStyles} rounded-xl pt-2 pr-4 pb-2 pl-3`}
              >
                <Clock4 size={24} />
                <span>Перерыв</span>
              </button>
              <button
                type="button"
                className={`flex items-center bg-[#ADADAD] ${btnTextStyles} gap-1 rounded-xl pt-2 pr-4 pb-2 pl-3`}
              >
                <CircleX size={24} />
                <span className={`${btnTextStyles}`}>Закрыть смену</span>
              </button>
            </div>
          ) : (
            <button
              type="button"
              className={`flex w-full items-center justify-center gap-1 rounded-xl bg-[#319E4B] pt-3 pb-3 ${btnTextStyles} `}
            >
              {/* //TODO сделать вставить иконку телефона */}
              <span>В линию</span>
            </button>
          )}
        </div>
      </div>

      {/* LEAVE_THE_LINE */}
      <button
        type="button"
        className="flex w-full cursor-pointer items-center justify-center gap-1 rounded-2xl pt-4 pb-4 text-sm text-[#858585]"
      >
        {/* //TODO сделать другую иконку через svgr cli и вставить иконку */}
        <span>Выйти из профиля</span>
        <SquareArrowRightExit size={24} />
        {/* INSERT ICON LOG OUT */}
      </button>
    </div>
  )
}
