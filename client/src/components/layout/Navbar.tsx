import { SearchIcon, HamburgerIcon } from '@chakra-ui/icons'
import { Box, Flex, IconButton, Input, InputGroup, InputRightElement } from '@chakra-ui/react'
import { NavLink } from 'react-router-dom'
import MediaQuery from 'react-responsive'
import '../../styles/home.module.css'

function Navbar() {

  return (
    <>
      <MediaQuery minWidth="621px">
        <Flex w={{ md: '55%', lg: "65%" }} bgGradient="linear(to-r, #5959c2 0%, #5f5fd0 25%, #6c6ceb 100%)" paddingY="15px" borderLeftRadius="20px" borderRightRadius="5px" alignItems="center">
          <Box fontFamily="header" w={{ md: '100%', lg: "70%" }} >
            <ul style={{ display: 'flex', justifyContent: 'space-around', width: '100%' }}>
              <NavLink to={'/'}>
                <b>Inicio</b>
              </NavLink>
              <NavLink to={'/'}>
                <b>About</b>
              </NavLink>
              <NavLink to={'/'}>
                <b>Timing</b>
              </NavLink>
              <NavLink to={'/'}>
                <b>Courses</b>
              </NavLink>
            </ul>
          </Box>
          <MediaQuery maxWidth="960px">
            <IconButton aria-label='Buscar' bg='none' children={<SearchIcon color="black" />} />
          </MediaQuery>
          <MediaQuery minWidth="961px">
            <InputGroup w="25%">
              <Input placeholder='Buscar' color='black' _placeholder={{ color: 'inherit' }} variant="filled" bg="white" />
              <InputRightElement children={<SearchIcon color='black' />} />
            </InputGroup>
          </MediaQuery>
        </Flex>
      </MediaQuery>
      <MediaQuery maxWidth="620px">
        <IconButton marginRight="4rem" aria-label='Hamburguer' p="10px" _hover={{ bgGradient: 'linear(to-r, #5959c2 0%, #5f5fd0 25%, #6c6ceb 100%)' }} bg='none' children={<HamburgerIcon color="white" h="30px" w="30px" />} />
      </MediaQuery>
    </>
  )
};

export default Navbar