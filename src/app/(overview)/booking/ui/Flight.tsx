'use client'
import Image from "next/image";
import { useMemo} from "react";
import {observer} from "mobx-react-lite";
import airplane from '../../../../../public/img/icons/airplane.svg';
import {useStores} from '@/app/hooks/useStores'
import {usePathname, useRouter, useSearchParams} from "next/navigation";
import {FlightInfo} from "@/app/stateManagers/BookTickets";

export  let Flight = observer((ticketInfo:FlightInfo)=>{
    let searchParams = useSearchParams()
    let reuters = useRouter()
    let path = usePathname()
    let {bookTickets}  =  useStores();
    let {departure,prise,timeUp,timeDown,toCity,fromCity} = ticketInfo
    let timeFly:number = useMemo(()=>timeDown-timeUp  ,[timeDown, timeUp])
    let  action = bookTickets.isFlightInfo(ticketInfo)
    // TODO переадрисация на другие страници
    function setBookToTickets(){
        bookTickets.flightInfo = ticketInfo
    }

    /**
     * @description переход на traveller-info
     */
    function haveClick(e){
        setBookToTickets()
        let newSearchParams = new URLSearchParams(searchParams)
        reuters.push(path+'/traveller-info/first-section?'+newSearchParams)
    }


        return <>
            <article className="ticket">
                <p className="ticket__time-before-shipping lato lato_700 text-size_18">
                    {`${timeFly/1000/60/60}hrs ${timeFly/1000/60 % 60}Mint`}
                </p>
                <p className="ticket__departure lato text-size_18 lato_400">
                    <strong className="lato_700"> DEPARTURE</strong>
                    {` ${
                        departure.toLocaleDateString('en-US',{
                            year: 'numeric',
                            month: 'short',
                            day: 'numeric',
                        })
                    }`}</p>
                <div className="ticket__main">
                    <div className="ticket__price">
                        <p className="lato text-size_30 lato_800">AU $ {prise}</p>
                        <p className="lato lato_700 text-size_22">Price per adult</p>
                    </div>
                    <div className="ticket__time-and-city">
                        <time className="lato lato_700 text-size_26">{timeUp.getHours()}:{timeUp.getMinutes()} {timeUp.getHours()>12?'PM':'AM'}</time>
                        <p className="lato lato_700 text-size_30">{fromCity}</p>
                    </div>
                    <div className="ticket__direction-img">
                        <div className="img-circle-container">
                            <Image  src={airplane} width={33} height={33} alt="plane"/>
                        </div>
                    </div>
                    <div className="ticket__time-and-city">
                        <time className="lato lato_700 text-size_26">{timeDown.getHours()}:{timeDown.getMinutes()}  {timeDown.getHours()>12?'PM':'AM'}</time>
                        <p className="lato lato_700 text-size_30" style={{paddingInline:'5px'}}>{toCity}</p>
                    </div>
                    <div className="ticket__footer">
                        <button onClick={haveClick} className={`btn lato lato_700 text-size_22 ticket__btn ${action ? "ticket__btn_active":''}`}>
                            Book
                        </button>
                    </div>
                </div>
            </article>
        </>
    },)
