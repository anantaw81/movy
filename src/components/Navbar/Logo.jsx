import { chakra, useToken, Image } from '@chakra-ui/react'
import * as React from 'react'
import logo from '../../assets/images/logo.png';

export const Logo = (props) => {
  const { iconColor = 'currentColor', ...rest } = props
  const color = useToken('colors', iconColor)
  return (
    <Image src={logo} sizes={100}/>
  )
}
