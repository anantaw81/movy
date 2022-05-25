import './App.css';
import { useEffect, useState } from 'react';
import Movie from '../components/ExploreMovies/Movie';
import Filter from '../components/ExploreMovies/Filter';
import { motion, AnimatePresence } from 'framer-motion';
import { Box, Container, Heading, Text } from '@chakra-ui/react';
import { MainNavbar } from '../components/Navbar/MainNavbar';

function ExploreMovies() {
  const [popular, setPopular] = useState([]);
  const [filtered, setFiltered] = useState([]);
  const [activeGenre, setActiveGenre] = useState(0);

  useEffect(() => {
    fetchPopular();
  }, []);

  const fetchPopular = async () => {
    const data = await fetch(
      'https://api.themoviedb.org/3/movie/popular?api_key=cba59206d749f871e93ca338e2135c2d&language=en-US&page=1'
    );
    const movies = await data.json();
    setPopular(movies.results);
    setFiltered(movies.results);
  };

  return (
    <Box bg="white">
      <MainNavbar pageNum={2} />
      <Container maxW={'5xl'}>
        <Box pt={7} mb={7}>
          <Heading
            fontWeight={600}
            fontSize={{ base: '3xl', sm: '4xl', md: '6xl' }}
            lineHeight={'110%'}
          >
            {' '}
            #Explore Your{' '}
            <Text as={'span'} color={'orange.400'}>
              Favorite Movie.
            </Text>
          </Heading>
        </Box>
        <div className="App">
          <Filter
            popular={popular}
            setFiltered={setFiltered}
            activeGenre={activeGenre}
            setActiveGenre={setActiveGenre}
          />
          <motion.div layout className="popular-movies">
            <AnimatePresence>
              {filtered.map(movie => {
                return <Movie key={movie.id} movie={movie} />;
              })}
            </AnimatePresence>
          </motion.div>
        </div>
      </Container>
    </Box>
  );
}

export default ExploreMovies;
