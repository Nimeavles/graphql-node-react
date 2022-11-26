import { ApolloServer } from "@apollo/server";
import gql from "gql-tag";

const rootDef = gql`
  type Query {
    _: String!
  }

  type Mutation {
    _: String!
  }
`;

export const server = new ApolloServer({
  typeDefs: [rootDef],
  resolvers: []
})