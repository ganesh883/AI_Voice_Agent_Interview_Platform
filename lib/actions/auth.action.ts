'use server';

import {db, auth} from "@/Firebase/admin";
import {cookies} from "next/headers";

const ONE_WEEK = 60*60*24*7;

export async function signUp(params : SignUpParams){
    const { uid, name, email } = params;

    try {

        const userRecord = await db.collection('users').doc(uid).get();

        if(userRecord.exists){
            return{
                success: false,
                message: 'User already exists!.Please Sign In instead.'
            }
        }

        await db.collection('users').doc(uid).set({name, email});


    } catch(e : any) {
        console.log('Error creating a User', e);

        if(e.code === 'auth/email-already-exists'){
            return {
                success : false,
                message : 'This email already exists. Please provide a valid email address.',
            }
        }

        return{
            success : false,
            message : 'Failed to Create an Account.'
        }
    }
}


export async function setSessionCookie(idToken: string){
        const cookieStore = await cookies();

        const sessionCookie = await auth.createSessionCookie(idToken,{
            expiresIn: ONE_WEEK*1000,
    })

    cookieStore.set('session', sessionCookie,{
        maxAge: ONE_WEEK,
        httpOnly: true,
        secure: process.env.NODE_ENV === 'production',
        path: '/',
        sameSite: 'lax'
    })
}
