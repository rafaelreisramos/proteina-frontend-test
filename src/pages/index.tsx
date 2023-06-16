import type { GetServerSideProps, InferGetServerSidePropsType } from 'next'
import Head from 'next/head'
import Link from 'next/link'

import { Repository, RepositoryCard } from '../components/RepositoryCard'

export default function Home({
  repositories,
}: InferGetServerSidePropsType<typeof getServerSideProps>) {
  return (
    <div className="max-w-7xl m-auto">
      <Head>
        <title>Github repositories app</title>
        <meta name="description" content="Github repositories app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="grid m-auto">
        <header className="flex py-2 items-baseline justify-between mb-8">
          <h1 className="text-5xl">Repositories</h1>
          <Link className="text-3xl underline" href="/starreds">
            Go to starred repositories
          </Link>
        </header>

        <section className="grid gap-4 grid-cols-2 place-content-center">
          {repositories.map((repository) => {
            return (
              <RepositoryCard key={repository.id} repository={repository} />
            )
          })}
        </section>
      </main>
    </div>
  )
}

export const getServerSideProps: GetServerSideProps<{
  repositories: Repository[]
}> = async () => {
  const response = await fetch('https://api.github.com/repositories')
  const repositories = await response.json()
  return { props: { repositories } }
}
