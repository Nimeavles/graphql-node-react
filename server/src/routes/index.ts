import { ApolloServer } from "@apollo/server";
import gql from "gql-tag";
import {
  signUpDef,
  tokenDef,
  signUpResolvers,
  loginDef,
  loginResolvers
} from './auth'

const rootDef = gql`
  type Query {
    _: String!
  }

  type Mutation {
    _: String!
  }
`;

export const server = new ApolloServer({
  typeDefs: [rootDef, signUpDef, tokenDef, loginDef],
  resolvers: [signUpResolvers, loginResolvers]
})