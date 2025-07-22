import React from 'react'
import AuthForm from "@/Components/AuthForm";

const Page = () => {
    return (
        <div className="flex items-center justify-center min-h-screen bg-background text-foreground">
            <AuthForm type="sign-in" />
        </div>
    );
}
export default Page
