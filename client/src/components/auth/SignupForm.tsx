import { Button, Center, FormControl, FormHelperText, FormLabel, Input } from "@chakra-ui/react";

export function SignupForm() {
  return (
    <form style={{ display: 'flex', flexDirection: 'column', gap: 15, minHeight: '55%' }}>
      <FormControl id="email">
        <FormLabel>Correo Electrónico</FormLabel>
        <Input type="email" />
      </FormControl>
      <FormControl id="password">
        <FormLabel>Contraseña</FormLabel>
        <Input type="password" placeholder="" />
      </FormControl>
      <FormControl id="repeat-password">
        <FormLabel>Repite la contraseña</FormLabel>
        <Input type="password" />
        <FormHelperText>Las contraseñas deben coincidir</FormHelperText>
      </FormControl>
      <Center>
        <Button type="submit" variant="outline" _hover={{ bg: '#454545', color: '#000' }}>Enviar</Button>
      </Center>
    </form>
  )
}