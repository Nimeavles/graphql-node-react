import gql from "gql-tag";
import { GraphQLError } from "graphql";
import signUpController from "../../controllers/auth/signup.controller";
import { errors } from "../../utils/errors";

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
      const { code, jwt: token } = await signUpController(args);

      for (const i of errors) {
        if (i.code === code) {
          throw new GraphQLError("Algunos campos ya existen", {
            extensions: {
              invalidArgs: [args.username, args.email],
              code: i.message
            }
          })
        }
      }

      return { token }
    }
  }
}