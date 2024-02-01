'use client';
import kisspng from '../../../../public/img/kisspng-qantas-wikipedia-lo 1.png'
import Image from "next/image";
import Link from "next/link";
import haveLoginForm from "@/app/lib/actions/haveLoginForm";
import {getCookie} from "../../lib/helpFunction/getCookies";
import { useFormState } from 'react-dom';
import {useEffect, useState} from "react";


export default function Page(){
    let [firstName,setFirstName] = useState() ;
    let [password,setPassword] = useState() ;
    const initialState = { message: null, errors: {} };
    let [state,dispatch] = useFormState(haveLoginForm,initialState)
    useEffect(()=>{
        setFirstName( getCookie('first-name'))
        setPassword (getCookie('password'))
    },[])

    return <form className="login-form lato" action={dispatch}>

        <div className="login-form__img">
            <Image width="940" height="740" src={kisspng} className="lato lato_700 text-size_35" alt="Flight Network"/>
        </div>
        {state?.message && <p style={{color:'red'}}>{state.message}</p>}
        <div className="login-form__main">
            <label className="login-form__field lato_400 text-size_16">
                User name
                <input name="first-name" required aria-required="true" type="text" defaultValue={firstName   ?? ''  }/>
            </label>
            <label className="login-form__field lato_400 text-size_16">
                Password
                <input name="password" required aria-required="true" type="password" defaultValue={password  ?? ''  }/>
            </label>

            <button type="submit" className="btn login-form__btn text-size_20">
                Login
            </button>

            <p className="text-size_20 login-form__subtext">do you want to register</p>
            <Link href={"/registration"}>
                <button type="button" className="btn login-form__btn text-size_20">
                    Registration
                </button>
            </Link>
        </div>


    </form>
}