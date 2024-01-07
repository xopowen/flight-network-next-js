import Image from 'next/image'
import arrives from '../../../../public/img/icons/arrives.svg'
//TODO работа с формой реализовать
export default function CalculateBookFlight(){

    return <form className="calculate-book-flight">
        <div className="calculate-book-flight__direction">
            <div className="custom-radio">
                <input id="direction-return" type="radio" name="direction"/>
                <label htmlFor="direction-return">Return</label>
            </div>
            <div className="custom-radio">
                <input id="direction-one-way" type="radio" name="direction"/>
                <label htmlFor="direction-one-way">One - Way</label>

            </div>
            <div className="custom-radio">
                <input id='direction-multi-way' type="radio" name="direction"/>
                <label htmlFor="direction-multi-way">Multi - Way</label>
            </div>


        </div>
        <div className="flex-orientation calculate-book-flight__flex">
            <div className="calculate-book-flight__ticket-info ">
                <label className="calculate-book-flight__field round-gray-field">
                    <sup> From </sup>
                    <input type="text" name="city" placeholder="Melbourne"/>
                </label>
                <label className="calculate-book-flight__field round-gray-field">
                    <label>
                        <sup> Depart</sup>
                        <input type="date" name="date-depart"/>
                    </label>
                    <label>
                        <sup> Return </sup>
                        <input type="date" name="date-return"/>
                    </label>
                </label>
            </div>
            <div className="calculate-book-flight__container-arrive">
                <Image src={arrives} alt=''/>
            </div>
            <div className="calculate-book-flight__ticket-info">
                <label className="calculate-book-flight__field round-gray-field">
                    <sup>To</sup>
                    <input type="text" name="city" placeholder="Perth"/>
                </label>
                <label className="calculate-book-flight__field round-gray-field">
                    <label>
                        <sup>Passengers</sup>
                        <select name="passengers">
                            <option value="1">1 adult</option>
                            <option value="2">2 adult</option>
                            <option value="3">3 adult</option>
                            <option value="4">4 adult</option>
                            <option value="5">5 adult</option>
                        </select>
                    </label>

                    <label>
                        <sup>Class</sup>
                        <select name="class">
                            <option value="economy">Economy</option>
                            <option value="standard">Standard</option>
                            <option value="business">Business</option>
                        </select>
                    </label>
                </label>
            </div>
            <div className="calculate-book-flight__footer">
                <button className="btn btn_submit calculate-book-flight__btn">
                    Search
                </button>
            </div>
        </div>

    </form>
}

