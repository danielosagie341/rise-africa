import { Box, Flex } from '@chakra-ui/react'
import React from 'react'
import BodyText from '../text/BodyText'
import ReasonsCard from './ReasonsCard'

const StudyWithRise = () => {
  return (
      <Flex paddingX={{base:'30px', md:'150px'}} alignItems='center' flexDirection={{base:'column', md:'row'}}>
          <Box w={{base:'100%', md:'600px'}} marginRight={{base:'0', md:'90px'}} textAlign={{base:'center', md:'left'}}>
            <BodyText fontSize={{ base: '40px', md: '40px' }} fontWeight={'bold'} marginY='30px' >why you should study with rise</BodyText>
            <BodyText textAlign='left' fontSize={'18px'} fontWeight={'thin'} borderLeft='1px' marginX='20px' paddingX='20px' >Lorem ipsum dolor sit amet consectetur. Proin platea porttitor ornare quam in ut tellus scelerisque eu. Dolor arcu nunc quam rhoncus id vitae sodales. Maecenas tempor faucibus malesuada </BodyText>
          </Box>

          <Flex flexWrap='wrap'>
            <ReasonsCard color='#42C06C' bg=' rgba(66, 192, 108, 0.05)' title='self paced learning' >Lorem ipsum dolor sit  consectetur. Proin platea porttitor ornare quam in ut tellus scelerisque eu</ReasonsCard>
            <ReasonsCard color='#FFCC00' bg=' rgba(255, 204, 0, 0.05)' title='Experienced Tutors' >Lorem ipsum dolor sit amet consectetur. Proin platea porttitor ornare quam in ut tellus scelerisque eu</ReasonsCard>
            <ReasonsCard color='#EB5429' bg=' rgba(235, 84, 41, 0.05)' title='Updated syllables' >Lorem ipsum dolor sit amet consectetur. Proin platea porttitor ornare quam in ut tellus scelerisque eu</ReasonsCard>
            <ReasonsCard color='#1459FE' bg=' rgba(20, 89, 254, 0.05)' title='Industry Standard' >Lorem ipsum dolor sit amet consectetur. Proin platea porttitor ornare quam in ut tellus scelerisque eu</ReasonsCard>
          </Flex>
      </Flex>
  )
}

export default StudyWithRise