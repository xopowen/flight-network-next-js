import screenshot from '../../../../../../../../public/img/Screenshot 2022-12-16 160342.jpg'
import shopping from '../../../../../../../../public/img/icons/shopping-bag.svg'
import Image from "next/image";
import ButtonAdd from "@/app/(overview)/booking/traveller-info/first-section/ui/additionalService/buttonAdd";
import RadioAdd from "@/app/(overview)/booking/traveller-info/first-section/ui/additionalService/RadioAdd";

export default async function ListAddService({countPassengers}:{countPassengers:number}){


    return <>
        <article className="add-service lato lato_700">
            <h2 className="text-size_35 add-service__head">
                Hand Baggage
            </h2>
            <div className="gray-border add-service__main text-size_22">
                <Image src={shopping} width="512" height="512" alt=""/>
                <div className="add-service__info ">
                    <h3 className="add-service__name lato_800">Hand baggage</h3>
                    <p className="add-service__mass lato_400">{countPassengers}X7 Kg</p>
                </div>
                <ButtonAdd uid={1} title={'Hand baggage'} count={countPassengers}/>
            </div>
        </article>
        <article className="add-service lato lato_700">
            <h2 className="text-size_35 add-service__head">
                Checked baggage
            </h2>
            <div className="gray-border add-service__main text-size_22">
                <Image src={shopping}  width="512" height="512" alt=""/>
                <div className="add-service__info ">
                    <h3 className="add-service__name lato_800">Checked baggage</h3>
                    <p className="add-service__mass lato_400">{countPassengers}X7 Kg</p>
                </div>
                <ButtonAdd uid={2} title={'Checked baggage'} count={countPassengers}/>
            </div>
        </article>
        <article className="lost-bag-service lato lato_700">
            <div className="lost-bag-service__img-container">
                <Image src={screenshot} width="345" height="307" alt="baggage"/>
            </div>
            <div itemScope className="lost-bag-service__main">
                <h2 className="lost-bag-service__head text-size_35">
                    Lost Baggage Service
                </h2>
                <p className="lato_400 text-size_24 lost-bag-service__text">
                    Our partner Blue Ribbon Bags helps you track lost baggage for up to 96 hours. If your bag is not
                    returned by then you will receive
                    <br/>500 USD.
                </p>
                <p className="lost-bag-service__count lato_400 text-size_22">
                    Only
                </p>
                <p className="lost-bag-service__price lato_700 text-size_30">
                    <strong>Au$ 10.86 </strong>
                    <br/>
                    for {countPassengers} passenger
                </p>
                <div className="lost-bag-service__question lato_400 text-size_24">
                    <RadioAdd uid={3} price={10.86} title={'Lost Baggage Service'} count={countPassengers}/>
                </div>
            </div>
        </article>
    </>
}