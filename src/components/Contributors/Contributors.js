import { Wrapper } from './Contributors.styles'
import Contributor from './Contributor/Contributor'

const Contributors = () => {
  const n = 10

  return (
    <Wrapper>
      <h1>Top 10 contributors</h1>
      <ul>
        {[...Array(n)].map((e, i) => (
          <Contributor key={i} />
        ))}
      </ul>
    </Wrapper>
  )
}

export default Contributors
