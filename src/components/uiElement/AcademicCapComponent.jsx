import { Flex } from '@chakra-ui/react'
import {SlGraduation} from 'react-icons/sl'

export default function AcademicCapComponent(props) {
    return (
        <Flex bg={props.bg} w={props.w} h={props.h} borderRadius={props.borderRadius} alignItems='center' justifyContent='center'>
            <SlGraduation {...props} />    
        </Flex>
        
  )
}
