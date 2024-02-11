import Image from 'next/image'
import calendar from '../../../../public/img/icons/calendar.svg';

import {Metadata} from "next";

import SortElement from "@/app/(overview)/booking/ui/SortElement";

import Flights from "@/app/(overview)/booking/ui/Flights";
import {Suspense} from "react";
import FlightsSkeleton from "@/app/(overview)/booking/ui/skeleton/FlightsSkeleton";


export const metadata: Metadata = {
    title:'Flights of '
}

export default async  function Page({searchParams}){
    let timeOut = await new Promise((resolve => {
        setTimeout(resolve,2000
        )
    }))
    return(<>
    <section className="booking container">

        <div className="order-info lato lato_800 text-size_17">
            <h3 className="order-info__cities lato lato_800 text-size_20">
                Melbourne - Perth
            </h3>
            <div className="order-info__day">
                <Image  src={calendar} width="15" height="21" alt=""/>
                    <time>
                        { searchParams?.['date-depart']  && new Date(Date.parse(searchParams['date-depart']))
                                .toLocaleDateString('en-US',{
                            day:'numeric',
                            month:'short'
                        })}
                    </time>
            </div>
            <p className="order-info__count">{searchParams?.passengers} Adault</p>
        </div>
        <SortElement/>
        <Suspense  fallback={<FlightsSkeleton/>}>
            <Flights searchParams={searchParams}/>
        </Suspense>
    </section>
    </>)
}