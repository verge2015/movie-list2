import { Wrap, WrapItem } from '@chakra-ui/react';
import React, { useState, useEffect } from 'react'
import Card from './Cards';
import { useHistory } from 'react-router-dom'
import { motion } from "framer-motion";

export default function MovieList(props) {
  /* Creating a state variable called movies and a function called setMovies. */
  const [movies, setMovies] = useState([]);
  /* Creating a state variable called search and a function called setSearch. */
  const [search, setSearch] = useState(props.search2);

  /**
   * It fetches data from the OMDB API and sets the data to the movies variable.
   */
  const fetchData = async () => {
    /* This is a conditional statement that checks if the searchText variable is empty. If it is, it sets
    the searchText variable to "saw". */
    let searchText = search
    if (searchText.length === 0) {
      searchText = "saw"
    }

    let url = "http://www.omdbapi.com/?s=" + searchText + "&p=1-10&apikey=75a7ad13"
    /* It fetches data from the OMDB API and sets the data to the movies variable. */
    const response = await fetch(url);
    const data = await response.json();
    /* Setting the data.Search to the movies variable. */
    setMovies(data.Search);
  };

  /* A hook that is called when the component is mounted. It is used to fetch data from the OMDB API. */
  useEffect(() => {
    console.log("called here")
    setSearch(props.search2)
  }, [props.search2]);

  /* A hook that is called when the component is mounted. It is used to fetch data from the OMDB API. */
  useEffect(() => {
    fetchData();
  }, [search]);

  const history = useHistory();

  function handleClick(val) {
    /* Pushing the pathname to the profile page and the test to the val. */
    history.push({
      pathname: '/profile',
      test: val,
    });
  }

  /* Mapping through the movies array and returning a card for each movie. */
  let movieList = (movies || []).map((movie) => {
    return (
      <WrapItem
        key={movie.imdbID}
        onClick={() => handleClick(movie.imdbID)}
      >
        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          className="save-button"
          onClick={() => null}
        >
          <Card
            movieTitle={movie.Title}
            moviePosterUrl={movie.Poster}
          />
        </motion.button>
      </WrapItem>
    );
  })

  return (
    <div>
      {<Wrap>
        {movieList}
      </Wrap>}
    </div>
  )
}
