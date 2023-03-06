import { Box, Flex } from '@chakra-ui/react'
import React from 'react'
import BodyText from '../text/BodyText'
import ImageComponent from './ImageComponent'

const NeedCareer = () => {
  return (
      <Flex bg='#1459FE' alignItems='center' textAlign={{base:'center', md:'left'}} marginY={{base:'30px', md:''}} h={{base:'600px', md:''}} flexDirection={{base:'column', md:'row'}}>
        <BodyText fontSize={{base:'40px', md:'50px'}} color='white' fontWeight={'semibold'} paddingLeft={{base:'0px', md:'200px'}} marginY={{base:'30px', md:''}} >Need a new career? We’ve got you</BodyText>
        <ImageComponent objectFit='cover' w={{base:'full', md:'50%'}} h={'full'} src={'./images/smiling-woman.png'} />
      </Flex>
  )
}

export default NeedCareer