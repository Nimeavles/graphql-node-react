import { useMutation } from "@apollo/client";
import {
  Button,
  Center,
  FormControl,
  FormHelperText,
  FormLabel,
  Input,
  Text
} from "@chakra-ui/react";
import { useForm } from "react-hook-form";
import { ErrorMessage } from '@hookform/error-message';
import { SIGNUP_USER_GQL } from '../../graphql/auth/Signup'

interface IFormInput {
  email: string;
  password: string;
  repeatPassword: string;
}

export function SignupForm() {

  const { register, handleSubmit, formState: { errors } } = useForm<IFormInput>();

  const [signUser, { loading, error, data }] = useMutation(SIGNUP_USER_GQL);

  const onSubmit = () => {

  }

  return (
    <form style={{ display: 'flex', flexDirection: 'column', gap: 15, minHeight: '55%' }} onSubmit={handleSubmit(onSubmit)}>
      <FormControl id="email">
        <FormLabel>Correo Electrónico</FormLabel>
        <Input type="email" {...register('email', { required: 'The email is a required field' })} />
        <ErrorMessage errors={errors} name="email" />
      </FormControl>
      <FormControl id="password">
        <FormLabel>Contraseña</FormLabel>
        <Input type="password" {...register('password', { required: 'The password must contain at least 1 lower letter, 1 upper letter, numbers and a caracter', min: 8, max: 32, pattern: new RegExp('^(?=\w*\d)(?=\w*[A-Z])(?=\w*[a-z])\S{8,16}$') })} />
        <ErrorMessage
          errors={errors}
          name="password"
          render={({ message }) => {
            { console.log(message) }
            return <Text as='b' color="red" fontSize="lg">⚠️ {message || 'not message'}</Text>
          }}
        />
      </FormControl>
      <FormControl id="repeat-password">
        <FormLabel>Repite la contraseña</FormLabel>
        <Input type="password" {...register('repeatPassword', { required: 'The password must contain at least 1 lower letter, 1 upper letter, numbers and a caracter' })} />
        <FormHelperText>Las contraseñas deben coincidir</FormHelperText>
      </FormControl>
      <Center>
        <Button type="submit" variant="outline" _hover={{ bg: '#454545', color: '#000' }}>Enviar</Button>
      </Center>
    </form>
  )
}