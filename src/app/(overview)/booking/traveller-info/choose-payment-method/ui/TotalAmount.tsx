'use client'
import {useStores} from "@/app/hooks/useStores";
import {useEffect, useMemo, useState} from "react";
import {observer} from "mobx-react-lite";
import {toJS} from "mobx";
import {LevelServiceType, ServiceType} from "@/app/stateManagers/BookTickets";


const TotalAmount = observer(
    () =>{
        let format = useMemo(()=>new Intl.NumberFormat('en',{
            maximumFractionDigits:2,
        }),[])
        let {bookTickets}  =  useStores();
        let [totalAmount,setTotalA] = useState(0)

        useEffect(()=>{
            let sumT = 0
            if(bookTickets.flightInfo && bookTickets.ticketServiceList){
                Object.entries(bookTickets.ticketServiceList).map((value:any ) => {
                    sumT += value[1].count * ( value[1].price || 0)
                })
                sumT += bookTickets.flightInfo.price
                setTotalA(sumT)
            }

        },[bookTickets.flightInfo, bookTickets.ticketServiceList])

        return <div itemScope className="gray-border  total-amount  form-info lato ">
            <h2 className="total-amount__head lato_700 text-size_30">Total amount</h2>

            <p className="total-amount__subtext text-size_20">Subtotal <span
                className="text-size_18">AU$ {format.format(totalAmount)}</span></p>
            <p className="total-amount__subtext lato_700 text-size_20">Amount to pay
                <span className="text-size_22">AU$ {format.format(totalAmount)}
                </span>
            </p>
            <label className="total-amount__permit lato_300 text-size_18">
                <input name="permit" type="checkbox"/>
                <span>
                    {/* eslint-disable-next-line react/no-unescaped-entities */}
                    I have read and accept Flight Networks <u>travel conditions , Fare Rules, the airline's general terms and conditions,</u>  and I have verified that I have entered my booking information correctly.
                    <br/>
                    You can read our <u> Privacy policy</u> here. Additional airline general terms and conditions is available here: <u> Virgin Australia, Qantas Airways.</u>
                </span>
            </label>
            <div className="total-amount__footer">
                <button aria-label="submit" className="btn btn_submit travel-info__submit">
                    Pay
                </button>
            </div>
        </div>
    }
)

export default TotalAmount;