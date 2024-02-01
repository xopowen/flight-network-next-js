import Link from "next/link";
import services from '../../../../../../public/img/services 1.jpg';
import screenshot from '../../../../../../public/img/icons/Screenshot 2022-12-16 160342 1.jpg'
import airplane from '../../../../../../public/img/icons/airplane.svg';
import Image from "next/image";
import {Metadata} from "next";
import LevelService from "@/app/(overview)/booking/traveller-info/traveller-information/ui/LevelService";

export const metadata: Metadata = {
    title:'traveller-information for booking |'
}
export default async function Page({searchParams}){

return <>
    <h1 className="lato lato_400 text-size_30 link-to-back">
        <Link href={"/booking/traveller-info/first-section?" + new URLSearchParams(searchParams).toString()}  >Edit Traveler details</Link>
    </h1>
    <div className="travel-info__main">
        <article className="travel-info__contact extra-service gray-border lato">
            <h2 className="extra-service__head lato_700 text-size_30">
                Extra services
            </h2>
            <article className="extra-service__extra-element lato">
                <div className="extra-service__img-container">
                    <Image width="229"
                           height="132"
                           src={services}
                           className="lato_700 text-size_30"
                           alt="service"/>
                </div>
                <h3 className="lato_400 text-size_30">
                    Choose your level of support
                </h3>
                <p className="lato_400 text-size_18">
                    Every passenger has different support needs - choose the package that suits you best
                </p>
            </article>

            <div className="extra-service__levels">
                <LevelService  title={'Standard'} price={56.93} type={'standard'} signature={'Most Popular!'}/>
                <LevelService  title={'Platinum'} price={56.93} type={'platinum'} signature={'Most Popular!'}/>
            </div>

        </article>

        <article className="blog-extra-info  lato">
            <div className="blog-extra-info__img-container ">
                <Image width="700" height="480" src={screenshot}
                     className="lato_700 text-size_30" alt="service"/>
            </div>
            <div className="blog-extra-info__main">
                <h2 className="lato_400 text-size_30">
                    Choose the best coverage if things go wrong on your trip
                </h2>
                <p className="lato_400 text-size_18">
                    Select your insurance from our generous cover
                    <br/>
                    options.
                </p>
            </div>

        </article>

        <div className="travel-info__list-extra-service">
            <section className="paid-service-card lato">
                <Image width="512" height="512" src={airplane} alt=""/>
                <div className="paid-service-card__main">
                    <h3 className="paid-service-card__head lato_700 text-size_30">
                        Emergency Medical & Expenses Cover
                    </h3>
                    <p className="paid-service-card__text lato_400 text-size_26">
                        Provides cover for medical emergencies should you become ill or injured on your trip. This
                        product is only available to people 72 years old and younger.
                    </p>
                </div>
                <form className="paid-service-card__footer">
                    <p className="paid-service-card__subtext lato_400 text-size_18">
                        Total per person
                    </p>
                    <p className="lato_700 text-size_26  paid-service-card__price ">AU$ 70.86 </p>
                    <div className="paid-service-card__choice lato_400 text-size_26">
                        <div className="custom-radio paid-service-card__custom-radio">
                            <input id="paid-service-1-choice-no" type="radio" name="choice-no"/>
                            <label for="paid-service-1-choihtmlForno">No</label>
                        </div>
                        <div className="custom-radio paid-service-card__custom-radio">
                            <input id="paid-service-1-choice-yes" type="radio" name="choice-no"/>
                            <label for="paid-service-1-choihtmlForyes">Yes</label>
                        </div>
                    </div>
                </form>
            </section>
            <section className="paid-service-card lato">
                <Image width="512" height="512" src={airplane} alt=""/>
                <div className="paid-service-card__main">
                    <h3 className="paid-service-card__head lato_700 text-size_30">
                        Airline Collapse Cover
                    </h3>
                    <p className="paid-service-card__text lato_400 text-size_26">
                        Ensure you and other travellers are protected if, due to COVID-19 or any other reason, your
                        airline declares bankruptcy and cancels your flight.
                    </p>
                    <p className="paid-service-card__text lato_400 text-size_26">
                        We’ll refund your prepaid airfares if you haven’t yet departed, or cover your return airfares
                        home if your trip has already begun.
                    </p>
                </div>
                <form className="paid-service-card__footer">
                    <p className="paid-service-card__subtext lato_400 text-size_18">
                        Total per person
                    </p>
                    <p className="lato_700 text-size_26  paid-service-card__price ">AU$ 18.86</p>
                    <div className="paid-service-card__choice lato_400 text-size_26">
                        <div className="custom-radio paid-service-card__custom-radio">
                            <input id="paid-service-2-choice-no" type="radio" name="choice-no"/>
                                <label for="paid-service-2-choice-no">No</label>
                        </div>
                        <div className="custom-radio paid-service-card__custom-radio">
                            <input id="paid-service-2-choice-yes" type="radio" name="choice-no"/>
                                <label for="paid-service-2-choice-yes">Yes</label>
                        </div>
                    </div>
                </form>
            </section>
        </div>

        <div className="travel-info__submit-for-forms lato">
            <p className="lato_400 text-size_28 travel-info__text-center">
                By booking you confirm that the names on the booking match those on the passports
                of those travelling.
            </p>

            <button aria-label="submit" className="btn btn_submit travel-info__submit">
                Continue
            </button>

        </div>
    </div>
</>
}