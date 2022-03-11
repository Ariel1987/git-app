import { Wrapper, Section } from './Card.styles'

const Card = ({ left, children, right }) => {
  return <Wrapper>
    <Section>{left}</Section> 
    <Section>{children}</Section> 
    <Section>{right}</Section> 
  </Wrapper>
}

export default Card
