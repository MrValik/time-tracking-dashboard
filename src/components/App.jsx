import React from 'react'
import Sidebar from './Sidebar'
import CardList from './CardList'
import { useDataHook } from '../hooks/DataHook'
import DataContext from '../contexts/DataContext'


export default function App() {
  const { keyName, handleChangeKeyName } = useDataHook()

  return (
    <DataContext.Provider value={{ keyName, handleChangeKeyName }}>
      <div className="container">
        <Sidebar />
        <CardList />
      </div>
    </DataContext.Provider>
  )
}