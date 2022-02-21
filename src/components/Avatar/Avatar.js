import { Image } from './Avatar.styles'

const Avatar = ({ dimensions, src, ...props }) => {
  return (
    <Image src={src} height={`${dimensions}px`} width={`${dimensions}px`} {...props} />
  )
}

export default Avatar
