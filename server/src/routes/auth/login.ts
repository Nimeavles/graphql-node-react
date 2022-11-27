import gql from "gql-tag";
import { GraphQLError } from "graphql";
import loginController from "../../controllers/auth/login.controller";
import { errors } from "../../utils/errors";

export const typeDef = gql`
  extend type Mutation {
    login(
      email: String!
      password: String!
    ): Token!
  }
`;

export const resolver = {
  Mutation: {
    login: async (root: any, args: any) => {
      const { code, message, jwt: token } = await loginController(args)

      for (const i of errors) {
        if (i.code === code) {
          throw new GraphQLError(message, {
            extensions: {
              code: i.message
            }
          })
        }
      }
      return { token }
    }
  }
}