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
import { INPUT_ERRORS, PATTERNS } from '../../utils';
import { FC } from "react";

interface IFormInput {
  email: string;
  password: string;
  repeatPassword: string;
}

export const SignupForm = () => {

  const { register, handleSubmit, formState: { errors } } = useForm<IFormInput>();

  const [signUser, { loading, error, data }] = useMutation(SIGNUP_USER_GQL);

  const onSubmit = (data: IFormInput) => {
    console.log(data);
    if (data.password === data.repeatPassword) {
      signUser({
        variables: {
          password: data.password,
          email: data.email
        }
      })      
    }else {
      alert('Las contraseñas deben coincidir')
    }
  }

  return (
    <form style={{ display: 'flex', flexDirection: 'column', gap: 15, minHeight: '70%', maxHeight: '100vh' }} onSubmit={handleSubmit(onSubmit)}>
      <FormControl id="email">
        <FormLabel>Correo Electrónico</FormLabel>
        <Input autoComplete="off" {...register('email', { required: INPUT_ERRORS.INVALID_EMAIL, pattern: PATTERNS.EMAIL })} />
        <ErrorMessage
          errors={errors}
          name="email"
          render={({ message=INPUT_ERRORS.INVALID_EMAIL }) => <Text as='b' color="red" fontSize="x-small">⚠️{message}</Text>
          }
        />
      </FormControl>
      <FormControl id="password">
        <FormLabel>Contraseña</FormLabel>
        <Input autoComplete="off" type="password" {...register('password', { required: INPUT_ERRORS.INVALID_PASSWORD, min: 8, max: 32 })} />
        <ErrorMessage
          errors={errors}
          name="password"
          render={({ message=INPUT_ERRORS.INVALID_PASSWORD }) => <Text as='b' color="red" fontSize="x-small">⚠️{message}</Text>
          }
        />
      </FormControl>
      <FormControl id="repeat-password">
        <FormLabel>Repite la contraseña</FormLabel>
        <Input autoComplete="off" type="password" {...register('repeatPassword', { required: INPUT_ERRORS.INVALID_PASSWORD_REPEATED })} />
        <ErrorMessage
          errors={errors}
          name="password"
          render={({ message=INPUT_ERRORS.INVALID_PASSWORD_REPEATED }) => <Text as='b' color="red" fontSize="x-small">⚠️{message}</Text>
          }
        />
      </FormControl>
      <Center>
        <Button type="submit" variant="outline" _hover={{ bg: '#454545', color: '#000' }}>Enviar</Button>
      </Center>
    </form>
  )
}