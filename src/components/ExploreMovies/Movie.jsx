import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
function Movie({ movie }) {
  return (
    <motion.div
      animate={{ opacity: 1 }}
      initial={{ opacity: 0 }}
      exit={{ opacity: 0 }}
      layout
    >
      <Link to={'/details/' + movie.id}>
        <h2>{movie.title}</h2>
        <motion.img
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.9 }}
          src={'https://image.tmdb.org/t/p/w500' + movie.backdrop_path}
          alt=""
        />
      </Link>
    </motion.div>
  );
}

export default Movie;
