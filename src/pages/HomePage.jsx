import Header from '@/components/uiElement/Header'
import Hero from '@/components/uiElement/Hero'
import React from 'react'
import { Box, Flex } from '@chakra-ui/react'
import BodyText from '@/components/text/BodyText'
import ImageComponent from '@/components/uiElement/ImageComponent'
import StudyWithRise from '@/components/uiElement/StudyWithRise'
import NeedCareer from '@/components/uiElement/NeedCareer'
import CertificateProgrammes from '@/components/uiElement/CertificateProgrammes'
import GrowingCommunity from '@/components/uiElement/GrowingCommunity'
import Newsletter from '@/components/uiElement/Newsletter'
import Footer from '@/components/uiElement/Footer'

const HomePage = () => {
  return (
    <Box>
      <Header />
      <Hero />

      <Flex paddingX={{base:'30px', md:'100px'}} paddingY='100px' alignItems={'center'} flexDirection={{base:'column', md:'row'}} >
        <ImageComponent p={{base:'0px', md:'50px'}} objectFit='cover' w={'full'} h={'full'} src={'./images/group-of-pictures.png'} />
        
        <Flex flexDirection={'column'} paddingX={{base:'10px', md:'50px'}}  alignItems={'center'} textAlign={{base:'center', md:'left'}}>
            
          <BodyText fontSize={{base:'40px', md:'50px'}} fontWeight={'semibold'} marginTop={'50px'} >Building great talents from Africa starting with you</BodyText>
          <BodyText fontSize={'20px'} fontWeight={'thin'} marginY={'20px'} >Lorem ipsum dolor sit amet consectetur. Eu commodo duis fames nisi eget hac ullamcorper. Convallis dolor massa id eu massa tristique.</BodyText>

          <Flex alignItems='center'>
            <ImageComponent p='7px' marginX={'10px'} borderRadius={'50%'} border={'1px'} w={'30px'} h={'30px'} src={'./images/right-arrow.png'} />
            <BodyText fontSize={'25px'} marginY={'10px'} >Read more</BodyText>
          </Flex>

        </Flex>
      </Flex>

      <StudyWithRise />
      <NeedCareer />
      <CertificateProgrammes />
      <GrowingCommunity />
      <Newsletter />
      <Footer />
    </Box>
  )
}

export default HomePage