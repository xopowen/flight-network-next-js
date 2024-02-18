'use client'
import Image from "next/image";
import takeOff from "../../../../../../public/img/icons/take-off.svg";
import shoppingBag from "../../../../../../public/img/icons/shopping-bag.svg";
import {useSearchParams} from "next/navigation";
import {observer, Observer} from "mobx-react-lite";
import {useStores} from "@/app/hooks/useStores";
import {FlightInfo, ServiceType} from "@/app/stateManagers/BookTickets";
import {useEffect, useMemo, useState} from "react";
import {toJS} from "mobx";
import customFormatTime from "@/app/helpFunctions/customFormatTime";
//TODO сделать скелет
let YOrder = observer(( )=>{
    let {bookTickets}  =  useStores();
    let [fI,setFl] = useState<FlightInfo>();
    let searchParams = useSearchParams()
    let [totalAmount,setTotalA] = useState(0)
    let format = useMemo(()=>new Intl.NumberFormat('en',{
        maximumFractionDigits:2,
    }),[])
    useEffect(()=>{
        if(bookTickets.flightInfo){
            setFl(toJS(bookTickets.flightInfo))
        }
        let sumT = 0
        if(bookTickets.flightInfo && bookTickets.ticketServiceList){
            Object.entries(bookTickets.ticketServiceList).map((value:any) => {
                sumT += value[1].count * ( value[1].price || 0)
            })
            sumT += bookTickets.flightInfo.price || 0
            setTotalA(sumT)
        }
    },[bookTickets.flightInfo,bookTickets.ticketServiceList])
    if (!fI){
        return <></>
    }

    return<aside   className="gray-border y-order">
        <h2 className="y-order__head lato lato_700 text-size_35">Your Order</h2>
        <div className="y-order__main">
            <div className="y-order__info">
                <p className="lato lato_800 text-size_28">Departure</p>
                <time className="lato lato_700 text-size_22 gray">
                    { customFormatTime(fI.departure,'en-US')}
                </time>
                <div className="y-order__count lato lato_700 text-size_26">
                    <Image width="37" height="37" src={takeOff} alt={''}/>
                    {searchParams.get('passengers')}
                </div>
            </div>
            <div className="y-order__info">
                <p className="lato lato_800 text-size_28">
                    {fI.timeUp.getHours()}:{fI.timeUp.getMinutes()} {fI.timeUp.getHours()>12?'PM':'AM'} - {fI.timeDown.getHours()}:{fI.timeDown.getMinutes()}  {fI.timeDown.getHours()>12?'PM':'AM'}
                </p>
                <p className="lato lato_700 text-size_22 gray">
                    {`${searchParams.get('city-from')} >>> ${searchParams.get('city-to')}`}
                </p>
            </div>
        </div>
        <div className="y-order__info y-order__main">

            {bookTickets.ticketServiceList && <>
                <p className="lato lato_800 text-size_28">Bags</p>
                {
                    Object.entries(bookTickets.ticketServiceList)
                        .map((value:any) => {
                            return  <div key={value[1].uid} className="y-order__pay-service">
                                <Image width="50" height="50" src={shoppingBag} alt={'bag'}/>
                                <p className="lato lato_800 text-size_28">{value[1].title} </p>
                                <p className="lato lato_700 text-size_22">{value[1].count}X7 Kg</p>
                            </div>

                        })
                }
            </>
            }

        </div>
        <div className="y-order__footer lato_800 lato text-size_28">
            <p>Test Testtrfe, adult</p>
            <p className="y-order__left-text">AU${format.format(totalAmount)}</p>
        </div>
    </aside>


})
export default YOrder;