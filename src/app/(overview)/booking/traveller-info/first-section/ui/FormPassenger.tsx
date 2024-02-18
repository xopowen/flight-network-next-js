'use client'
import {useStores} from "@/app/hooks/useStores";
import { schemePassengerInfo} from "@/app/stateManagers/BookTickets";
import {observer} from "mobx-react-lite";
import {handleKeyDown} from "@/app/helpFunctions/formSendToEntry";
import {useState} from "react";
import {ChangeEvent} from "react/ts5.0";

let FormPassenger = observer( ({order}:{order:number})=>{
    let {bookTickets}  =  useStores();
    let passengerInfo = bookTickets.getPassengerInfo(order)
    let [checked,setChecked] = useState(passengerInfo?.appeal)
    let [errors,setErrors]  = useState({}||undefined)
    function haveSubmit(formDate:FormData){
        setErrors(undefined)
        let schemeTest =  schemePassengerInfo.safeParse({
            order: order,
            type: 'adult',
            appeal:formDate.get('appeal'),
            'first-name':formDate.get('first-name'),
            'sur-name':formDate.get('sur-name')
        })
        if(schemeTest.success){
            bookTickets.addPassengerInfo(schemeTest.data)
        }else{
            setErrors(schemeTest.error)
        }

    }

    function haveRadio(e: any){

            setChecked(e.target.value)


    }


    return <form action={haveSubmit} className="gray-border travel-info__contact form-info form-info_big-padding lato lato_700">
        <h2 className="form-info__head  text-size_35">Passenger 1, adult</h2>
        <p className="form-info__subtext text-size_18 lato_400">*Field required</p>
        <div className=" form-info__title">
            <p className="form-info__field text-size_20 lato_400 "> Title* </p>
            <div className="form-info__radio-container">
                <div className="custom-radio text-size_22 lato_400">
                    <input  id="title-mr" onChange={haveRadio} checked={checked==='mr'} type="radio" value={'mr'} name="appeal"/>
                    <label htmlFor="title-mr">Mr</label>
                </div>
                <div className="custom-radio text-size_22 lato_400  ">
                    <input id="title-mrs-ms" onChange={haveRadio} type="radio" checked={checked==='ms'} value={'ms'} name="appeal"/>
                    <label htmlFor="title-mrs-ms">Mrs/Ms</label>
                </div>
            </div>
        </div>
        <div className="form-info__flex ">
            <label className="form-info__field text-size_24">
                First name
                <div className="round-gray-field form-info__input-container">
                    <input onKeyDown={handleKeyDown} defaultValue={passengerInfo?.["first-name"] || ''} className="lato_500 text-size_18" name="first-name" required type="text" placeholder="Test"/>
                </div>
            </label>
            <label className="  form-info__field  text-size_24">
                Surname
                <div className="round-gray-field form-info__input-container">
                    <input className="lato_500 text-size_18"
                           defaultValue={passengerInfo?.["sur-name"]||''}
                           name="sur-name" required type="text"
                           placeholder="Testtest"/>
                </div>
            </label>
        </div>
    </form>

})

export default FormPassenger;