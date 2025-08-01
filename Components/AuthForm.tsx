"use client"

import Image from "next/image"


import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"

import { Button } from "@/Components/ui/button"
import {Form} from "@/Components/ui/form"
import Link from "next/link";
import {toast} from "sonner";
import FormField from "@/Components/FormField";
import {useRouter} from "next/navigation";
import {createUserWithEmailAndPassword, signInWithEmailAndPassword} from "firebase/auth";
import {auth} from "@/Firebase/client";
import {signIn, signUp} from "@/lib/actions/auth.action";


const authFormSchema = (type : FormType) => {
    return z.object({
        name : type === 'sign-up'? z.string().min(3) : z.string().optional(),
        email : z.string().email(),
        password : z.string().min(3),
    })
}

const AuthForm = ({type} : {type:FormType}) => {
    const router = useRouter();
    const formSchema = authFormSchema(type);

    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            name: "",
            email: "",
            password: "",
        },
    })


    async function onSubmit(values: z.infer<typeof formSchema>) {
       try {
            if(type === 'sign-up'){
                const { name,  email, password } = values;

                const userCredentials = await createUserWithEmailAndPassword(auth,email,password);

                const result = await signUp({
                    uid: userCredentials.user.uid,
                    name: name!,
                    email,
                    password,
                });

                if(!result?.success){
                    toast.error(result?.message);
                    return;
                }

               toast.success('Account created successfully. Please Sign In');
                router.push('/sign-in');
            }
            else{

                const { email , password} = values;

                const userCredential = await signInWithEmailAndPassword(auth, email, password);

                const idToken = await userCredential.user.getIdToken();

                if(!idToken){
                    toast.error('Sign In Failed');
                    return;
                }

                await signIn({
                    email, idToken
                })

                toast.success('You have signed in successfully.');
                router.push('/');
            }
       } catch(error){
           console.log(error);
           toast.error(`There was an error: ${error}`)
       }
    }

    const isSignIn = type === 'sign-in';


    return (
        <div className="card-border lg:min-w-[566px] bg-background text-foreground px-4">
        <div className="flex flex-col gap-6 card py-14 px-10 justify-center ">
                    <div className="flex flex-row gap-2 justify-center ">
                                <Image src="/logo.svg" alt="logo" height={32} width={38}/>
                                <h2 className="text-primary-100">Mockly</h2>
                    </div>
                <h3>Practice Job Interview with AI</h3>


            <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="w-full space-y-6 mt-4 form">
                    {!isSignIn && (
                        <FormField
                            control={form.control}
                            name="name"
                            label="Name"
                            placeholder="Enter your name"
                        />
                    )}
                    <FormField
                        control={form.control}
                        name="email"
                        label="Email"
                        placeholder="Enter your E-mail"
                        type="email"
                    />
                    <FormField
                        control={form.control}
                        name="password"
                        label="Password"
                        placeholder="Enter your Password"
                        type="password"
                    />
                    <Button className="btn" type="submit">{isSignIn ? 'Sign in' : 'Create an Account'}</Button>
                </form>
            </Form>

                <p className="text-center"> {isSignIn? 'No account yet?' : 'Have an account already?'}
                    <Link href={!isSignIn? '/sign-in' : '/sign-up'} className={"font-bold text-user-primary ml-1"}>{!isSignIn? "Sign in" : "Sign Up"}</Link>
                </p>
        </div>
        </div>
    )
}
export default AuthForm
