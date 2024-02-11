import paypal from '../../../../../../../public/img/paypal 1.jpg'
import Image from "next/image";


export default function MethodPayPal ({isActive,haveChange}:{isActive:boolean}){

    return  <article className="payment-method payment-method_pypy lato gray-border">
        <div className="custom-radio payment-method__custom-radio">
            <input id="payment-method-pypy"
                   type="radio"
                   defaultChecked={isActive}
                   onClick={()=>haveChange("pypy")}
                   name="payment-method"
                   value="pypy"/>
            <label htmlFor={"payment-method-pypy"}/>
        </div>
        <div className="payment-method__main">
            <h2 className="payment-method__head lato_700 text-size_26">
                PayPal
            </h2>
            <p className="payment-method__text lato_400 text-size_16">
                You will be redirected to Paypal’s loginpage, where you can log in to your account and complete the
                booking.
            </p>
            <div className="payment-method__field-container lato_400 text-size_16">
                <label className="payment-method__field ">
                    <span>First name <sub className="payment-method__star">*</sub></span>
                    <input className="text-size_16"
                           required = {isActive}
                           type="text"
                           name="first-name"
                           placeholder="Test"/>
                </label>
                <label className="payment-method__field">
                    <span>surmame <sub className="payment-method__star">*</sub></span>
                    <input className="text-size_16"
                           required = {isActive}
                           type="text"
                           name="surmame"
                           placeholder="Test pasenger"/>
                </label>
                <label className="payment-method__field">
                    <span>Street  <sub className="payment-method__star">*</sub></span>
                    <input className="text-size_16"
                           required = {isActive}
                           type="text"
                           name="street" placeholder="14 Argyle St"/>
                </label>
                <label className="payment-method__field">
                    <span>Postcode   <sub className="payment-method__star">*</sub></span>
                    <input className="text-size_16"
                           required = {isActive} type="number"
                           name="postcode" placeholder="4216"/>
                </label>
                <label className="payment-method__field">
                    <span>City <sub className="payment-method__star">*</sub></span>
                    <input className="text-size_16"
                           required = {isActive} type="text"
                           name="city" placeholder="Melbourn"/>
                </label>
                <label className="payment-method__field">
                    <span>Country <sub className="payment-method__star">*</sub></span>
                    <input className="text-size_16"
                           required = {isActive} type="text"
                           name="country"
                           placeholder="Australia"/>
                </label>
            </div>
        </div>
        <div className="payment-method__footer">
            <Image width="137" height="58" src={paypal} alt={''}/>
        </div>
    </article>
}