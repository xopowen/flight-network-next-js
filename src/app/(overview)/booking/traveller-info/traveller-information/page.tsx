import Link from "next/link";
import services from '../../../../../../public/img/services 1.jpg';
import screenshot from '../../../../../../public/img/icons/Screenshot 2022-12-16 160342 1.jpg'
import Image from "next/image";
import {Metadata} from "next";
import LevelService from "@/app/(overview)/booking/traveller-info/traveller-information/ui/LevelService";
import PadiServiceCard from "@/app/(overview)/booking/traveller-info/traveller-information/ui/PadiServiceCard";
import SendAllFormButton from "@/app/(overview)/booking/traveller-info/ui/SendAllFormButton";


export const metadata: Metadata = {
    title:'traveller-information for booking |'
}
export default async function Page({searchParams}:{
    searchParams?: URLSearchParams;
}){
    let timeOut = await new Promise((resolve => {
        setTimeout(resolve,2000
        )
    }))
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
                <LevelService  title={'Standard'} count={1} price={56.93} type={'standard'} signature={'Most Popular!'}/>
                <LevelService  title={'Platinum'} count={1} price={56.93} type={'platinum'} signature={'Most Popular!'}/>
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
            <PadiServiceCard uid={5}
                             title={'Emergency Medical & Expenses Cover'}
                             price={70}
                             count={1}
                             discription={['Provides cover for medical emergencies should you become ill or injured on your trip. This\n' +
                             'product is only available to people 72 years old and younger.']}
            />
            <PadiServiceCard
                uid={6}
                title={'Airline Collapse Cover'}
                price={18}
                count={1}
                discription={[
                    'Ensure you and other travellers are protected if, due to COVID-19 or any other reason, your\n' +
                    'airline declares bankruptcy and cancels your flight.',
                    'We’ll refund your prepaid airfares if you haven’t yet departed, or cover your return airfares\n' +
                    'home if your trip has already begun.'
                ]}
            />

        </div>

        <SendAllFormButton/>
    </div>
</>
}