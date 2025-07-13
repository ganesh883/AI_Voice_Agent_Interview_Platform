import React from 'react'
import dayjs from 'dayjs'
import { getRandomInterviewCover } from "@/public/utils"
import Image from "next/image"

const InterviewCard = ({
                           interviewId,
                           userId,
                           role,
                           type,
                           techstack,
                           createdAt,
                       }: InterviewCardProps) => {
    const feedback = null as Feedback | null
    const normalizedType = /mix/gi.test(type) ? 'Mixed' : type
    const formattedDate = dayjs(feedback?.createdAt || createdAt || Date.now()).format('MMM D, YYYY')

    return (
        <div className="card-border w-full max-w-md min-h-96">
            <div className="card-interview w-full h-full flex flex-col justify-between">

                <div className="w-full bg-dark-300 px-6 py-4  rounded-3xl rounded-b-2xl relative">
                    <div className="absolute top-0 right-0 px-4 py-2 rounded-bl-lg bg-light-600">
                        <p className="badge-text">{normalizedType}</p>
                    </div>

                    <div className="flex items-center gap-4">
                        <Image
                            src={getRandomInterviewCover()}
                            alt="coverimage"
                            width={90}
                            height={90}
                            className="rounded-full object-cover size-[90px]"
                        />
                        <h3 className="mt-5 capitalize text-xl font-semibold text-white break-words">
                            {role} Interview
                        </h3>
                    </div>
                </div>

                <div className="px-6 py-4 flex flex-col gap-3 text-light-100">
                    <div className="flex items-center gap-2">
                        <Image src="/calendar.svg" alt="calendar" width={22} height={22} />
                        <p>{formattedDate}</p>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default InterviewCard
