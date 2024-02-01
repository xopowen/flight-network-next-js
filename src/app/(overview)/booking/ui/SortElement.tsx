'use client'
import Image from "next/image";
import certificate from "../../../../../public/img/icons/certificate-bkue 1.svg";
import clock from "../../../../../public/img/icons/clock 1.svg";
import dollar from "../../../../../public/img/icons/dollar 1.svg";
import star from "../../../../../public/img/icons/star 1.svg";
import {usePathname, useRouter, useSearchParams} from "next/navigation";
import { useState} from "react";



export enum EnumFlightSortParams {
    price = 'price' ,
    timeFly = "time-fly",
    company='company'
}

/**
 * @description елемент для сортировки Flight
 * @description добовляет в url сортировку по цене или по времени в пути
 * @constructor
 */
export  default   function SortElement( ){
    let searchParams = useSearchParams()
    let [sortedParam,setSortedParam] = useState(searchParams?.sorted)
    const pathname = usePathname();
    const { replace } = useRouter();

    function setSortParamToUrl(param:EnumFlightSortParams|undefined){
        let urlParams =  new URLSearchParams(searchParams)
        if(param === sortedParam){
            return
        }
        if(!param){
            urlParams.delete('sorted')
            setSortedParam(undefined)
        }else{
            urlParams.set('sorted',param)
            setSortedParam(param)
        }
        replace(`${pathname}?${urlParams.toString()}`, { shallow: true });

    }

    return <div className="booking__orders gray-border">
        <div className={`order-card ${ sortedParam ? '':'order-card_active' }`} onClick={()=>setSortParamToUrl(undefined)}>
            <Image width={45} height={45}  src={certificate} alt=""/>
            <p className="lato lato_700 text-size_16"> Recommended</p>
            <p className="lato lato_700 text-size_20">AU${ 350 }</p>
        </div>
        <div className={`order-card ${ sortedParam && sortedParam===EnumFlightSortParams.timeFly && 'order-card_active' }`}
             onClick={()=>setSortParamToUrl(EnumFlightSortParams.timeFly)}>
            <Image width={45} height={45} src={clock} alt=""/>
            <p className="lato lato_700 text-size_16"> Shortest</p>
            <p className="lato lato_700 text-size_20">AU${ 330 }</p>
        </div>
        <div className={`order-card ${ sortedParam && sortedParam===EnumFlightSortParams.price && 'order-card_active' }`}
             onClick={()=>setSortParamToUrl(EnumFlightSortParams.price)}>
            <Image width={45} height={45} src={dollar} alt=""/>
            <p className="lato lato_700 text-size_16"> Cheapest</p>
            <p className="lato lato_700 text-size_20">AU${ 310 }</p>
        </div >
        <div className={`order-card ${sortedParam && sortedParam===EnumFlightSortParams.company && 'order-card_active' }`}  onClick={()=>setSortParamToUrl(EnumFlightSortParams.company)}>
            <Image width={45} height={45}  src={star} alt=""/>
            <p className="lato lato_700 text-size_16"> Campaign</p>
            <p className="lato lato_700 text-size_20">AU${ 370 }</p>
        </div>
    </div>

}