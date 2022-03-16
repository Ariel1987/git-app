import { Wrapper } from './MainArea.styles'
import Card from '../../molecules/Card/Card'
import Avatar from '../../atoms/Avatar/Avatar'
import { useEffect, useState } from 'react'
import fetchAppDataByRepos from '../../../utils/fetchAppDataByRepos'
import Star from '../../atoms/Star/Star'

const MainArea = () => {
  const [repos, setRepos] = useState()

  const n = 5

  useEffect(() => {
    const fetchRepos = async () => {
      setRepos(await fetchAppDataByRepos())
    }
    fetchRepos()
  }, [])

  return (
    <Wrapper>
      <h1>Top 10 repositories</h1>
      <ul>
        {repos?.data.slice(0, 10).map((data) => (
          <Card
            key={data.id}
            left={
              <Avatar
                src={data.owner.avatar_url}
                alt="avatar"
                dimensions={100}
              />
            }
            right={''
              // <>
              //   <p>17k</p>
              //   <img
              //     src="/icons/view.png"
              //     alt="views"
              //     height="18px"
              //     style={{ paddingLeft: '5px' }}
              //   />
              // </>
            }
          >
            <h3>{data.name}</h3>
            <p>Author: {data.owner.login}</p>
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

export default MainArea
