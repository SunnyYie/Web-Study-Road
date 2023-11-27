import { useParams, useSearchParams } from 'react-router-dom'

export default function About() {
  const [params] = useSearchParams()
  const id = params.get('id')

  const param = useParams()
  const ids = param.id

  return (
    <div>
      关于页{id}
      {ids}
    </div>
  )
}
