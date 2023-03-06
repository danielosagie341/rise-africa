import { Box } from '@chakra-ui/react'
import React from 'react'
import BodyText from '../text/BodyText'
import AcademicCapComponent from './AcademicCapComponent'

const ReasonsCard = (props) => {
  return (
      <Box w='350px' paddingX='35px' marginX='30px' marginY='50px'>
          <AcademicCapComponent {...props} />
          <BodyText fontSize={'25px'} fontWeight='bold' marginY={'10px'} >{props.title}</BodyText>
            <BodyText fontSize={'17px'} fontWeight={'thin'} >{props.children}</BodyText>
      </Box>
  )
}

export default ReasonsCard