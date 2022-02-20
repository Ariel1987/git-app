import { Avatar, Wrapper } from './Contributor.styles'

const Contributor = () => {
  const n = 5

  return (
    <Wrapper>
      <Avatar />
      <div>
        <h3>User name</h3>
        {[...Array(n)].map((e, i) => (
          <img src="/icons/star.png" alt="star" key={i} />
        ))}
      </div>
    </Wrapper>
  )
}

export default Contributor
