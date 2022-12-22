import { useState } from 'react'
import { SearchIcon, HamburgerIcon, CloseIcon } from '@chakra-ui/icons'
import {
  Box,
  Flex,
  IconButton,
  Input,
  InputGroup,
  InputRightElement,
} from '@chakra-ui/react'
import { NavItems } from '../Home/NavItems';
import MediaQuery from 'react-responsive'
import '../../styles/home.module.css'

function Navbar() {

  const [open, setOpen] = useState(false);

  return (
    <>
      <MediaQuery minWidth="621px">
        <Flex w={{ md: '55%', lg: "65%" }} bgGradient="linear(to-r, #5959c2 0%, #5f5fd0 25%, #6c6ceb 100%)" paddingY="15px" borderLeftRadius="20px" borderRightRadius="5px" alignItems="center">
          <Box fontFamily="header" w={{ md: '100%', lg: "70%" }} >
            <NavItems />
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
        <Flex display="relative">
          <IconButton
            marginRight="4rem"
            aria-label='Hamburguer'
            p="10px"
            _hover={{ bgGradient: "linear(to-r, #5959c2 0%, #5f5fd0 25%, #6c6ceb 100%)" }}
            bg='none'
            children={<HamburgerIcon color="white" h="30px" w="30px" />}
            onClick={() => setOpen(!open)}
          />
          {
            open && (
              <Flex alignItems="center" justifyContent="center" direction="column" h="100vh" w="100vw" position="absolute" top="0" left="0" bgGradient="linear(to-r, #5959c2 0%, #5f5fd0 25%, #6c6ceb 100%)" fontFamily="header" opacity="0.9">
                <IconButton
                  aria-label='Hamburguer'
                  p="10px"
                  position="absolute"
                  left="10"
                  top="10"
                  _hover={{ bg: 'gray.500' }}
                  bg='none'
                  children={<CloseIcon color="black" h="30px" w="30px" />}
                  onClick={() => setOpen(!open)}
                />
                <NavItems flexDirection="column" height='60%' fontSize='40px' alignItems='center' />
              </Flex>
            )
          }
        </Flex>
      </MediaQuery>
    </>
  )
};

export default Navbar