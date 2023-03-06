import React, {useState} from 'react'
import BodyText from '../text/BodyText'
import LinkComponent from '../text/LinkComponent'
import ImageComponent from './ImageComponent'
import {RxHamburgerMenu} from 'react-icons/rx'
import {
  Flex,
  Button,
  Drawer,
  DrawerBody,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  useDisclosure,
} from '@chakra-ui/react'

const Header = () => {

  const { isOpen, onOpen, onClose } = useDisclosure()
  const [placement, setPlacement] = useState('right')

  return (
      <Flex bg={{ base: '#1459FE', md: '' }} justifyContent={{base:'space-between', md:'left'}} alignItems='center' paddingLeft={{ base:'0', md: '10' }}>
          <LinkComponent _hover={{ color: 'red' }} color={'#FFFFFF'} p={{ base: '2px', md: 8 }} >
            <ImageComponent src={'../images/rise-africa-logo.png'} p={8} />
          </LinkComponent>
          
          <LinkComponent _hover={{ color: 'red' }} color={'#FFFFFF'} p={8} display={{ base: 'none', md:'block' }}>
            <BodyText>Our Programmes</BodyText>
          </LinkComponent>

          <LinkComponent _hover={{ color: 'red' }} color={'#FFFFFF'} p={8} display={{ base: 'none', md:'block' }}>
            <BodyText>About Beam</BodyText>
          </LinkComponent>

          <LinkComponent _hover={{ color: 'red' }} color={'#FFFFFF'} p={8} display={{ base: 'none', md:'block' }}>
            <BodyText>Community</BodyText>
          </LinkComponent>

          <LinkComponent _hover={{ color: 'red' }} color={'#FFFFFF'} p={8} display={{ base: 'none', md:'block' }}>
            <BodyText>Contact</BodyText>
          </LinkComponent>



            <Button bg='transparent' fontSize='30px' color='white' display={{ base: 'block', md:'none' }} marginRight={'30px'} onClick={onOpen}>
                <RxHamburgerMenu />
            </Button>
            <Drawer placement={placement} onClose={onClose} isOpen={isOpen}>
                <DrawerOverlay />
                <DrawerContent>
                    <DrawerHeader borderBottomWidth='1px'>RISE AFRICA</DrawerHeader>
                    <DrawerBody>
                        <LinkComponent _hover={{ color: 'red' }} color={'black'} p={8}>
                            <BodyText>Our Programmes</BodyText>
                        </LinkComponent>
                      
                        <LinkComponent _hover={{ color: 'red' }} color={'black'} p={8}>
                            <BodyText>About Beam</BodyText>
                        </LinkComponent>
                      
                        <LinkComponent _hover={{ color: 'red' }} color={'black'} p={8}>
                            <BodyText>Community</BodyText>
                        </LinkComponent>
                      
                        <LinkComponent _hover={{ color: 'red' }} color={'black'} p={8}>
                            <BodyText>Contact</BodyText>
                        </LinkComponent>
                    </DrawerBody>
                </DrawerContent>
            </Drawer>
      </Flex>
  )
}

export default Header