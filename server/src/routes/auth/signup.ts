import gql from "gql-tag";
import signUpController from "../../controllers/auth/Signup.controller";

export const typeDef = gql`
  extend type Mutation {
    singup(
      name: String!
      password: String!
      email: String!
      profileImage: String
    ): Token
  }
`;

export const resolvers = {
  Mutation: {
    signup: async (root: any, args: any) => {
      const { code, message } = await signUpController(args)
      console.log(code, message);
    }
  }
}