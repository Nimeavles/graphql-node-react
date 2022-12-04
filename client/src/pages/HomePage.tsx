import { Box, Flex, Grid, GridItem, Image } from '@chakra-ui/react'
import { LandingText } from '../components/Home/LandingText'
import Navbar from '../components/layout/Navbar'
import styles from '../styles/home.module.css'
import app_image from '../assets/app-image.png'
import resume from '../assets/resume.jpg'
import MediaQuery from 'react-responsive'

export function HomePage() {
  return (
    <Box minH="100vh" bg="#0d0d0d">
      <Box sx={{ height: "9rem" }} color="#fff" marginBottom={{ xl: "100px", xxl: '0px' }}>
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
      <MediaQuery minWidth="800px">
        <main style={{ display: 'flex', justifyContent: 'center', minHeight: 'calc(100vh - 9rem)' }}>
          <Flex w='calc(100vw - 8rem)' justifyContent="flex-start" alignItems="center" >
            <Flex justifyContent="space-between">
              <LandingText />
              {/* 1200px screen fix */}
              <Flex alignItems="center" justifyContent="center" minW={{ lg: "35%", xxl: '35%' }} maxW="40%">
                <Image className={styles.homeImage} boxSize={{ md: '300px', lg: '300px', xl: '400px', xxl: '500px' }} src={resume} boxShadow="xl" />
              </Flex>
            </Flex >
          </Flex>
        </main>
      </MediaQuery>
      <MediaQuery maxWidth="799px">
        <main style={{ display: 'flex', justifyContent: 'center', minHeight: 'calc(100vh - 9rem)' }}>
          <Grid
            w="calc(100vw - 8rem)"
            gridTemplateRows="auto auto auto"
            placeItems="center"
          >
            <LandingText>
              <GridItem area="image">
                <Image className={styles.homeImage} boxSize={{ xsm: "300px", xxsm: '200px' }} src={resume} boxShadow="xl" />
              </GridItem>
            </LandingText>
          </Grid>
        </main>
      </MediaQuery>
    </Box >
  )
}