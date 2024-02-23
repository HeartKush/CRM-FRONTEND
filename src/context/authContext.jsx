import { jwtDecode } from "jwt-decode";
import { createContext, useReducer } from "react";

const initialState = {
    user: null
}

if (localStorage.getItem("user-token")) {
    const decodedToken = jwtDecode(localStorage.getItem("user-token"));

    if (decodedToken.exp * 1000 < Date.now()) {
        localStorage.removeItem("user-token")
    } else {
        initialState.user = decodedToken;
    }
}

const AuthContext = createContext({
    user: null,
    login: (userData) => {},
    logout: () => { }
})

function authReducer(state, action) {
    switch (action.type) {
        case 'LOGIN':
            return {
                ...state,
                user: action.payload
            }
        case 'LOGOUT':
            return {
                ...state,
                user: null
            }
        default:
            return state
    }
}

function AuthProvider(props) {
    const [state, dispatch] = useReducer(authReducer, initialState)

    const login = (userData) => {
        console.log(userData)
        localStorage.setItem("user-token", userData.token)
        dispatch({
            type: 'LOGIN', 
            payload: userData
        })
    }

    function logout() {
        localStorage.removeItem("user-token")
        dispatch({ type: 'LOGOUT' })
    }

    return (
        <AuthContext.Provider
            value={{ user: state.user, login, logout }}
            {...props}
        />
    )
}


export { AuthContext, AuthProvider };