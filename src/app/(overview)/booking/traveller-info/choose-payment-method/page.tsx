
import {Metadata} from "next";

import TotalAmount from "@/app/(overview)/booking/traveller-info/choose-payment-method/ui/TotalAmount";

import RadioChooseMethod from "@/app/(overview)/booking/traveller-info/choose-payment-method/ui/RadioChooseMethod";

export const metadata: Metadata = {
    title:'Choose payment method|'
}
export default async function Page({searchParams}){
    let active : 'card'|'pypy' = 'card'
    let timeOut = await new Promise((resolve => {
        setTimeout(resolve,2000
        )
    }))


    return <form    className="travel-info__main">
        <RadioChooseMethod/>
        <TotalAmount/>
    </form>
}