import { SearchIcon } from '@chakra-ui/icons';
import { Circle, Stack, Flex, useMediaQuery, Box, Text, InputGroup, InputLeftElement, Input, Container, WrapItem, Wrap } from '@chakra-ui/react'
import React from 'react'
import { motion, AnimatePresence } from "framer-motion";

function Header(props) {
  const [isNotSmallerScreen] = useMediaQuery("(min-width:600px)");

  return (
    <Stack>
      <Container maxW='8xl'>

        <Circle position="absolute"
          bgGradient="linear(to-l, cyan.400, blue.500, purple.500)"
          opacity="0.2"
          w="300px" h="300px" alignSelf="flex-end"></Circle>
        <Flex direction={isNotSmallerScreen ? "row" : "column"}
          spacing="200px" p={isNotSmallerScreen ? "32" : "0"}
          alignSelf="flex-start"></Flex>

        <Box mt={isNotSmallerScreen ? "0" : 16} align="flex-start">
          <Wrap>
            <WrapItem >
              <Text fontSize="4xl" fontWeight="semibold">Hi, Welcome</Text>
            </WrapItem>
          </Wrap>

          <AnimatePresence>

            <motion.div
              initial={{
                opacity: 0,
                scale: 1.0
              }}
              animate={{
                opacity: 1,
                scale: 1.1
              }}
              exit={{
                opacity: 0,
                scale: 1.0
              }}
            >
              <Text fontSize="7xl" fontWeight="bold" bgGradient="linear(to-r, cyan.400, blue.500, purple.500)" bgClip="text">Find Movies, TV shows and more</Text>
            </motion.div>
          </AnimatePresence>

          <motion.div
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 1.1 }}
            className="save-button"
            onClick={() => null}
            fullWidth
          >

            <InputGroup>
              <InputLeftElement
                pointerEvents='none'
                children={<SearchIcon color='gray.300' />}
                Type="lg"
              />
              <Input
                name='search'
                type='search'
                placeholder='Search'
                onChange={(event) => props.changeSearch(event.target.value)}
              />
            </InputGroup>
          </motion.div>

        </Box>
      </Container>
    </Stack>
  )
}

export default Header