'use client'

import Image from "next/image";
import airplane from "../../../../../../../public/img/icons/airplane.svg";
import {useStores} from "@/app/hooks/useStores";
import {useCallback} from "react";
import {ServiceType} from "@/app/stateManagers/BookTickets";

export default function PadiServiceCard ({uid,title,count,price,discription}:
    ServiceType & {discription:Array<string>}
){
    let {bookTickets}  =  useStores();
    let isAdded = bookTickets.isInfService(uid)
    let add = useCallback(()=>{
        bookTickets.addService({'uid':uid,'title':title,'price':price,'count':count})
    },[uid])
    let del = useCallback(()=> bookTickets.delService(uid),[uid])



    return <section className="paid-service-card lato">
        <Image width="512" height="512" src={airplane} alt=""/>
        <div className="paid-service-card__main">
            <h3 className="paid-service-card__head lato_700 text-size_30">
                {title}
            </h3>
            {discription.length && discription.map((v,i)=>{

                return <p key={i} className="paid-service-card__text lato_400 text-size_26">
                    {v}
                </p>
            }) }

        </div>
        <form action={()=>{}} className="paid-service-card__footer">
            <p className="paid-service-card__subtext lato_400 text-size_18">
                Total per person
            </p>
            <p className="lato_700 text-size_26  paid-service-card__price ">AU$ {count} </p>
            <div className="paid-service-card__choice lato_400 text-size_26">
                <div className="custom-radio paid-service-card__custom-radio">
                    <input id={`paid-service-${uid}-choice-no`}
                           type="radio"
                           onClick={del}
                           defaultChecked={!isAdded}
                           name="choice-no"/>
                    <label htmlFor={`paid-service-${uid}-choice-no`}>No</label>
                </div>
                <div className="custom-radio paid-service-card__custom-radio">
                    <input id={`paid-service-${uid}-choice-yes`}
                           type="radio"
                           onClick={add}
                           defaultChecked={isAdded}
                           name="choice-no"/>
                    <label htmlFor={`paid-service-${uid}-choice-yes`}>Yes</label>
                </div>
            </div>
        </form>
    </section>

}