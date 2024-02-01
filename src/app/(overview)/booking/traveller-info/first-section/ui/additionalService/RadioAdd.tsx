'use client'
import {ServiceType} from "@/app/stateManagers/BookTickets";
import {useStores} from "@/app/hooks/useStores";
import {useCallback} from "react";

//TODO нужен ли тут observer ...
export default function  RadioAdd({uid,title,count,price}:ServiceType){
    let {bookTickets}  =  useStores();
    let isAdded = bookTickets.isInfService(uid)
    let add = useCallback(()=>{
        bookTickets.addService({'uid':uid,'title':title,'price':price,'count':count})
    },[uid])
    let del = useCallback(()=> bookTickets.delService(uid),[uid])


    return <>
        <div className="custom-radio">
            <input id="lost-bag-service-no"
                   type="radio"
                   onClick={del}
                   defaultChecked={!isAdded}
                   name="lost-bag-service"/>
            <label htmlFor="lost-bag-service-no">No</label>
        </div>
        <div className="custom-radio">
            <input id="lost-bag-service-yes"
                   type="radio"
                   onClick={add}
                   defaultChecked={isAdded}
                   name="lost-bag-service"/>
            <label htmlFor="lost-bag-service-yes">yes</label>
        </div>
    </>
}
