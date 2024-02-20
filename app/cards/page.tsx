import React, { Suspense } from 'react'
import {sort}  from 'fast-sort';
import Link from 'next/link';
import Card from '../components/card';

interface CardProps {
    id: number,
    type: string,
    setup: string,
    punchline: string
}
interface Props {
    searchParams: {
      sortOrder: string
    }
  }
  

const API =  'https://official-joke-api.appspot.com/random_ten';

const CardsPage = async({searchParams: {sortOrder}} : Props) => {

    const res = await fetch(API);
    const cards: Card[] = await res.json();

    const sortedCardsAsc = sort(cards).asc(card => card.id);
    const sortedCardsDesc = sort(cards).desc(card => card.id);
    const sortedCards = sortOrder === 'id_asc' ? sortedCardsAsc : sortedCardsDesc;

  return (
    <div className='flex flex-col justify-center gap-5 items-center'>
        <div className='flex gap-5 mt-10'>
            <Link href="/cards?sortOrder=id_asc"><button className="btn btn-primary">ASC</button></Link>
            <Link href="/cards?sortOrder=id_desc"><button className="btn btn-primary">DESC</button></Link>
        </div>

          {sortedCards.map((card: CardProps) => (
          <Card key={card.id} id={card.id} type={card.type} setup={card.setup} punchline={card.punchline} />
          ))
          }
    </div>
  )
}

export default CardsPage