import { useLazyQuery, useMutation, useQuery } from "@apollo/client"
import { GET_USER, GET_USERS } from "./graphql-queries"
import { POST_LOGIN, POST_REGISTER } from "./graphql-mutations"

export const useUsers = () => {
    const result = useQuery(GET_USERS)
    return result
}
export const useUser = () => {
    const [getUser, result] = useLazyQuery(GET_USER);
    return [getUser, result]
} 

export const useRegister = () => {
    const [postUser, result] = useMutation(POST_REGISTER);
    return [postUser, result]
} 

export const useLogin = () => {
    const [postLogin, result] = useMutation(POST_LOGIN);
    return [postLogin, result]
} 
