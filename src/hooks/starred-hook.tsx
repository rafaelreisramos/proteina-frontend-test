'use client'

import {
  ReactNode,
  createContext,
  useState,
  useContext,
  useEffect,
} from 'react'
import { Repository } from '../components/RepositoryCard'

function getInitialState() {
  if (typeof window === 'undefined') {
    return []
  }

  const starreds = localStorage.getItem('starreds')
  return starreds ? JSON.parse(starreds) : []
}

export const StarredContext = createContext({
  starreds: [] as Repository[],
  setStarreds: (value: Repository[]) => {},
  addToStarreds: (repository: Repository) => {},
  removeFromStarreds: (repository: Repository) => {},
})

interface ProviderProps {
  children: ReactNode
}

export function StarredContextProvider({ children }: ProviderProps) {
  const [starreds, setStarreds] = useState(getInitialState)

  useEffect(() => {
    const starredRepos = localStorage.getItem('starreds')
    setStarreds(starredRepos ? JSON.parse(starredRepos) : [])
  }, [])

  useEffect(() => {
    localStorage.setItem('starreds', JSON.stringify(starreds))
  }, [starreds])

  function addToStarreds(repository: Repository) {
    setStarreds([...starreds, repository])
    localStorage.setItem('starreds', JSON.stringify([...starreds, repository]))
  }

  function removeFromStarreds(repository: Repository) {
    const updatedStarred = starreds.filter(
      (item: Repository) => item.id !== repository.id
    )
    setStarreds(updatedStarred)
    localStorage.setItem('starreds', JSON.stringify(updatedStarred))
  }

  return (
    <StarredContext.Provider
      value={{
        starreds,
        setStarreds,
        addToStarreds,
        removeFromStarreds,
      }}
    >
      {children}
    </StarredContext.Provider>
  )
}

export function useStarred() {
  const context = useContext(StarredContext)

  if (!context)
    throw new Error('useStarred must be used within a StarredProvider')

  const { starreds, addToStarreds, removeFromStarreds } = context
  return { starreds, addToStarreds, removeFromStarreds }
}
