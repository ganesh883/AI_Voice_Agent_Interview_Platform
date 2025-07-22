import React from 'react'
import Image from "next/image";
import { cn } from "@/lib/utils";

enum CallStatus {
    INACTIVE = 'INACTIVE',
    CONNECTING = 'CONNECTING',
    ACTIVE = 'ACTIVE',
    FINISHED = 'FINISHED',
}

interface AgentProps {
    userName: string;
}

const Agent = ({ userName }: AgentProps) => {
    const callStatus = CallStatus.FINISHED;
    const isSpeaking = true;

    return (
        <>
            <div className="call-view w-full flex justify-center mt-4">
                <div className="card-interviewer">
                    <div className="avatar">
                        <Image src="/ai-avatar.png" alt="vapi" width={65} height={54} className="object-cover" />
                        {isSpeaking && <span className="animate-speak" />}
                    </div>
                    <h3>AI Interviewer</h3>
                </div>

                <div className="card-border">
                    <div className="card-content">
                        <Image src="/user-avatar.png" alt="user avatar" width={540} height={540} className="rounded-full object-cover size-[120px]" />
                        <h3>{userName}</h3>
                    </div>
                </div>
            </div>

            <div className="w-full flex justify-center mt-4">
                {callStatus !== CallStatus.ACTIVE ? (
                    <button className="relative btn-call px-4 py-2 text-sm rounded-full bg-green-500 text-white hover:bg-green-600">

                        <span
                            className={cn(
                                'absolute animate-ping rounded-full opacity-75',
                                callStatus !== CallStatus.CONNECTING && 'hidden'
                            )}
                        />
                        <span>
                            {callStatus === CallStatus.INACTIVE || callStatus === CallStatus.FINISHED ? 'Call' : '. . .'}
                        </span>
                    </button>
                ) : (
                    <button className="btn-disconnect">End</button>
                )}
            </div>
        </>
    );
};

export default Agent;
