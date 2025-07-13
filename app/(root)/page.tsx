import React from 'react'
import { Button } from "@/Components/ui/button"
import Link from "next/link"

const Page = () => {
    return (
        <section className="card-cta flex flex-col items-start gap-6 w-full max-w-3xl mx-auto px-4">
            {/* Text Section */}
            <div className="flex flex-col gap-4 w-full">
                <h2 className="text-3xl font-bold text-foreground">
                    Get Interview-Ready with AI-Powered Practice & Feedback
                </h2>
                <p className="text-lg text-muted-foreground">
                    Practice real interview questions and get instant feedback to improve.
                </p>
            </div>

            {/* CTA Button Full Width Below */}
            <Button asChild className="btn-primary w-full">
                <Link href="/interview" className="w-full text-center">
                    Start an Interview
                </Link>
            </Button>
        </section>
    )
}

export default Page
