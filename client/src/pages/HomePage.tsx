import { Box, Flex } from '@chakra-ui/react'
import app_image from '../assets/app-image.png'
import Navbar from '../components/layout/Navbar'

export function HomePage() {
  return (
    <Box minH="100vh" bg="#0d0d0d">
      <Box sx={{ height: "9rem" }} color="#fff">
        <Flex sx={{ height: "100%" }} alignItems="center" justifyContent="space-between">
          <Box>
            <Flex justifyContent="space-around" marginLeft="4rem">
              <img src={app_image} alt="image" width="90px" height="90px" />
              <Box className='upper' margin="auto" marginLeft="15px" fontSize="25px" fontFamily="header">
                <Flex flexDirection="column">
                  <b style={{ color: '#4a499f' }}>Lean</b>
                  <b>Cv</b>
                </Flex>
              </Box>
            </Flex>
          </Box>
          <Navbar />
        </Flex>
      </Box >
    </Box>
  )
}