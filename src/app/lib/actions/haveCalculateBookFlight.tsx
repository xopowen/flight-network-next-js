'use server';
import { z} from 'zod';
import {revalidatePath} from "next/cache";
import {redirect} from "next/navigation";

const FormSchema = z.object( {
    direction:z.enum(['one-way','return','multi-way']),
    'city-from':z.string(),
    'city-to':z.string(),
    'date-depart':z.coerce.date().min(new Date(new Date().setHours(0))),
    'date-return':z.coerce.date().min(new Date()),

    'passengers':z.coerce.number().min(1).max(8)
}).refine(schema =>{
    return schema["date-return"] > schema["date-depart"]
},'Date return must be bigger than a date depart')


export type State = {
    errors?: {
        direction:string[],
        'city-from':string[],
        'city-to':string[],
        'date-depart':string[],
        'date-return':string[],
    };
    message?: string | null;
};

export async function haveCalculateBookFlight(prevState:State,formData:FormData){
const validate = FormSchema.safeParse({
    direction:formData.get('direction'),
    'city-from':formData.get('city-from'),
    'city-to':formData.get('city-to'),
    'date-depart':formData.get('date-depart'),
    'date-return':formData.get('date-return'),
    passengers:formData.get('passengers')
})


    if(!validate.success){
        return {
            errors:validate.error.flatten().fieldErrors,
            message:validate.error.flatten().formErrors
        }
    }
    let newUrlParams = new URLSearchParams()

    for (let field  of Object.entries(validate.data)){
        if( field[0] === 'date-depart' || field[0]==='date-return'){
            // @ts-ignore:Type error.
            field[1] = field[1].toISOString().split('T')[0]
        }
        // @ts-ignore:Type error.
        newUrlParams.append(field[0],field[1])
    }

    revalidatePath('/');
    redirect(`/booking?${newUrlParams.toString()}`);
}