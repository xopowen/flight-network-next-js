import CalculateBookFlight from "@/app/ui/forms/calculate-book-flight";
import Link from "next/link";


export default function Home() {
  return (<>
        <main>
            <section className="book-flight">
                <h1 className="book-flight__head">
                    Find the cheapest airline tickets across all airlines
                </h1>

                <div className="book-flight__calculate">
                    <h2 className="book-flight__head-calc">
                        Book Cheap Flight
                    </h2>
                 <CalculateBookFlight/>
                </div>
            </section>
            <div className="container text-cards">

                <article className="text-card">
                    <h3 className="text-card__head lato lato_700 text-size_18"><strong>Flexible Booking</strong></h3>
                    <p className="text-card__body lato lato_400 text-size_20">
                        Many airlines are relaxing their rules on
                        ticket changes. They are saying it’s OK ifyou are not totally sure; book now, and know that you
                        can change your mind later.
                    </p>
                    <Link className="text-card__link lato lato_400 text-size_17" href="#">Read More</Link>
                </article>
                <article className="text-card">
                    <h3 className="text-card__head lato lato_700 text-size_18"><strong>Flexible Booking</strong></h3>
                    <p className="text-card__body lato lato_400 text-size_20">
                        Many airlines are relaxing their rules on
                        ticket changes. They are saying it’s OK ifyou are not totally sure; book now, and know that you
                        can change your mind later.
                        ticket changes. They are saying it’s OK ifyou are not totally sure; book now, and know that you
                        can change your mind later.

                    </p>
                    <Link className="text-card__link lato lato_400 text-size_17" href="#">Read More</Link>
                </article>
                <article className="text-card">
                    <h3 className="text-card__head lato lato_700 text-size_18"><strong>Flexible Booking</strong></h3>
                    <p className="text-card__body lato lato_400 text-size_20">
                        Many airlines are relaxing their rules on
                    </p>
                    <Link className="text-card__link lato lato_400 text-size_17" href="#">Read More</Link>
                </article>

            </div>
        </main>
      </>
  )
}
