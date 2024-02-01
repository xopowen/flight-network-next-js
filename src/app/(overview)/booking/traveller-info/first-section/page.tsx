import ContactInfoForAllPassengers from "@/app/(overview)/booking/traveller-info/first-section/ui/ContactInfoForAllPassengers";
import FormPassenger from "@/app/(overview)/booking/traveller-info/first-section/ui/FormPassenger";
import ListAddService from "@/app/(overview)/booking/traveller-info/first-section/ui/additionalService/ListAddService";
import SendAllFormButton from "@/app/(overview)/booking/traveller-info/ui/SendAllFormButton";
import {Metadata} from "next";

export const metadata: Metadata = {
    title:'First section for booking|'
}
export default async function Page({searchParams}:{searchParams:Object}){
    let countPassengers = +searchParams?.['passengers'];

    return <>
        <ContactInfoForAllPassengers/>
        <>
            {countPassengers && new Array(countPassengers).fill('').map((val,ind)=>{
                return <FormPassenger order={ind} key={ind}/>
            })}
        </>
        <ListAddService countPassengers={countPassengers}/>
        <SendAllFormButton/>
    </>
}