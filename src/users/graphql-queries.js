import { gql } from "@apollo/client";

export const GET_USERS = gql`
  query GetUsers {
    getUsers {
      username
      email
      password
      id
    }
  }
`;

export const GET_USER = gql`
  query GetUser($id: ID!) {
    getUser(ID: $id) {
      email
      password
      token
      username
      id
    }
  }
`;