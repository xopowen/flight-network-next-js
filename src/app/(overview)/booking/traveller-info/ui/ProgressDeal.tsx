'use client'
import {useStores} from "@/app/hooks/useStores";
import {useEffect, useMemo, useState} from "react";
import {observer} from "mobx-react-lite";
import {usePathname, useSearchParams} from "next/navigation";
import {Steps} from "@/app/stateManagers/BookTickets";


let ProgressDeal = observer(()=>{
    let pathName = usePathname()
    let {bookTickets } = useStores()
     let [step,setStep] = useState(1)
    let [progress,setProgress] = useState( 0)
    let dp = 1

    useEffect(()=>{
        let interval: NodeJS.Timeout;
        if(dp!==0){
            interval = setInterval(()=>{
                setProgress( progress=> {
                    if(progress === bookTickets.registrationStage*30){
                        clearInterval(interval)
                    }
                    if(progress>bookTickets.registrationStage*30){
                        return progress - dp
                    }
                    return progress + dp
                })
            },10)
        }

        switch (pathName){
            case "/booking/traveller-info/first-section":
                setStep(Steps.one)
                bookTickets.registrationStage = Steps.one
                break;
            case "/booking/traveller-info/traveller-information":
                setStep(Steps.two)
                bookTickets.registrationStage = Steps.two
                break;
            case "/booking/traveller-info/choose-payment-method":
                setStep(Steps.tree)
                bookTickets.registrationStage = Steps.tree
                break;
        }

        return ()=>{
            clearInterval(interval)
        }
    }, [pathName])

    return <article className="progress-deal lato lato_700 text-size_22">
        <div className="container progress-deal__items">
            <div className={`progress-deal__item ${step==Steps.one?'progress-deal__item_active':''}`}>
                <p className="progress-deal__level">
                    1
                </p>
                <p><strong>Flight Section</strong></p>
            </div>
            <div className={`progress-deal__item ${step==Steps.two?'progress-deal__item_active':''}`}>
                <p className="progress-deal__level">
                    2
                </p>
                <p><strong>Traveller information</strong></p>
            </div>
            <div className={`progress-deal__item ${step==Steps.tree?'progress-deal__item_active':''}`}>
                <p className="progress-deal__level">
                    3
                </p>
                <p><strong>Payment</strong></p>
            </div>
        </div>
        <progress value={progress} max="100" className="progress-deal__progress-line">
        </progress>

    </article>
})

export default ProgressDeal;