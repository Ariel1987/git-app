import { Wrapper } from './Contributors.styles'
import Card from '../../molecules/Card/Card'
import Avatar from '../../atoms/Avatar/Avatar'

const Contributors = () => {
  const m = 10
  const n = 5

  return (
    <Wrapper>
      <h1>Top 10 contributors</h1>
      <ul>
        {[...Array(m)].map((e, i) => (
          <Card
            key={i}
            left={
              <Avatar src="/imgs/avatar.jpg" alt="avatar" dimensions={50} />
            }
            right={
              <>
                <p>17k</p>
                <img
                  src="/icons/view.png"
                  alt="views"
                  height="18px"
                  style={{ paddingLeft: '5px' }}
                />
              </>
            }
          >
            <h3>Ariel1987</h3>
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

export default Contributors
