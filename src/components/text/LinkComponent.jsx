
import { Link } from '@chakra-ui/react'

export default function LinkComponent(props) {
  return (
    <Link {...props} fontWeight='bold' marginX='10px' _hover={{textDecoration:'none', color:'white', bg:'#1459FE'}}>
      {props.children}
    </Link>
  )
}