import { Flex } from '@chakra-ui/react'
import {SlGraduation} from 'react-icons/sl'

export default function AcademicCapComponent(props) {
    return (
        <Flex {...props} w='60px' h='60px' borderRadius='50%' alignItems='center' justifyContent='center'>
            <SlGraduation fontSize='35px' />    
        </Flex>
        
  )
}
