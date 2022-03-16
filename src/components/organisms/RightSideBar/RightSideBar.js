import { Wrapper } from './RightSideBar.styles'
import Card from '../../molecules/Card/Card'
import Avatar from '../../atoms/Avatar/Avatar'
import Star from '../../atoms/Star/Star'

const RightSideBar = () => {
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
                <Star key={i} />
              ))}
            </div>
          </Card>
        ))}
      </ul>
    </Wrapper>
  )
}

export default RightSideBar
