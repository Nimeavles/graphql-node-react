import { ApolloServer } from "@apollo/server"
import gql from "gql-tag";
import { typeDef as User } from './auth/User'
import { typeDef as Login, resolver as LoginResolvers } from './auth/login'
import { typeDef as Singup, resolvers as SingupResolvers } from './auth/singup'
import { typeDef as Token } from './auth/token'

const rootDefinition = gql`
  type Query {
    _: String
  }

  type Mutation {
    _: String
  }
`;

export const apolloServer = new ApolloServer({
  typeDefs: [rootDefinition, User, Login, Token, Singup],
  resolvers: [LoginResolvers, SingupResolvers]
})
