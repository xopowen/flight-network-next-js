import {randomIntFromInterval} from "@/app/helpFunctions/randomIntFromInterval";
import {Flight} from "@/app/(overview)/booking/ui/Flight";

import {EnumFlightSortParams} from "@/app/(overview)/booking/ui/SortElement";
import {startInfoFindFlight} from "@/app/ui/forms/calculate-book-flight";
import {FlightInfo} from "@/app/stateManagers/BookTickets";

export default async function Flights( {searchParams}:{
    searchParams?: startInfoFindFlight & {sorted?:string};
}){
    
    let  listFlight:Array<FlightInfo & {dataUp:Date}>  =  await new Promise((resolve => {
        let res:Array<any>  =  new Array(3).fill(1).map(() => {
            let  dataUp = new Date(new Date(Date.parse(searchParams?.['date-depart']||"")).setHours(randomIntFromInterval(1,24)))
            return {
                dataUp : dataUp,
                departure: new Date(Date.parse(searchParams?.['date-depart']||'')),
                price:Math.round(Math.random()*500),
                timeDown:new Date(new Date(dataUp) .setHours(dataUp.getHours()+randomIntFromInterval(3,10))),
                toCity:searchParams?.['city-to'],
                fromCity:searchParams?.['city-from'],
                id:Math.random()*1000
            }
        })
        setTimeout(()=>{
            resolve(res)
        }, 0)

    }))

    return  <div className="booking__tickets">
            {listFlight.sort((a,b)=>{
                if(searchParams?.['sorted'] === EnumFlightSortParams.price){
                    return  +(a[EnumFlightSortParams.price] < b[ EnumFlightSortParams.price])
                }
                if(searchParams?.['sorted'] === EnumFlightSortParams.timeFly){
                    let aT = a.timeDown.getTime() - a.dataUp.getTime()
                    let bT =  b.timeDown.getTime() - b.dataUp.getTime()
                    return +( aT > bT)
                }
                return 0
            }).map((data,i)=>{
                let {dataUp ,departure,price,timeDown,toCity,fromCity,id} = data
                return <Flight key={i}
                               departure={departure}
                               price={price}
                               timeUp={dataUp}
                               timeDown={timeDown}
                               toCity={toCity}
                               fromCity={fromCity}
                               id={id}/>
            })}
        </div>


}