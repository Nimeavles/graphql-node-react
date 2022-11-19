import gql from "gql-tag";

export const typeDef = gql`
  extend type Mutation {
    login(
      email: String!
      password: String!
    ): Token
  }
`;

export const resolver = {
  Mutation: {
    login: (root: any, args: any) => {
      console.log(args.email, args.password);
    }
  }
}