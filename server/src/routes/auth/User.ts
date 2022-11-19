import gql from "gql-tag";

export const typeDef = gql`
  type User {
    name: String!
    password: String!
    email: String!
    id: ID!
  }
`