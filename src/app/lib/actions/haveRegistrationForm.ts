'use server';
import {cookies} from "next/headers";
import {redirect} from "next/navigation";

export default async function haveRegistrationForm (formData:FormData){
    for (let field of formData){
        // @ts-ignore:Type error.
        cookies().set(field[0],field[1] )
    }

    redirect('/login')
}