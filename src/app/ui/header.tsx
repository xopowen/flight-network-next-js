import Image from "next/image";
import Link from "next/link";
import kisspng from '../../../public/img/kisspng-qantas-wikipedia-lo.png'

export default function Header(){
    return <header className="header container">
        <div className="header__logo-and-name">
            <Image width="101" height="83" src={kisspng} alt=""/>
            <strong>Flight Network</strong>
        </div>

        <nav className="header__nav" itemScope itemType="http://schema.org/SiteNavigationElement">
            <ul itemScope itemType={'http://schema.org/ItemList'}>
                <li itemProp="itemListElement" itemScope itemType="http://schema.org/ItemList">
                    <Link itemProp="url" className="header__link" href="">Support</Link>
                    <meta itemProp="name" content="Support"/>
                </li>
                <li>
                    <Link className="header__link" href="">Contact Us </Link>
                </li>
                <li><Link className="header__link" href="">Airline information</Link></li>
            </ul>
        </nav>

        <nav itemScope itemType="http://schema.org/SiteNavigationElement">
            <ul itemScope itemType='http://schema.org/ItemList'>
                <li itemProp="itemListElement" itemScope itemType="http://schema.org/ItemList">
                    <Link itemProp="url" href="/">Support</Link>
                    <meta itemProp="name" content="Support"/>
                </li>
            </ul>
        </nav>
    </header>
}