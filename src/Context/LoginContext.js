import { createContext, useContext, useState } from "react";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../Firebase/config";


export const LoginContext = createContext()

const usuarios = [
    {
        email: 'abc@abc.com',
        password: '1234'
    },
    {
        email: 'santiago@denis.com',
        password: '1234'
    },
    {
        email: 'conrado@lanusse.com',
        password: 'coder'
    },
    {
        email: 'josemaria@rontil.com',
        password: 'eltop1deltop10'
    }
]



export const LoginProvider = ({children}) => {
//Mucha bola no le di a este context, mas que usando sus variables de estado. Vas a tener que refactorizar mi codigo despues.
    const [user, setUser] = useState(null)

    const signUp = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password)
    }

    const login = (values) => {
        const match = usuarios.find(user => user.email === values.email)

        if (match) {
            if (match.password === values.pass) {
                setUser({
                    user: match.email,
                    logged: true
                })
            } else {
                alert("Password incorrecto")
            }
        } else {
            alert("Email incorrecto")
        }
    }

    const logout = () => {
        setUser({
            user: '',
            logged: false
        })
    }


    return (
        <LoginContext.Provider value={{user, setUser, login, logout, signUp}}>
            {children}
        </LoginContext.Provider>
    )
}


export const useLoginContext = () => {
    return useContext(LoginContext)
}