import Image from 'next/image'
import Link from "next/link";
import capture from '../../../public/img/Capture 1.jpg'
import capture3 from '../../../public/img/Capture3 1.jpg'
import login from '../../../public/img/icons/login.svg'
export default function  Footer(){
    return <footer className="footer container">
        <nav className="footer__top">
            <ul>
                <li className="footer__link"><Link href="" >Products and services</Link> </li>
                <li className="footer__link"><Link href="">Cancellation Protection </Link> </li>
            </ul>
            <ul>
                <li className="footer__link"><Link href="" >About Us  </Link></li>
                <li className="footer__link"><Link href="" >About Us <br/> Terms and Conditions  </Link></li>
            </ul>
            <ul>
                <li className="footer__link"><Link href="" >Support  </Link></li>
                <li className="footer__link"><Link href="" >Contact us  </Link></li>
                <li className="footer__link"><Link href="" >FAQ  </Link></li>
            </ul>
            <ul>
                <li className="footer__link"><Link href="/login" >Login  </Link></li>
                <li className="footer__link"><Link href="" >
                    <button className="footer__to-login btn btn_not-back">
                        <Image width="35" height="35" src={login} alt=""/>
                        <p>My Booking</p></button>
                </Link>
                </li>
            </ul>
        </nav>
        <div className="footer__down">
            <Image width="401" height="50"  src={capture} alt="visa american express"/>

            <Image width="742" height="66" src={capture3} alt="amadeus sabre"/>
        </div>
    </footer>
}