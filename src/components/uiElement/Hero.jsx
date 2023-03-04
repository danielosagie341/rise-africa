import { Box, Flex } from '@chakra-ui/react'
import React from 'react'
import DoubleButtonComponent from '../form/DoubleButtonComponent'
import BodyText from '../text/BodyText'
import Header from './Header'
import ImageComponent from './ImageComponent'

const Hero = () => {
  return (
      <Box>
          <Header />

          <Box h={'950px'}  overflow="hidden" borderBottomRadius={'350px'}  bg={'#1459FE'}>
            
          <Flex w={'100%'} textAlign='center' alignItems='center' justifyContent='center' flexDirection='column' paddingX={'25%'} paddingY={'90px'}>
            <BodyText color='white' fontSize={'70px'} fontWeight={'bold'} marginY={'10px'} >Growing the future tech talents of Africa</BodyText>
            <BodyText paddingX={'90px'} fontSize={'25px'} fontWeight={'thin'} color='white' >Empowering African youths with the right tool, resources, and support to achieve their dream careers in tech.</BodyText>
            <DoubleButtonComponent />  
          </Flex>

          <ImageComponent src={'./images/boy-and-clouds.png'} />
          </Box>
      </Box>
  )
}

export default Hero