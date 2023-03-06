import { Box, Button, Flex, FormControl, Input } from '@chakra-ui/react'
import { React, useState } from 'react'
import BodyText from '../text/BodyText'
import ImageComponent from './ImageComponent'

const Newsletter = () => {
 const [input, setInput] = useState('')
    const handleForm = (e) => {
        e.preventDefault();
        console.log(input);
    }

  return (
      <Flex bg='#1459FE' justifyContent='space-around' paddingX={{base:'30px', md:''}} paddingY='50px'>
          <Box color='white' maxW='500px'>
            <BodyText fontSize={{ base: '40px', md: '40px' }} fontWeight={'semibold'} >Get on the List</BodyText>
            <BodyText textAlign='left' fontSize={'18px'} fontWeight={'thin'} marginY='30px' >Lorem ipsum dolor sit amet consectetur. Eu commodo duis fames nisi eget hac ullamcorper. Convallis dolor massa id eu massa tristique.</BodyText>
                
            <form style={{background:'white', display:'flex', justifyContent:'space-between', alignItems:'center', maxWidth:'5    00px', padding:'5px', borderRadius:'50px'}} onSubmit={handleForm}>
                <label>
                <Input color='black' paddingLeft={{base:'5px', md:'30px'}} variant='unstyled' type="email" _placeholder={{fontWeight:'bold',}} placeholder='Your Mail' onChange={(e) => setInput(e.target.value)} border='none' />
                </label>
                <Button type="submit" _hover={{textDecoration:'none', color:'white', bg:'#42C06C'}} colorScheme={'yellow'} fontSize={'20px'} paddingX='30px' paddingY='30px' borderRadius='50px' border='1px' >Subscribe</Button>
            </form>

          </Box>

            <ImageComponent objectFit='cover'  h={'full'} display={{base:'none', md:'block'}} src={'./images/animated-men.png'} />
      </Flex>
  )
}

export default Newsletter