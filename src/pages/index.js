import { Button } from '@chakra-ui/react'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import DoubleButtonComponent from '@/components/form/DoubleButtonComponent'
import AcademicCapComponent from '@/components/uiElement/AcademicCapComponent'
import HomePage from './HomePage'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
   <HomePage />
  )
}
