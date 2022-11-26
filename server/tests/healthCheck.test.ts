import gql from 'gql-tag'
import { it, expect } from 'vitest';
import { server } from '../src/routes'

it("Runs a health check against our gql schema", async () => {
  const result = await server.executeOperation({
    query: gql`
      query {
        test(arg: false)
      }
    `
  });

  expect(result).toBeTruthy();
})