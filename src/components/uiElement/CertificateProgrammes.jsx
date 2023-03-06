import { Box, Flex } from '@chakra-ui/react'
import React from 'react'
import BodyText from '../text/BodyText'
import LinkComponent from '../text/LinkComponent'

const CertificateProgrammes = () => {
  return (
    <Flex color='#465A69' textAlign='center' flexDirection='column' alignItems='center' marginY='50px' >
      <BodyText fontSize={{ base: '40px', md: '40px' }} fontWeight={'bold'} >Our certificate programes </BodyText>
      <BodyText paddingX={{ base: '10px', md: '90px%' }} fontSize={'20px'} fontWeight={'thin'} w={{base:'', md:'600px'}} marginY={{ base: '30px', md: '' }} >Lorem ipsum dolor sit amet consectetur. Eu commodo duis fames nisi eget hac ullamcorper. Convallis dolor massa id eu massa tristique.</BodyText>

      <Flex>
        <LinkComponent fontSize={'20px'} paddingX='30px' paddingY='10px' borderRadius='50px' border='1px' >Virtual</LinkComponent>
        <LinkComponent fontSize={'20px'} paddingX='30px' paddingY='10px' borderRadius='50px' border='1px' >Onsite</LinkComponent>
      </Flex>
        
    </Flex>
  )
}

export default CertificateProgrammes