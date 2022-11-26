import gql from "gql-tag";
import signUpController from "../../controllers/auth/signup.controller";

export const typeDef = gql`
  extend type Mutation {
    signUp(
      name: String!
      password: String!
      email: String!
      username: String!
    ): Token!
  }
`

export const resolvers = {
  Mutation: {
    signUp: async (root: any, args: any) => {
      const { code, message } = await signUpController(args)
      console.log(code, message);
    }
  }
}