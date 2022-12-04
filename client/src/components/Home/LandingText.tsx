import { Box, Button, GridItem, Stack, Text } from "@chakra-ui/react"
import { ReactNode } from "react"
import MediaQuery from "react-responsive"
import { LandingDescription } from "./LandingDescription"

export const LandingText: React.FC<{ children?: ReactNode }> = ({ children }) => {
  return (
    <Box fontFamily="header" marginTop={{ xl: '-250px', xxl: '-80px' }} w={'60%'}>
      <MediaQuery minWidth="800px">
        <Box display={"block"} fontSize="40px" color="white">
          <p>Crea y usa</p>
          <Box maxW={{ md: '70%', lg: "60%", xl: '55%' }}>
            <Text color="#4a499f" as='b' fontSize={{ xl: '50px', xxl: "60px", xxxl: '65px' }} fontWeight="bolder">Tus Plantillas de Currículum</Text>
          </Box>
          <p>en Lean CV</p>
        </Box>
        <LandingDescription />
        <Stack marginTop="30px" display='inline-block'>
          <Button bgGradient="linear(to-r, #5959c2 0%, #5f5fd0 25%, #6c6ceb 100%)" borderRadius="35px" color="white" fontSize="17px" marginRight="20px" _hover={{ bgGradient: 'linear(to-r, #5959c2 0%, #5f5fd0 25%, #6c6ceb 100%)', boxShadow: '5px 5px #444' }}>
            <Text as='b'>Ir al marketplace</Text>
          </Button>
          <Button borderRadius="35px" fontSize="17px" color="#655871" _hover={{ boxShadow: '5px 5px #444', bg: 'white' }} variant="outline">
            <Text as='b'>Crear Plantilla</Text>
          </Button>
        </Stack>
      </MediaQuery>
      <MediaQuery maxWidth="799px">
        <Box w={{ xxsm: '50vw' }}>
          <GridItem display={"block"} fontSize={{ base: '40px', md: '40px', sm: '35px', xsm: '30px', xxsm: '25px' }} color="white" marginBottom="30px">
            <p>Crea y usa</p>
            <Text color="#4a499f" as='b' fontSize={{ md: '50px', sm: '45px', xsm: '40px', xxsm: '30px' }} fontWeight="bolder">Tus Plantillas de Currículum</Text>
            <p>en Lean CV</p>
          </GridItem>
          {children}
          <LandingDescription />
          <GridItem fontWeight="bolder" marginTop="30px" marginBottom="30px">
            <Stack>
              <Button bgGradient="linear(to-r, #5959c2 0%, #5f5fd0 25%, #6c6ceb 100%)" borderRadius="35px" color="white" fontSize="17px" _hover={{ bgGradient: 'linear(to-r, #5959c2 0%, #5f5fd0 25%, #6c6ceb 100%)', boxShadow: '5px 5px #444' }}>
                <Text as='b'>Ir al marketplace</Text>
              </Button>
              <Button borderRadius="35px" marginTop="10px" fontSize="17px" color="#655871" _hover={{ boxShadow: '5px 5px #444', bg: 'white' }} variant="outline">
                <Text as='b'>Crear Plantilla</Text>
              </Button>
            </Stack>
          </GridItem>
        </Box>
      </MediaQuery>
    </Box >
  )
}
