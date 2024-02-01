
import {randomIntFromInterval} from "@/app/helpFunctions/randomIntFromInterval";
import {Flight} from "@/app/(overview)/booking/ui/Flight";

import {EnumFlightSortParams} from "@/app/(overview)/booking/ui/SortElement";

export default async function Flights( {searchParams}){
    searchParams = new URLSearchParams(searchParams)

    let  listFlight  =  await new Promise((resolve => {
        let res  =  new Array(3).fill(1).map(() => {
            let  dataUp = new Date(new Date(Date.parse(searchParams.get('date-depart')||"")).setHours(randomIntFromInterval(1,24)))
            return {
                dataUp : dataUp,
                departure: new Date(Date.parse(searchParams.get('date-depart')||'')),
                price:Math.round(Math.random()*500),
                timeDown:new Date(new Date(dataUp) .setHours(dataUp.getHours()+randomIntFromInterval(3,10))),
                toCity:searchParams.get('city-to'),
                fromCity:searchParams.get('city-from'),
                id:Math.random()*1000
            }
        })
        setTimeout(()=>{
            resolve(res)
        }, 0)

    }))

    return  <div className="booking__tickets">
            {listFlight.sort((a,b)=>{
                if(searchParams?.get('sorted') === EnumFlightSortParams.price){
                    return a[EnumFlightSortParams.price] < b[ EnumFlightSortParams.price]
                }
                if(searchParams.get('sorted') === EnumFlightSortParams.timeFly){
                    let aT = a.timeDown - a.dataUp
                    let bT =  b.timeDown - b.dataUp
                    return aT > bT
                }
                return
            }).map((data,i)=>{
                let {dataUp ,departure,price,timeDown,toCity,fromCity,id} = data
                return <Flight key={i}
                               departure={departure}
                               prise={price}
                               timeUp={dataUp}
                               timeDown={timeDown}
                               toCity={toCity}
                               fromCity={fromCity}
                               id={id}/>
            })}


        </div>


}