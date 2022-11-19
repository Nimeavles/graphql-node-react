import gql from "gql-tag";

export const typeDef = gql`
  extend type Mutation {
    singup(
      name: String!
      password: String!
      email: String!
    ): Token
  }
`;

export const resolvers = {
  Mutation: {
    singup: () => console.log("Sing Up user")
  }
}