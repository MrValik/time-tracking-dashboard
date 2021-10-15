import React, { useContext } from 'react'
import data from '../data.json'
import CardItem from './CardItem'
import DataContext from '../contexts/DataContext'


export default function CardList() {
  const { keyName } = useContext(DataContext)

  return (
    <div className="card-list">
      {data?.map(item => {
        return <CardItem 
                key={item.id} 
                title={item.title} 
                timeframe={item.timeframes[keyName]}
              />
      })}
    </div>
  )
}