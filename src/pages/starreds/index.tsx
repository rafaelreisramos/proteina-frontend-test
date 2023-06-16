import Link from 'next/link'
import { RepositoryTable } from '../../components/RepositoryTable'

export default function StarredRepositories() {
  return (
    <div className="max-w-7xl m-auto">
      <main className="grid m-auto">
        <header className="flex py-2 items-baseline justify-between mb-8">
          <h1 className="text-5xl">Starred Repositories</h1>
          <Link className="text-3xl underline" href="/">
            Back to all repositories
          </Link>
        </header>
        <RepositoryTable />
      </main>
    </div>
  )
}
