import { Wrapper } from './RightSideBar.styles'
import Card from '../../molecules/Card/Card'
import Avatar from '../../atoms/Avatar/Avatar'
import { useEffect, useState } from 'react'
import fetchAppDataByUsers from '../../../utils/fetchAppDataByUsers'

const RightSideBar = () => {
  const [repos, setRepos] = useState()

  useEffect(() => {
    const fetchRepos = async () => {
      setRepos(await fetchAppDataByUsers())
    }
    fetchRepos()
  }, [])

  return (
    <Wrapper>
      <h1>Top 10 contributors</h1>
      <ul>
        {repos?.data.slice(0, 10).map((data) => (
          <Card
            key={data.id}
            left={
              <Avatar src={data.avatar_url} alt="avatar" dimensions={50} />
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
            <h3><a href={data.html_url}>{data.login}</a></h3>
          </Card>
        ))}
      </ul>
    </Wrapper>
  )
}

export default RightSideBar
