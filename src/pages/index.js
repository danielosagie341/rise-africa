import { Button } from '@chakra-ui/react'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import DoubleButtonComponent from '@/components/form/DoubleButtonComponent'
import AcademicCapComponent from '@/components/uiElement/AcademicCapComponent'
import Hero from '@/components/uiElement/Hero'


const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
   <Hero />
  )
}
