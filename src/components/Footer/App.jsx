import { Box, Image, Stack } from '@chakra-ui/react'
import * as React from 'react'
import { Copyright } from './Copyright'
import logo from '../../assets/images/logo.png';
import { SocialMediaLinks } from './SocialMediaLinks'

export const Footer = () => (
  <Box
    as="footer"
    role="contentinfo"
    mx="auto"
    maxW="7xl"
    py="12"
    px={{
      base: '4',
      md: '8',
    }}
    mt={'10'}
  >
    <Stack>
      <Stack direction="row" spacing="4" align="center" justify="space-between">
        <Image src={logo} mt={2} width='100px'/>
        <SocialMediaLinks />
      </Stack>
      <Copyright
        alignSelf={{
          base: 'center',
          sm: 'start',
        }}
      />
    </Stack>
  </Box>
)
