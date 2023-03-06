import { Box, Flex } from '@chakra-ui/react'
import React from 'react'
import ButtonComponent from '../form/ButtonComponent'
import BodyText from '../text/BodyText'
import ImageComponent from './ImageComponent'

const GrowingCommunity = () => {
  return (
    <Flex paddingX={{base:'30px', md:'100px'}} paddingY='70px' alignItems='center'>
    <Box paddingX={{base:'0px', md:'60px'}}>
        <BodyText fontSize='45px' fontWeight={'semibold'} marginY='30px' >A growing community of creatives</BodyText>
        <BodyText paddingX={{ base: '10px', md: '90px%' }} fontSize={'20px'} fontWeight={'thin'} w={{ base: '', md: '' }} marginY={{ base: '30px', md: '' }}  >Lorem ipsum dolor sit amet consectetur. Eu commodo duis fames nisi eget hac ullamcorper. Convallis dolor massa id eu massa tristique.</BodyText>
        <ButtonComponent colorScheme={'yellow'} h={'40px'} w={'150px'} borderRadius={'50px'} border={'2px'} fontSize='18px' fontWeight={'semibold'} > Join Us </ButtonComponent> 
    </Box>

    <ImageComponent objectFit='cover' w={{base:'full', md:'full'}} h={'full'} display={{base:'none', md:'block'}} src={'./images/1k+.png'} />
    </Flex>
  )
}

export default GrowingCommunity