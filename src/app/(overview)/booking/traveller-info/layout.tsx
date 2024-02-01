import React from "react";
import ProgressDeal from "@/app/(overview)/booking/traveller-info/ui/ProgressDeal";
import YOrder from "@/app/(overview)/booking/traveller-info/ui/YOrder";


export default function bookingLayout({  children, }:
{  children: React.ReactNode }) {

    return <>
        <ProgressDeal/>
        <section className="container travel-info">
            <div className="travel-info__main">
                {children}
            </div>
            <YOrder/>
            <p className="lato lato_700 text-size_24 travel-info__option-text">
            ​In respect to ​flights, hotels, and car hire services offered on our website, we are acting solely in our
            capacity as intermediary.
            Our prices and availability are entered directly by the current providers. In respect of price changes that
            are out of our control
            and which occur after a booking query has been made but before the contract with the provider has become
            valid, the contract
            will not come into force and your payment will be refunded in full.
            </p>
        </section>

    </>

}