import { gql } from "@apollo/client";

export const POST_REGISTER = gql`
  mutation RegisterUser($registerInput: RegisterInput) {
    registerUser(registerInput: $registerInput) {
        username
        email
        password
        token
    }
   }
`;

export const POST_LOGIN = gql`
  mutation LoginUser($loginInput: LoginInput) {
    loginUser(loginInput: $loginInput) {
        email
        password
        token
        username
    }
  }
`;