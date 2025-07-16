'use server';

import {db} from "@/Firebase/admin";

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