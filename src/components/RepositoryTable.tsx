import { useStarred } from '../hooks/starred-hook'

export function RepositoryTable() {
  const { starreds } = useStarred()

  return (
    <table className="table-auto border-collapse border border-slate-500">
      <thead>
        <tr>
          <th className="text-3xl border border-slate-600">Name</th>
          <th className="text-3xl border border-slate-600">Description</th>
          <th className="text-3xl border border-slate-600">Url</th>
        </tr>
      </thead>
      <tbody>
        {starreds.map((starred) => (
          <tr key={starred.id}>
            <td className="text-xl font-bold text-gray-100 border border-slate-700">
              {starred.name}
            </td>
            <td className="border border-slate-700">{starred.description}</td>
            <td className="border border-slate-700">
              <a
                className="text-sm text-gray-500"
                href={starred.html_url}
                target="_blank"
              >
                {starred.html_url}
              </a>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  )
}
