import { Wrapper } from './Repositories.styles'
import Repository from './Repository/Repository'

const Repositories = () => {
  const n = 10

  return (
    <Wrapper>
      <h1>Top 10 repositories</h1>
      <ul>
        {[...Array(n)].map((e, i) => (
          <Repository key={i} />
        ))}
      </ul>
    </Wrapper>
  )
}

export default Repositories
