import { gql } from "@apollo/client";

export const SIGNUP_USER_GQL = gql`
  mutation SignUp($name: String!, $password: String!) {
    signUp(password: $password, email: $email) {
      token
    }
  }
`