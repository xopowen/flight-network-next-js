'use client'
import {observer} from "mobx-react-lite";
import {useStores} from "@/app/hooks/useStores";
import {ServiceType} from "@/app/stateManagers/BookTickets";
import {useCallback, useEffect, useMemo, useState} from "react";

let ButtonAdd = observer(({uid,title,price,count}:ServiceType)=>{
    let {bookTickets}  =  useStores();

    let [test,setText] = useState('')

    useEffect(()=>{
        setText(  bookTickets.isInfService(uid) ? 'Included':'include' )
    },[ bookTickets.isInfService(uid)])

    return <button onClick={()=>{
        if( bookTickets.isInfService(uid)){
            bookTickets.delService(uid)
            return
        }
        bookTickets.addService({'uid':uid,'title':title,'price':price,'count':count})
    }} className="btn btn_not-back add-service__status text-size_22 lato_700">
        <strong>{test}</strong>
    </button>
})
export default ButtonAdd;