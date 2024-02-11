
import cards from '../../../../../../../public/img/cards.jpg'
import Image from 'next/image'
export default function MethodCard ({isActive,haveChange}:{isActive:boolean}){

    return  <article className="payment-method payment-method_card lato gray-border">
        <div className="custom-radio payment-method__custom-radio">
            <input
                id="payment-method-card"
                type="radio"
                onClick={()=>haveChange("card")}
                defaultChecked={isActive}
                name="payment-method"
                value="card"/>
            <label htmlFor="payment-method-card"/>
        </div>
        <div className="payment-method__main">
            <h2 className="payment-method__head lato_700 text-size_26">Debit card/ credit card</h2>
            <p className="payment-method__subtext">
                Up to ‪-AU$ 25.36‬ discount
            </p>
        </div>
        <div className="payment-method__footer">
            <Image width="226" height="57" src={cards} alt={''}/>
        </div>
    </article>
}