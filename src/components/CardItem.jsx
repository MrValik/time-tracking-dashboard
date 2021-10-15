import React from 'react'


export default function CardItem({ title, timeframe }) {
  return (
    <div className="card">
      <div className="card-header"></div>
      <div className="card-body">
        <div className="header">
          <h4 className="card-title">{title}</h4>
          <i>
            <svg width="21" height="5" xmlns="http://www.w3.org/2000/svg">
              <path d="M2.5 0a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5Zm8 0a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5Zm8 0a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5Z" fill="#BBC0FF" fillRule="evenodd"/>
            </svg>
          </i>
        </div>

        <div className="timeframe">
          <span className="current">{timeframe?.current}hrs</span>
          <span className="previous">Last Week - {timeframe?.previous}hrs</span>
        </div>
      </div>
    </div>
  )
}