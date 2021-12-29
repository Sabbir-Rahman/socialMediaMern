import { createContext, useReducer } from 'react'
import AuthReducer from './AuthReducer'

const INITIAL_STATE = {
    user: {
        _id:"61c8b61c438dbefba76895c5",
        username:"sabbir",
        email:"sabbir@gmail.com",
        profilePicture:"person/2.jpeg",
        isAdmin:false,
        followers: [],
        followings: [],
        
    },
    isFetching: false,
    error: false
}

export const AuthContext = createContext(INITIAL_STATE)

export const AuthContextProvider = ({children}) => {
    const [state, dispatch] = useReducer(AuthReducer,INITIAL_STATE)

    return (
        <AuthContext.Provider
            value = {{
                user: state.user,
                isFetching: state.isFetching,
                error: state.error,
                dispatch
            }}
        >
            {children}
        </AuthContext.Provider>
    )
}