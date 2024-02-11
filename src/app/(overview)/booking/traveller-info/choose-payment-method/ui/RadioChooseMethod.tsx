'use client'

import {useState} from "react";
import MethodCard from "@/app/(overview)/booking/traveller-info/choose-payment-method/ui/MethodCard";
import MethodPayPal from "@/app/(overview)/booking/traveller-info/choose-payment-method/ui/MethodPayPal";

export default function RadioChooseMethod(){
    let [active,setActvive]  = useState('card')

    function haveChangeMethod(method:'card'|'pypy'){
        setActvive(method)
    }

    return <>
        <MethodCard isActive={active==='card'} haveChange = {haveChangeMethod} />
        <MethodPayPal isActive={active==='pypy'} haveChange = {haveChangeMethod}/>
    </>

}