import { Button, Box } from '@chakra-ui/react'
import ImageComponent from '../uiElement/ImageComponent'
import ButtonComponent from './ButtonComponent'

export default function DoubleButtonComponent() {
    return (
        <Button h={'fit-content'} colorScheme={'none'} p={4} pos='relative' marginY={'30px'}>
            <ButtonComponent colorScheme={'yellow'} h={'70px'} w={'200px'} zIndex={'2'} borderRadius={'50px'} border={'2px'} >
                Get Started
                <ImageComponent paddingLeft={3} src={'./images/right-arrow.png'} w={'35px'} />
            </ButtonComponent>
            <ButtonComponent pos={'absolute'} left={'20px'} top={'20px'} h={'70px'} w={'200px'} borderRadius={'50px'} border={'2px'} colorScheme={'green'} borderColor={'black' } />
        </Button>
  )
}