import React, { useState, useEffect } from 'react'
import { useLocation, Link } from 'react-router-dom';
import { BiArrowBack } from 'react-icons/bi'
import { motion } from "framer-motion";
import {
  Box,
  Container,
  Stack,
  Text,
  Image,
  Flex,
  VStack,
  Button,
  Heading,
  SimpleGrid,
  StackDivider,
  useColorModeValue,
  List,
  ListItem,
  IconButton
} from '@chakra-ui/react';

import { MdLocalShipping } from 'react-icons/md';

function Profile(props) {
  /* Setting the state of the movies array to an empty array. */
  const [movies, setMovies] = useState([]);

  /* Setting the state of the movies array to an empty array. */
  const location = useLocation();
  const [selected, setSelected] = useState(location.test)

  const fetchData = async () => {
    /* Fetching the data from the API and setting the state of the movies array to the data. */
    const response = await fetch("http://www.omdbapi.com/?i=" + selected + "&apikey=75a7ad13");
    const data = await response.json();
    setMovies(data);
  };

  /* A React hook that is used for data fetching, component state, and for executing side effects. */
  useEffect(() => {
    fetchData();
  }, selected);

  return (
    <Container maxW={'7xl'}>

      {/* A button that is used to navigate back to the home page. */}
      <motion.button
        whileHover={{ scale: 1.2 }}
        whileTap={{ scale: 0.9 }}
        className="save-button"
        onClick={() => null}
      >

        <Link exact to="/">
          <IconButton icon={<BiArrowBack />} isRound="true" size="lg"></IconButton>
        </Link>
      </motion.button>

      <SimpleGrid
        columns={{ base: 1, lg: 2 }}
        spacing={{ base: 8, md: 10 }}
        py={{ base: 18, md: 24 }}>

        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          className="save-button"
          onClick={() => null}
        >
          <Flex>
            <Image
              rounded={'md'}
              alt={'product image'}
              src={
                movies.Poster
              }
              fit={'cover'}
              align={'center'}
              w={'100%'}
              h={{ base: '100%', sm: '400px', lg: '100%' }}
            />
          </Flex>
        </motion.button>

        <Stack spacing={{ base: 6, md: 10 }}>
          <Box as={'header'}>
            <Heading
              lineHeight={1.1}
              fontWeight={600}
              fontSize={{ base: '2xl', sm: '4xl', lg: '5xl' }}>
              {movies.Title}
            </Heading>
            <Text
              color={useColorModeValue('gray.900', 'gray.400')}
              fontWeight={300}
              fontSize={'2xl'}>
              {movies.BoxOffice} Box Office
            </Text>
          </Box>

          <Stack
            spacing={{ base: 4, sm: 6 }}
            direction={'column'}
            divider={
              <StackDivider
                borderColor={useColorModeValue('gray.200', 'gray.600')}
              />
            }>
            <VStack spacing={{ base: 4, sm: 6 }}>
              <Text
                color={useColorModeValue('gray.500', 'gray.400')}
                fontSize={'2xl'}
                fontWeight={'300'}>
                {movies.Plot}
              </Text>
              <Text fontSize={'lg'}>
                {movies.Genre}

              </Text>
            </VStack>
            <Box>
              <Text
                fontSize={{ base: '16px', lg: '18px' }}
                color={useColorModeValue('yellow.500', 'yellow.300')}
                fontWeight={'500'}
                textTransform={'uppercase'}
                mb={'4'}>
                Cast
              </Text>

              <SimpleGrid columns={{ base: 1, md: 2 }} spacing={10}>
                <List spacing={4}>
                  <ListItem>{movies.Actors}</ListItem>
                </List>
              </SimpleGrid>
            </Box>


            <Box>
              <Text
                fontSize={{ base: '16px', lg: '18px' }}
                color={useColorModeValue('yellow.500', 'yellow.300')}
                fontWeight={'500'}
                textTransform={'uppercase'}
                mb={'4'}>
                Movie Details
              </Text>

              <List spacing={2}>
                <ListItem>
                  <Text as={'span'} fontWeight={'bold'}>
                    Year:
                  </Text>{' '}
                  {movies.Year}
                </ListItem>
                <ListItem>
                  <Text as={'span'} fontWeight={'bold'}>
                    Released:
                  </Text>{' '}
                  {movies.Released}
                </ListItem>
                <ListItem>
                  <Text as={'span'} fontWeight={'bold'}>
                    Runtime:
                  </Text>{' '}
                  {movies.Runtime}
                </ListItem>
                <ListItem>
                  <Text as={'span'} fontWeight={'bold'}>
                    Writer:
                  </Text>{' '}
                  {movies.Writer}
                </ListItem>
                <ListItem>
                  <Text as={'span'} fontWeight={'bold'}>
                    Language:
                  </Text>{' '}
                  {movies.Language}
                </ListItem>
                <ListItem>
                  <Text as={'span'} fontWeight={'bold'}>
                    Country:
                  </Text>{' '}
                  {movies.Country}
                </ListItem>
                <ListItem>
                  <Text as={'span'} fontWeight={'bold'}>
                    Awards:
                  </Text>{' '}
                  {movies.Awards}
                  {' '}
                </ListItem>
              </List>
            </Box>
          </Stack>

          <Button
            rounded={'none'}
            w={'full'}
            mt={8}
            size={'lg'}
            py={'7'}
            bg={useColorModeValue('gray.900', 'gray.50')}
            color={useColorModeValue('white', 'gray.900')}
            textTransform={'uppercase'}
            _hover={{
              transform: 'translateY(2px)',
              boxShadow: 'lg',
            }}>
            Watch Movie
          </Button>

          <Stack direction="row" alignItems="center" justifyContent={'center'}>
            <MdLocalShipping />
            <Text>Watch via YouTube, Netflix or Amazon Prime</Text>
          </Stack>
        </Stack>
      </SimpleGrid>
    </Container>
  )
}

export default Profile