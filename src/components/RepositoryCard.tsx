import { Star } from 'phosphor-react'
import { useEffect, useState } from 'react'
import { useStarred } from '../hooks/starred-hook'

export interface Repository {
  id: string
  name: string
  description: string
  html_url: string
}

type RepositoryCardProps = {
  repository: Repository
}

export function RepositoryCard({ repository }: RepositoryCardProps) {
  const { starreds, addToStarreds, removeFromStarreds } = useStarred()
  const [like, setLike] = useState(false)

  useEffect(() => {
    const findIndex = starreds.findIndex((item) => item.id === repository.id)
    findIndex < 0 ? setLike(false) : setLike(true)
  }, [repository.id, starreds])

  function handleStarred() {
    const findIndex = starreds.findIndex((item) => item.id === repository.id)
    findIndex < 0 ? addToStarreds(repository) : removeFromStarreds(repository)
  }

  return (
    <div className="flex flex-col gap-2 border-solid border-2 rounded-lg p-4">
      <h2 className="text-xl font-bold text-gray-100">{repository.name}</h2>
      <p className="text-gray-400">{repository.description}</p>
      <a
        className="text-sm text-gray-500"
        href={repository.html_url}
        target="_blank"
      >
        {repository.html_url}
      </a>
      <Star
        color="#ffff00"
        weight={like ? 'fill' : 'regular'}
        size={24}
        onClick={handleStarred}
      />
    </div>
  )
}
