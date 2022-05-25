import React, { useEffect, useState } from 'react';
import {
  Container,
  Grid,
  Box,
  GridItem,
  Text,
  Heading,
  Stack,
  Badge,
  Image,
  Center,
  useColorModeValue as mode,
} from '@chakra-ui/react';
import imdb from '../assets/images/imdb.png';
import { motion } from 'framer-motion';
import { useParams } from 'react-router-dom';

function DetailsMovie() {
  const { movieId } = useParams();
  const [movieDetails, setMovieDetails] = useState({
    adult: false,
    backdrop_path: '/p2fRZzxla6NoRbIH2KOZq0gHb5S.jpg',
    belongs_to_collection: null,
    budget: 150000000,
    genres: [
      {
        id: 16,
        name: '...',
      },
      {
        id: 12,
        name: '...',
      },
      {
        id: 10751,
        name: 'Family',
      },
      {
        id: 35,
        name: 'Comedy',
      },
    ],
    homepage: 'http://movies.disney.com/zootopia',
    id: 269149,
    imdb_id: 'tt2948356',
    original_language: 'en',
    original_title: '...',
    overview: '...',
    popularity: 105.536,
    poster_path: '/notfound.png',
    production_companies: [
      {
        id: 6125,
        logo_path: '/notfound.png',
        name: '...',
        origin_country: 'US',
      },
      {
        id: 2,
        logo_path: '/notfound.png',
        name: '...',
        origin_country: 'US',
      },
    ],
    production_countries: [
      {
        iso_3166_1: 'US',
        name: '...',
      },
    ],
    release_date: '...',
    revenue: 1023784195,
    runtime: 0,
    spoken_languages: [
      {
        english_name: 'English',
        iso_639_1: 'en',
        name: 'English',
      },
    ],
    status: '...',
    tagline: '...',
    title: 'Loading...',
    video: false,
    vote_average: 0,
    vote_count: 13937,
  });

  useEffect(() => {
    fetchMovie();
  }, []);

  const fetchMovie = async () => {
    const data = await fetch(
      'https://api.themoviedb.org/3/movie/' +
        movieId +
        '?api_key=cba59206d749f871e93ca338e2135c2d&language=en-US'
    );
    const movie = await data.json();
    console.log(movie);
    setMovieDetails(movie);
  };

  return (
    <Box bg="brand.500">
      <Container maxW="6xl" minH="3xl" pt={20}>
        <Grid
          templateRows="repeat(1, 1fr)"
          templateColumns="repeat(6, 1fr)"
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
                src={
                  'https://image.tmdb.org/t/p/w500' + movieDetails.poster_path
                }
                alt="Not Found"
                mt={4}
              />
            </Stack>
          </GridItem>
          {/* <GridItem colSpan={2} bg='papayawhip' />
        <GridItem colSpan={2} bg='papayawhip' /> */}
          <GridItem colSpan={4} ml={8}>
            <Heading as="h1" size="2xl" mt="3" mb="3" color={'brand.900'}>
              {movieDetails.title}
            </Heading>
            <Stack direction="row">
              <Badge>{movieDetails.release_date}</Badge>
              <Badge colorScheme="green">
                {movieDetails?.genres[0]?.name}, {movieDetails?.genres[1]?.name}
              </Badge>
              <Badge colorScheme="red">{movieDetails.runtime}min</Badge>
              <Badge colorScheme="purple">{movieDetails.tagline}</Badge>
            </Stack>
            <Stack direction="row">
              <Center>
                <Image
                  width="100px"
                  objectFit="contain"
                  src={imdb}
                  alt="Dan Abramov"
                  mt={3}
                />
                <Text fontSize="40px" ml={4}>
                  {movieDetails.vote_average}
                </Text>
                <Text>/10</Text>
              </Center>
            </Stack>
            <Text>
              <b>Overview</b>
            </Text>
            <Text noOfLines={7}>{movieDetails.overview}</Text>
            <Stack direction="row" mt="4" mb="4">
              {movieDetails.production_countries.map(pc => {
                return (
                  <Box>
                    <Text align="center">
                      <b>{pc.name}</b>
                    </Text>
                    {/* <Text align="center">as production country</Text> */}
                  </Box>
                );
              })}
            </Stack>
            <Box border="1px" borderColor="gray.200"></Box>
            <Stack direction="row">
              {movieDetails.production_companies.map(pc => {
                return (
                  <Box mb="0" mr={'4'}>
                    <Center mt="4">
                      <Image
                        objectFit="contain"
                        height={'50px'}
                        src={'https://image.tmdb.org/t/p/w500' + pc.logo_path}
                        alt="Not Found"
                        mb="2"
                      />
                    </Center>
                    <Box mt={2}>
                      <Text align="center">
                        <b>{pc.name}</b>
                      </Text>
                      {/* <Text align="center">as what</Text> */}
                    </Box>
                  </Box>
                );
              })}
            </Stack>
          </GridItem>
        </Grid>
      </Container>
    </Box>
  );
}

export default DetailsMovie;
