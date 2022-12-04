import { Box, GridItem } from "@chakra-ui/react"
import MediaQuery from "react-responsive"

export const LandingDescription = () => {
  return (
    <>
      <MediaQuery minWidth="800px">
        <Box color="gray.400" fontFamily="header" fontWeight="light" maxW={{ md: "55%" }} marginTop="30px">
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad minus corporis praesentium dolorem laudantium fugit sed odio enim. Possimus qui cumque impedit esse mollitia iure quas architecto illum voluptate, eos voluptatem quo repellat aliquid, quam pariatur incidunt consequatur consequuntur id neque, nesciunt vel inventore quia temporibus.</p>
        </Box>
      </MediaQuery>
      <MediaQuery maxWidth="799px">
        <GridItem color="gray.400" fontFamily="header" fontWeight="light" marginTop="30px">
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad minus corporis praesentium dolorem laudantium fugit sed odio enim. Possimus qui cumque impedit esse mollitia iure quas architecto illum voluptate, eos voluptatem quo repellat aliquid, quam pariatur incidunt consequatur consequuntur id neque, nesciunt vel inventore quia temporibus.</p>
        </GridItem>
      </MediaQuery>
    </>
  )
}
