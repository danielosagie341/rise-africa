import { Flex } from '@chakra-ui/react'
import React from 'react'
import BodyText from '../text/BodyText'
import LinkComponent from '../text/LinkComponent'
import  ImageComponent from './ImageComponent'

const Header = () => {
  return (
      <Flex bg={'#1459FE'} alignItems='center' paddingLeft={'10'}>
           <LinkComponent _hover={{ color: 'red' }} color={'#FFFFFF'} p={8} >
            <ImageComponent src={'../images/rise-africa-logo.png'} p={8} />
          </LinkComponent>
          
          <LinkComponent _hover={{ color: 'red' }} color={'#FFFFFF'} p={8} >
            <BodyText>Our Programmes</BodyText>
          </LinkComponent>

          <LinkComponent _hover={{ color: 'red' }} color={'#FFFFFF'} p={8}>
            <BodyText>About Beam</BodyText>
          </LinkComponent>

          <LinkComponent _hover={{ color: 'red' }} color={'#FFFFFF'} p={8}>
            <BodyText>Community</BodyText>
          </LinkComponent>

          <LinkComponent _hover={{ color: 'red' }} color={'#FFFFFF'} p={8}>
            <BodyText>Contact</BodyText>
          </LinkComponent>
      </Flex>
  )
}

export default Header