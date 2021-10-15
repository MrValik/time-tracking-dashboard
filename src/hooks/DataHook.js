import { useState, useCallback } from 'react'

export function useDataHook() {
  const [keyName, setKeyName] = useState('daily')

  const handleChangeKeyName = useCallback(name => {
    setKeyName(name)
  }, [])

  return { handleChangeKeyName, keyName }
}