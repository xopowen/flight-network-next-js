
import Image from "next/image";

import airplane from '../../../../../../public/img/icons/airplane.svg';

import Loader from "@/app/ui/Loader";


export default  function FlightSkeleton (){


        return <>
            <article className="ticket">
                <p className="ticket__time-before-shipping lato lato_700 text-size_18">
                    <Loader/>
                </p>
                <p className="ticket__departure lato text-size_18 lato_400">
                    <strong className="lato_700"> DEPARTURE</strong>
                    <Loader/>
                </p>
                <div className="ticket__main">
                    <div className="ticket__price">
                        <p className="lato text-size_30 lato_800">  <Loader/></p>
                        <p className="lato lato_700 text-size_22">Price per adult</p>
                    </div>
                    <div className="ticket__time-and-city">
                        <time className="lato lato_700 text-size_26">
                            <Loader/>
                        </time>
                        <p className="lato lato_700 text-size_30"><Loader/></p>
                    </div>
                    <div className="ticket__direction-img">
                        <div className="img-circle-container">
                            <Image  src={airplane} width={33} height={33} alt="plane"/>
                        </div>
                    </div>
                    <div className="ticket__time-and-city">
                        <time className="lato lato_700 text-size_26"><Loader/></time>
                        <p className="lato lato_700 text-size_30"><Loader/></p>
                    </div>
                    <div className="ticket__footer">
                        <button  className={`btn lato lato_700 text-size_22 ticket__btn  `}>
                            Book
                        </button>
                    </div>
                </div>
            </article>
        </>
    }
