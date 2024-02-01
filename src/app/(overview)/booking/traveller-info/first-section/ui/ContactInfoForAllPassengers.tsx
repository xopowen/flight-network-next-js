'use client'
import {useStores} from "@/app/hooks/useStores";
import {useState} from "react";
import {observer} from "mobx-react-lite";

let ContactInfoForAllPassengers = observer( ()=>{
    let {bookTickets}  =  useStores();
    let [checked,setChecked] = useState(bookTickets.getContactInfo('permit')==='on')
    function haveSubmit(formDate:FormData){
        bookTickets.contactInfo = [...formDate.entries()]
    }
    const handleChange = () => {
        setChecked(checked => !checked);
    };

    return <form action={haveSubmit} className="gray-border travel-info__contact form-info lato lato_700">
        <h2 className="form-info__head text-size_35">Contact information for all passengers</h2>
        <div className="form-info__flex ">
            <label className="form-info__field text-size_24">
                Email
                <div className="round-gray-field form-info__input-container">
                    <input className="lato_500 text-size_18"
                           required
                           name = 'email'
                           type="email"
                           defaultValue={bookTickets.getContactInfo("email")||''}
                           placeholder="Email@yahoo.com"/>
                </div>
            </label>
            <label className="form-info__field text-size_24">
                Mobile Number
                <div className="round-gray-field text-size_18 form-info__input-container">
                    <input className="lato_500 text-size_18 form-info__prefix-input"
                           name={'tel-prefix'}
                           required type="text"
                           defaultValue={bookTickets.getContactInfo('tel-prefix')||'+68'}
                    />
                    <input className="lato_500 text-size_18"
                           name = {'tel'}
                           defaultValue={bookTickets.getContactInfo('tel')||''}
                           required
                           type="number"/>
                </div>
            </label>
        </div>
        <label className="form-info__permit">

                <input name="permit"
                      checked={checked}
                       type="checkbox"
                       onChange={handleChange}
                   />
                I do not wish to receive any newsletters about cheap air fares or other offers
        </label>

    </form>
})

export default ContactInfoForAllPassengers;