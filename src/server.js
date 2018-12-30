require('dotenv').config({
  path: './variables.env'
})
import { GraphQLServer } from 'graphql-yoga'
import Query from '../resolvers/Query'
import Mutation from '../resolvers/Mutation'

const resolvers = {
  Query,
  Mutation
}

const server = new GraphQLServer({
  typeDefs: './src/schema.graphql',
  resolvers
})

server.start(() => console.log('Server is running on localhost:4000'))