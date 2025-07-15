'use server';

export async function signUp(params : SignUpParams){
    const { uid, name, email } = params;

    try {

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