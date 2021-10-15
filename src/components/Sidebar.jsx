import React, { useContext, useCallback } from 'react'
import DataContext from '../contexts/DataContext'


const menu = [
  { id: 1.1, title: 'Daily' },
  { id: 1.2, title: 'Weekly' },
  { id: 1.3, title: 'Monthly' }
]


export default function Sidebar() {
  const { keyName, handleChangeKeyName } = useContext(DataContext)

  const isActive = useCallback(name => {
    return keyName === name ? 'active' : ''
  }, [keyName])


  return (
    <div className="sidebar">
      <div className="user-details">
        <img  
          src="./image-jeremy.png"
          alt="user-avatar"
          className="user-avatar"
        />

        <div className="content">
          <p className="text">Report for</p>
          <h2 className="user-name">Jeremy Robson</h2>
        </div>
      </div>

      <ul className="menu">
        {menu?.map(item => {
          return (
            <li 
              key={item?.id}
              className={isActive(item?.title.toLowerCase())}
            >
              <span onClick={() => handleChangeKeyName(item?.title.toLowerCase())}>{item?.title}</span>
            </li>
          )
        })}
      </ul>
    </div>
  )
}