import { useState } from "react"
import {
  WORKER_STATUS_MAP,
  type IWorkerCard,
  type WORKER_STATUS_MAP_Type_Key,
} from "./WorkerCard.type"
import { ArrowRight, CircleX, Clock4, UserRound } from "lucide-react"
import { LogoutIcon } from "../ui/icons/Logout"
import { PhoneIcon } from "../ui/icons/Phone"
import { borderStyles, textColors } from "./styles"

const btnTextStyles = `text-sm text-white font-semibold leading-[18px] tracking-normal cursor-pointer`

export const WorkerCard: React.FC<IWorkerCard> = ({
  surname,
  name,
  patronymic,
  avatar,
  statusWorker,
}: IWorkerCard) => {
  const initialStatus = WORKER_STATUS_MAP[statusWorker]

  //TODO вставить все необходимые иконки, поменять иконку выхода и телефона и сделать конфигурацию svgr cli

  const [status, setStatus] = useState<string>(initialStatus)

  //   const [timeInWork, setTimeInWork] = useState<>()

  const handleStatusChange = (newStatus: WORKER_STATUS_MAP_Type_Key): void => {
    //отправляем запрос на сервер для изменения статуса работника
    //if response successful => меняем статус в компоненте, иначе показываем ошибку
    setStatus(WORKER_STATUS_MAP[newStatus])
  }

  return (
    <div className="flex-col justify-center rounded-2xl bg-[#EBEBEB] shadow-[0_0_15px_0_rgba(0,0,0,0.1)]">
      <div className="rounded-2xl bg-white p-4">
        {/* WORKER__INFO */}
        <div className="mb-8 flex items-center gap-4 font-semibold">
          <div className={borderStyles[status]}>
            {avatar !== null && avatar.length ? (
              <img
                src={avatar}
                className="h-14 w-14 self-center rounded-full object-cover"
              />
            ) : (
              <UserRound size={30} color="gray" />
            )}
          </div>

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
                  {status === WORKER_STATUS_MAP["inTheLine"] ? (
                    <PhoneIcon color="#319E4B" />
                  ) : status === WORKER_STATUS_MAP["break"] ? (
                    <Clock4 fill="#F9A811" stroke="white" />
                  ) : status === WORKER_STATUS_MAP["outOfLine"] ? (
                    <CircleX fill="#E61641" stroke="white" />
                  ) : null}

                  <span className={textColors[status]}>{status}</span>
                </div>
                {status === WORKER_STATUS_MAP["outOfLine"] ? null : (
                  <span className={`${textColors[status]} uppercase`}>
                    04:52
                  </span>
                )}
              </div>
            </div>
          </div>
        </div>

        {/* USER_FUNCTIONS_DEPENDING_ON_THE_STATUS */}

        {status === WORKER_STATUS_MAP["inTheLine"] ? (
          <div className="flex items-center justify-center gap-3 self-center">
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
              <span className={btnTextStyles}>Закрыть смену</span>
            </button>
          </div>
        ) : (
          <button
            type="button"
            className={`flex w-full items-center justify-center gap-1 rounded-xl bg-[#319E4B] pt-3 pb-3 ${btnTextStyles} `}
          >
            <PhoneIcon color="white" />
            <span>В линию</span>
          </button>
        )}
      </div>

      {/* LEAVE_THE_LINE */}
      <button
        type="button"
        className="flex w-full cursor-pointer items-center justify-center gap-1 rounded-2xl pt-4 pb-4 text-sm text-[#858585]"
      >
        {/* //TODO сделать другую иконку через svgr cli и вставить иконку */}
        <span>Выйти из профиля</span>
        <LogoutIcon size={24} color="gray" />

        {/* INSERT ICON LOG OUT */}
      </button>
    </div>
  )
}
