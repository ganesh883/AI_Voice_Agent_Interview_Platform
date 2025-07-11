"use client"

import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"

import {
    Form,
    FormControl,
    FormDescription,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"

const formSchema = z.object({
    email: z.string().email({ message: "Enter a valid email address" }),
    password: z.string().min(6, { message: "Password must be at least 6 characters" }),
})

const AuthForm = () => {
    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            email: "",
            password: "",
        },
    })

    function onSubmit(values: z.infer<typeof formSchema>) {
        console.log("Submitted:", values)
    }

    return (
        <div className="auth-layout">
            <div className="bg-card text-card-foreground rounded-xl p-8 shadow-md w-full max-w-md">
                <h2 className="text-2xl font-semibold mb-6 text-center">Welcome Back</h2>

                <Form {...form}>
                    <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6 form">
                        {/* Email */}
                        <FormField
                            control={form.control}
                            name="email"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel className="label">Email</FormLabel>
                                    <FormControl>
                                        <Input className="input" type="email" placeholder="you@example.com" {...field} />
                                    </FormControl>
                                    <FormDescription>We'll never share your email.</FormDescription>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />

                        {/* Password */}
                        <FormField
                            control={form.control}
                            name="password"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel className="label">Password</FormLabel>
                                    <FormControl>
                                        <Input className="input" type="password" placeholder="••••••••" {...field} />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />

                        {/* Submit Button */}
                        <Button type="submit" className="btn">
                            Sign In
                        </Button>
                    </form>
                </Form>
            </div>
        </div>
    )
}

export default AuthForm
