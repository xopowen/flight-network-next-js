'use client';
import Image from 'next/image'
import arrives from '../../../../public/img/icons/arrives.svg'
import {useFormState} from "react-dom";
import {haveCalculateBookFlight} from "@/app/lib/actions/haveCalculateBookFlight";
import {handleKeyDown} from "@/app/helpFunctions/formSendToEntry";


export type startInfoFindFlight = {
    direction:string,
    'city-from':string,
    'city-to':string,
    'date-depart':string,
    'date-return':string,
    passengers:number
}

//TODO need write tests
export default function FormCalculateBookFlight(){
    const initialState = { message: null, errors: {} };
    // @ts-ignore: Type error.
    let [state,dispatch] = useFormState(haveCalculateBookFlight,initialState)

    return <form className="calculate-book-flight" aria-label={'form Book Cheap Flight'} action={dispatch}>

        {    // @ts-ignore: Type error.
            state?.message && state.message.length > 0 && <p aria-errormessage={state.message} className={'lato lato_400'} style={{color:'red'}}>{state.message}</p>}
        {state?.errors &&  <>{Object.entries(state.errors).map(field=>field[1].map((err,index)=>{
                return <p key={ index} aria-errormessage={err} className={'lato lato_400'} style={{color:'red'}}>{err}</p>
            }))}
        </>}
        <div className="calculate-book-flight__direction">
            <div className="custom-radio">
                <input onKeyDown={handleKeyDown}  id="direction-return"
                       required
                       aria-required
                       type="radio"
                       name="direction" value={'return'}/>
                <label htmlFor="direction-return" aria-label={'direction-return'}>Return</label>
            </div>
            <div className="custom-radio">
                <input onKeyDown={handleKeyDown}  id="direction-one-way" type="radio" name="direction" value={'one-way'}/>
                <label htmlFor="direction-one-way" aria-label={'direction one-way'}>One - Way</label>

            </div>
            <div className="custom-radio">
                <input onKeyDown={handleKeyDown}  id='direction-multi-way' type="radio" name="direction" value={'multi-way'}/>
                <label htmlFor="direction-multi-way" aria-label={'direction multi-way'}>Multi - Way</label>
            </div>


        </div>
        <div className="flex-orientation calculate-book-flight__flex">
            <datalist id={'list-from'}>
                <option>Москва</option>
                <option>Санкт - Петербург</option>
                <option>Иваново</option>
                <option>Ярославль</option>
            </datalist>
            <div className="calculate-book-flight__ticket-info ">
                <label className="calculate-book-flight__field round-gray-field" aria-label={'city-from'}>
                    <sup> From </sup>
                    <input onKeyDown={handleKeyDown}  list={'list-from'} type="text" name="city-from"
                           required aria-required
                           placeholder="Melbourne"
                           aria-placeholder={'Melbourne'}/>
                </label>
                <label className="calculate-book-flight__field round-gray-field"  >
                    <label aria-label={'date depart'}>
                        <sup> Depart</sup>
                        <input onKeyDown={handleKeyDown}  type="date" required aria-required name="date-depart"/>
                    </label>
                    <label aria-label={'date return'}>
                        <sup> Return </sup>
                        <input onKeyDown={handleKeyDown}    type="date" required aria-required name="date-return"/>
                    </label>
                </label>
            </div>
            <div className="calculate-book-flight__container-arrive">
                <Image src={arrives} alt=''/>
            </div>
            <div className="calculate-book-flight__ticket-info">
                <label className="calculate-book-flight__field round-gray-field">
                    <sup>To</sup>
                    <input onKeyDown={handleKeyDown}  list={'list-from'} type="text" name="city-to" required aria-required placeholder="Perth"/>
                </label>
                <label className="calculate-book-flight__field round-gray-field">
                    <label aria-label={'select the number of passengers'}>
                        <sup>Passengers</sup>
                        <select name="passengers">
                            <option aria-label={'1 adult'} value="1">1 adult</option>
                            <option aria-label={'2 adult'} value="2">2 adult</option>
                            <option aria-label={'3 adult'} value="3">3 adult</option>
                            <option aria-label={'4 adult'} value="4">4 adult</option>
                            <option aria-label={'5 adult'} value="5">5 adult</option>
                        </select>
                    </label>

                    <label aria-label={'select the class of ticket'}>
                        <sup>Class</sup>
                        <select name="class">
                            <option aria-label={'economy class'} value="economy">Economy</option>
                            <option aria-label={'standard class'} value="standard">Standard</option>
                            <option aria-label={'business class'} value="business">Business</option>
                        </select>
                    </label>
                </label>
            </div>

            <div className="calculate-book-flight__footer">
                <button aria-label={'send form'} className="btn btn_submit calculate-book-flight__btn">
                    Search
                </button>
            </div>
        </div>

    </form>
}

