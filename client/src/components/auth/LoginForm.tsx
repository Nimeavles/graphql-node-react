import { Button, Center, FormControl, FormLabel, Input } from "@chakra-ui/react";

export function LoginForm() {
  return (
    <form style={{ display: 'flex', flexDirection: 'column', gap: 15 }}>
      <FormControl id="email">
        <FormLabel>Correo Electrónico</FormLabel>
        <Input type="email" />
      </FormControl>
      <FormControl id="password">
        <FormLabel>Contraseña</FormLabel>
        <Input type="password" />
      </FormControl>
      <Center>
        <Button type="submit" variant="outline" _hover={{ bg: '#454545', color: '#000' }}>Enviar</Button>
      </Center>
    </form>
  )
}