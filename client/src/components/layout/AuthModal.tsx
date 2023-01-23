import { useState } from "react";
import { Box, Flex, IconButton, Text } from "@chakra-ui/react"
import { SignupForm, LoginForm } from "../auth";
import { CloseIcon } from "@chakra-ui/icons";

function AuthModal({ setOpen }: { setOpen: React.Dispatch<React.SetStateAction<boolean>> }) {

  const [auth, setAuth] = useState("login");

  return (
    <Flex bg="#000" width="100%" height="100vh" position="fixed" top="0" left="0" right="0" bottom="0" margin="auto" opacity={{ lg: "0.8" }} justifyContent="center" alignItems="center">
      <IconButton aria-label="close" children={<CloseIcon />} position="absolute" top="5" left="5" bg="none" _hover={{ bg: 'none' }} color="white" />
      <Box boxShadow={{ lg: "0 0 0 50vmax rgba(255,255,255,0.3);" }} width={{ sm: '50%', lg: '40%', xl: "35%", xxxl: '25%' }} minHeight="50%" rounded="xl" fontFamily="header">
        <Flex width="85%" justifyContent="center" alignItems="center" h="100%" margin="auto" color="white" flexDir="column" gap="10" py="10px" onClick={() => setOpen(false)}>
          <Text as="b" fontSize="4xl">
            {auth === 'login' ? "Iniciar Sesión" : 'Registrarse'}
          </Text>
          {
            auth === 'login' ? (
              <>
                <LoginForm />
                <Text _hover={{ cursor: 'pointer' }} as='b' onClick={() => setAuth("signup")}>¿No estás registrado aún?</Text>
              </>
            ) : (
              <>
                <SignupForm />
                <Text as='b' _hover={{ cursor: 'pointer' }} onClick={() => setAuth("login")}>¿Ya estás registrado? Inicia Sesión</Text>
              </>)
          }
        </Flex>
      </Box >
    </Flex >
  )
}

export default AuthModal