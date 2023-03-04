import { Button, ButtonGroup } from '@chakra-ui/react'

export default function ButtonComponent(props) {
    return (
        <Button {...props} >
       {props.children}
    </Button>
  )
}