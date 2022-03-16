import { Wrapper } from './MainArea.styles'
import Card from '../../molecules/Card/Card'
import Avatar from '../../atoms/Avatar/Avatar'
import { useEffect, useState } from 'react'
import fetchAppDataByRepos from '../../../utils/fetchAppDataByRepos'
import Star from '../../atoms/Star/Star'

const MainArea = () => {
  const [repos, setRepos] = useState()

  const n = 5
  const m = 10

  useEffect(() => {
    const fetchRepos = async () => {
      setRepos(await fetchAppDataByRepos())
    }
    fetchRepos()
  }, [])

  console.log(repos)
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
