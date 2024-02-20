import React from 'react'
import { Suspense } from 'react'
import CardSkeleton from './card-skeleton'

interface Card {
    id: number,
    type: string,
    setup: string,
    punchline: string
}

const Card = ({ id, type, setup, punchline }: Card) => {
  return (
    <Suspense fallback={<CardSkeleton/>}>
    <div className="card w-96 bg-base-100 shadow-xl">  
        <div className="card-body">
            <h1 className="card-title text-green-800">{id}</h1>
            <h2 className="card-title">{setup}</h2>
            <p>{punchline}</p>
            <div className="card-actions justify-end">
              <div className="badge badge-outline text-green-800">{type}</div>
            </div>
        </div>
    </div>
  </Suspense>
  )
}

export default Card