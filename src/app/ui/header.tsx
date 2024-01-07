import Image from "next/image";
import Link from "next/link";
import kisspng from '../../../public/img/kisspng-qantas-wikipedia-lo.png'

export default function Header(){
    return <header className="header container">
        <div className="header__logo-and-name">
            <Image width="101" height="83" src={kisspng} alt=""/>
            <strong>Flight Network</strong>
        </div>
        <nav className="header__nav">
            <ul>
                <li><Link className="header__link" href="">Support</Link></li>
                <li><Link className="header__link" href="">Contact Us </Link></li>
                <li><Link className="header__link" href="">Airline information</Link></li>
            </ul>
        </nav>
    </header>
}