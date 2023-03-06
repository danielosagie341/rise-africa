import { Box, Flex } from '@chakra-ui/react'
import React from 'react'
import DoubleButtonComponent from '../form/DoubleButtonComponent'
import BodyText from '../text/BodyText'
import Header from './Header'
import ImageComponent from './ImageComponent'

const Hero = () => {
  return (
    <Box>

      <Box h={{base:'1000px', md:'1000px'}}  overflow="hidden" borderBottomRadius={{base:'0px', md:'350px'}}  bg={'#1459FE'} >
        
        <Flex w={'100%'} textAlign='center' alignItems='center' justifyContent='center' flexDirection='column' paddingX={{base:'10px', md:'25%'}} paddingY={'90px'}>
          <BodyText color='white' fontSize={{base:'40px', md:'70px'}} fontWeight={'bold'} marginY={{base:'0px', md:'10px'}} >Growing the future tech talents of Africa</BodyText>
          <BodyText paddingX={{base:'10px', md:'90px%'}} fontSize={'25px'} fontWeight={'thin'} color='white' >Empowering African youths with the right tool, resources, and support to achieve their dream careers in tech.</BodyText>
          <DoubleButtonComponent />  
        </Flex>

        <ImageComponent src={'./images/boy-and-clouds.png'} objectFit='cover' w={'full'} h={{base:'50%', md:''}} />
          
      </Box>

    </Box>
  )
}

export default Hero