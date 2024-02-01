'use client';
import {observer} from "mobx-react-lite";
import {LevelServiceType} from "@/app/stateManagers/BookTickets";
import {useStores} from "@/app/hooks/useStores";
import {useEffect, useState} from "react";



let LevelService = observer(({title,type,signature,price}:LevelServiceType)=>{
    let {bookTickets} = useStores()
    let [isInListService,setIn] = useState(false) 
    
    useEffect(()=>{
        setIn(bookTickets.getService(4)?.type === type)
    } ,[bookTickets.getService(4)?.type])
    
    function haveSetLevelService(e){
        if(isInListService){
            bookTickets.delService(4)
            return
        }

        bookTickets.addService({
            title:title,
            type:type,
            signature:signature,
            price:price,
            uid:4,
            count:1
        })
    }
    

    return <>
        <article className={`level-service level-service_${type} lato`}>
            <p className="level-service__top-die lato_700 text-size_18">{signature}</p>
            <div className="level-service__header">
                <h3 className="level-service__head lato_800 text-size_30">
                    {title}
                </h3>
                <p className="lato_700 text-size_18 level-service__price ">
                    Au${price}
                </p>
            </div>
            <div className="level-service__main">
                <p className="level-service__description">
                    A good level of support at a fair cost.
                </p>
                <ul className="level-service__list-service lato_400 text-size_14 ">
                    <li className="level-service__item-service">Service fee applies</li>
                    <li className="level-service__item-service">Quick response time</li>
                    <li className="level-service__item-service">Flight updates by SMS</li>
                    <li className="level-service__item-service">Check-in</li>
                </ul>
            </div>
            <div className="level-service__footer">
                <button onClick={haveSetLevelService} className="btn level-service__btn lato_700 text-size_20" aria-label="Select">
                    {isInListService?'cancel':'Select'}
                </button>
            </div>
        </article>
    </>
})
export default LevelService;