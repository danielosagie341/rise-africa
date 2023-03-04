
import { Link } from '@chakra-ui/react'

export default function LinkComponent(props) {
  return (
    <Link {...props} fontWeight='light'>
      {props.children}
    </Link>
  )
}