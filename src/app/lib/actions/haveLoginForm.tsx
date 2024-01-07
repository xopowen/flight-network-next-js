'use server';
import {redirect} from "next/navigation";
import {cookies} from "next/headers";

export default async function haveLoginForm(prevState: {}, formData: FormData){

    let formInfo = {'firstName':formData.get('first-name'),
                    'password':formData.get('password')
                    }
    let firstName = cookies().get('first-name')
    let password = cookies().get('password')
    let errors = {}

    if(formInfo.firstName !== firstName.value){
        errors['message'] = 'Error in input of info.'
        return  errors
    }
    if(password.value !== formInfo.password){
        errors['message'] ='Error in input of info.'
        return errors
    }

    redirect('/')

}