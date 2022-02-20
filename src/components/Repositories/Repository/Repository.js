import { Avatar, Wrapper } from './Repository.styles'

const Repository = () => {
  const n = 5

  return (
    <Wrapper>
      <Avatar />
      <div>
        <h3>Repository name</h3>
        <p>Author: Ariel Pires de Almeida</p>
        {[...Array(n)].map((e, i) => (
          <img src="/icons/star.png" alt="star" key={i} />
        ))}
      </div>
    </Wrapper>
  )
}

export default Repository
