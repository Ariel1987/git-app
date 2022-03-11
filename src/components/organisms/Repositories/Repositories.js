import { Wrapper } from './Repositories.styles'
import Card from '../../molecules/Card/Card'
import Avatar from '../../atoms/Avatar/Avatar'

const Repositories = () => {
  const n = 5
  const m = 10

  return (
    <Wrapper>
      <h1>Top 10 repositories</h1>
      <ul>
        {[...Array(m)].map((e, i) => (
          <Card
            key={i}
            left={
              <Avatar src="/imgs/avatar.jpg" alt="avatar" dimensions={100} />
            }
            right={
              <>
                <p>17k</p>
                <img src="/icons/view.png" alt="views" height="18px" style={{ paddingLeft: '5px' }} />
              </>
            }
          >
            <h3>Repository name</h3>
            <p>Author: Ariel Pires de Almeida</p>
            <div style={{ display: 'flex' }}>
              {[...Array(n)].map((e, i) => (
                <img src="/icons/star.png" alt="star" key={i} height="15px" />
              ))}
            </div>
          </Card>
        ))}
      </ul>
    </Wrapper>
  )
}

export default Repositories
