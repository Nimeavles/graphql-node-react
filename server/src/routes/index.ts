import { ApolloServer } from '@apollo/server'
import gql from "gql-tag";
import {
  signUpDef,
  tokenDef,
  signUpResolvers,
  loginDef,
  loginResolvers,
  codeDef
} from './auth'
import { typeDef as Test } from './test';

const rootDef = gql`
  type Query {
    _: String!
  }

  type Mutation {
    _: String!
  }
`;

export const server = new ApolloServer({
  typeDefs: [rootDef, signUpDef, tokenDef, loginDef, codeDef, Test],
  resolvers: [signUpResolvers, loginResolvers]
})