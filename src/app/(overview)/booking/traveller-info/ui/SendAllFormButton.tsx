'use client'

import {useEffect, useState} from "react";
import {useStores} from "@/app/hooks/useStores";
import {Steps} from "@/app/stateManagers/BookTickets";
import {usePathname, useRouter, useSearchParams} from "next/navigation";

export default function SendAllFormButton(){
    let searchParams = useSearchParams()
    let router = useRouter()
    let [forms,setForms] = useState()
    let {bookTickets}= useStores()
    let [error,setError] = useState(false)
    function haveSend() {
        setError(false)
        for (var i=0; i<forms.length; i++){
            forms[i].requestSubmit();
        }
        bookTickets.registrationStage = Steps.one
       if( bookTickets.registrationStage === Steps.one){

           if(bookTickets.contactInfo.length === 0){
               setError(true)
               return
           }

           if(bookTickets.listPassengers.length < searchParams.get('passengers') ){
               setError(true)
               return
           }
           router.push(`${window.location.protocol}/booking/traveller-info/traveller-information?${searchParams.toString()}`)
       }

    }
    useEffect(()=>{
        let formsAll = document.getElementsByTagName("FORM")

        setForms(formsAll)
    },[])

    return <div className="travel-info__submit-for-forms lato">
        <p className="lato_400 text-size_28 travel-info__text-center">
            By booking you confirm that the names on the booking match those on the passports
            of those travelling.
        </p>
        <button onClick={haveSend}
                aria-label="submit"
                className={`btn btn_submit travel-info__submit ${error ? "travel-info__submit_error":'' }`}>
            Continue
        </button>

    </div>
}