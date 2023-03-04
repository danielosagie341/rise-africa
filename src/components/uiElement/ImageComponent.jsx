import { Image } from '@chakra-ui/react'

export default function ImageComponent(props) {
    return (
        <Image
            src={props.src}
            alt={props.alt ? props.alt : 'rise africa image '}
         {...props}
  />
  )
}
