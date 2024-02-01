'use client';
import kisspng from '../../../../public/img/kisspng-qantas-wikipedia-lo 1.png'


import Image from "next/image";
import haveRegistrationForm from "@/app/lib/actions/haveRegistrationForm";
import {Metadata} from "next";



export default function Page(){


    return <form className="login-form lato" action={haveRegistrationForm}>
        <div className="login-form__img">
            <Image width="940" height="740" src={kisspng}
                 className="lato lato_700 text-size_35" alt="Flight Network"/>
        </div>
        <div className="login-form__main">
            <label className="login-form__field lato_400 text-size_16">
                User name
                <input name="first-name" required aria-required="true" type="text"/>
            </label>
            <label className="login-form__field lato_400 text-size_16">
                Family
                <input name="second-name" required aria-required="true" type="text"/>
            </label>
            <label className="login-form__field lato_400 text-size_16">
                Email
                <input name="email" required aria-required="true" type="email"/>
            </label>
            <label className="login-form__field lato_400 text-size_16">
                Password
                <input name="password" required aria-required="true" type="password"/>
            </label>
            <button type="submit" className="btn login-form__btn text-size_20">
                Registration
            </button>
        </div>


    </form>
}