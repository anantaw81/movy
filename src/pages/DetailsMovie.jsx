import React from 'react';
import {Container, Grid, Box, GridItem, Text, Heading, Stack, Badge, Image, Center, useColorModeValue as mode} from '@chakra-ui/react';
import imdb from '../assets/images/imdb.png'
import { motion } from 'framer-motion';

function DetailsMovie() {
  return (
    <Box bg='brand.500'>
    <Container maxW='6xl' minH='3xl' pt={20}>
      <Grid 
        templateRows='repeat(1, 1fr)'
        templateColumns='repeat(6, 1fr)'
        gap={4}
        >
        <GridItem colSpan={2} mr={8}>
          <Stack
            // bg={mode('white', 'gray.900')}
            color={mode('gray.800', 'gray.300')}
            align="center"
          >
            <Image
              as={motion.img}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.9 }}
              objectFit="cover"
              w={{
                base: '20',
                md: '344px',
              }}
              h={{
                base: '400',
                md: '487px',
              }}    
              src='https://bit.ly/dan-abramov'
              alt='Dan Abramov'
              mt={4}
            />
          </Stack>
        </GridItem>
        {/* <GridItem colSpan={2} bg='papayawhip' />
        <GridItem colSpan={2} bg='papayawhip' /> */}
        <GridItem colSpan={4} ml={8}>
          <Heading as='h1' size='2xl' mt='3' mb='3'>Tomas</Heading>
          <Stack direction='row'>
            <Badge>10/25/2019</Badge>
            <Badge colorScheme='green'>Comedy, Crime</Badge>
            <Badge colorScheme='red'>1h 52m</Badge>
            <Badge colorScheme='purple'>Play Trailer</Badge>
          </Stack>
          <Stack direction='row'>
            <Center>
              <Image
                width='100px'
                objectFit='contain'
                src={imdb}
                alt='Dan Abramov'
                mt={3}
              />
              <Text fontSize='40px' ml={4}>7</Text><Text>/10</Text>
            </Center>
          </Stack>
          <Text><b>Overview</b></Text>
          <Text noOfLines={7}>
            "The quick brown fox jumps over the lazy dog" is an English-language pangram—a
            sentence that contains all of the letters of the English alphabet. Owing to
            its existence, Chakra was created. See how Avengers: Infinity War's opening weekend stacks up at the box office against other movies in the MCU. Plus, check out how IMDb users have ranked the 19 MCU films to date.
          </Text>
          <Stack direction='row' mt='4' mb='4'>
            <Box>
              <Text align='center'><b>Name of The movie</b></Text>
              <Text align='center'>as what</Text>
            </Box>
            <Box>
              <Text align='center'><b>Name of The movie</b></Text>
              <Text align='center'>as what</Text>
            </Box>
          </Stack>
          <Box border='1px' borderColor='gray.200'>
          </Box>
          <Stack direction='row'>
            <Box mb='0'>
              <Center mt='4'>
                <Image
                  borderRadius='full'
                  boxSize='75px'
                  src='https://bit.ly/dan-abramov'
                  alt='Dan Abramov'
                  mb='2'
                />
              </Center>
              <Box>
                <Text align="center"><b>Name of The movie</b></Text>
                <Text align="center">as what</Text>
              </Box>
            </Box>
          </Stack>
        </GridItem>
      </Grid>
    </Container>
    </Box>
  )
}

export default DetailsMovie