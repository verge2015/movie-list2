import React, { useState } from 'react';
import './App.css';
import { Flex, VStack, IconButton, useColorMode, Spacer, Heading } from '@chakra-ui/react'
import { FaSun, FaMoon, FaInstagram, FaGithub, FaLinkedin } from 'react-icons/fa'
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom'
import Header from './components/Header';
import Social from './components/Social';
import Profile from './components/Profile';
import Footer from './components/Footer';
import MovieList from './components/MovieList'

function App() {
  /* This is a hook that allows you to change the color mode of the app. */
  const { colorMode, toggleColorMode } = useColorMode();
  const isDark = colorMode === "dark";
  /* This is a hook that allows you to change the state of the app. */
  const [word, setWord] = useState("saw")

  return (
    <>
      <VStack p={5}>
        <Router>
          <Flex w="100%">
            <Link exact to="/">
              <Heading
                ml="10" size="lg" fontWeight='semibold' color="cyan.400">VergeFlix</Heading>
            </Link>
            <Spacer></Spacer>
            <IconButton icon={<FaLinkedin />} isRound="true" onClick={toggleColorMode}></IconButton>
            <IconButton ml={2} icon={<FaInstagram />} isRound="true" onClick={toggleColorMode}></IconButton>
            <IconButton ml={2} icon={<FaGithub />} isRound="true" onClick={toggleColorMode}></IconButton>
            <IconButton ml={8} icon={isDark ? <FaSun /> : <FaMoon />} isRound="true" onClick={toggleColorMode}></IconButton>
          </Flex>

          <Header
            changeSearch={word => setWord(word)}>
          </Header>

          <Social></Social>
          <Switch>
            {/* This is a route that is being used to render the MovieList component. */}
            <Route exact path="/">
              {/* Passing the state of the word to the MovieList component. */}
              <MovieList
                search2={word} />
            </Route>
            {/* This is a route that is being used to render the Profile component. */}
            <Route path="/profile">
              <Profile />
            </Route>
          </Switch>
        </Router>
      </VStack>
      <Footer></Footer>
    </>
  );
}

export default App;
