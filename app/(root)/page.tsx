import React from 'react'
import { Button } from "@/Components/ui/button"
import Link from "next/link"
import Image from "next/image"
import InterviewCard from "@/constants/InterviewCard";
import {getCurrentUser} from "@/lib/actions/auth.action";
import {getInterviewByUserId, getLatestInterviews} from "@/lib/actions/general.action";


const Page = async () => {

    const user = await getCurrentUser();

    const [userInterviews, latestInterviews] = await Promise.all([
        await getInterviewByUserId(user?.id!),
        await getLatestInterviews({userId: user?.id!})
    ]);

    const hasPastInterviews = userInterviews?.length > 0;
    const hasUpcomingInterviews = latestInterviews?.length > 0;

    return (
        <>

            <section className="card-cta flex flex-col lg:flex-row items-center justify-between gap-10 w-full max-w-7xl mx-auto px-4">
                <div className="flex flex-col gap-6 w-full lg:w-1/2">
                    <div className="flex flex-col gap-4 w-full">
                        <h2 className="text-3xl font-bold text-foreground">
                            Get Interview-Ready with AI-Powered Practice & Feedback
                        </h2>
                        <p className="text-lg text-muted-foreground">
                            Practice with real-world interview questions and receive immediate, actionable feedback.
                        </p>
                    </div>

                    <Button asChild className="btn-primary w-full">
                        <Link href="/interview" className="w-full text-center">
                            Start an Interview
                        </Link>
                    </Button>
                </div>


                <Image
                    src="/robot.png"
                    alt="robo-dude"
                    width={400}
                    height={400}
                    className="hidden lg:block"
                />
            </section>


            <section className="flex flex-col gap-6 mt-12 px-4 max-w-7xl mx-auto">
                <h2>Your Interviews</h2>

                <div className="interviews-section">
                    {
                        hasPastInterviews? (
                            userInterviews?.map((interview) => (
                                <InterviewCard {...interview} key={interview.id} />
                            ))) : (
                                <p>You haven&apos;t taken any interviews</p>
                        )}

                </div>
            </section>

            <section className="flex flex-col gap-6 mt-12">
                <h2>Take an Interview</h2>

                <div className="interviews-section">
                    {
                        hasUpcomingInterviews? (
                            latestInterviews?.map((interview) => (
                                <InterviewCard {...interview} key={interview.id} />
                            ))) : (
                            <p>There are no new interviews available</p>
                        )}
                </div>

            </section>
        </>
    )
}

export default Page
