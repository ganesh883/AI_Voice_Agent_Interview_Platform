'use client';
import React, {useState} from 'react'
import Image from "next/image";
import { cn } from "@/lib/utils";
import {useRouter} from "next/navigation";

enum CallStatus {
    INACTIVE = 'INACTIVE',
    CONNECTING = 'CONNECTING',
    ACTIVE = 'ACTIVE',
    FINISHED = 'FINISHED',
}

interface AgentProps {
    userName: string;
}

interface SavedMessage{
    role: 'user' | 'system' | 'assistant';
    content: string;
}

const Agent = ({ userName, userId, type }: AgentProps) => {

    const router = useRouter();
    const [isSpeaking, setIsSpeaking] = useState(false);
    const [callStatus, setCallStatus] = useState<CallStatus>(CallStatus.INACTIVE);
    const [message, setMessage] = useState<SavedMessage[]>([]);

    const messages = [
      'Whats your name?',
      'My name is John Doe, nice to meet you!'
    ];
    const lastMessage = messages[messages.length - 1];

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

            {messages.length > 0 && (
                <div className="transcript-border mt-4">
                    <div className="transcript">
                        <p key={lastMessage} className={cn('transition-opacity duration-500 opacity-0', 'animate-fadeIn opacity-100')}>
                            {lastMessage}
                        </p>
                    </div>
                </div>
            )}


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
