import { Box, ButtonGroup, IconButton } from "@chakra-ui/react"
import { } from '@chakra-ui/icons'

export const Footer = () => {
  return (
    <Box h="5%" bg="black">
      <footer>
        <ButtonGroup size="20px" spacing="10px">
          <IconButton aria-label="ig" colorScheme="whatsapp" />
        </ButtonGroup>
      </footer>
    </Box>
  )
}
