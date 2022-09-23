import React, { useRef } from 'react';
import './Login.scss'
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth"
import { auth } from '../../Firebase/config'; 


const Login = () => {
    //Utilizo useRef hook para hacer que los valores de los inputs persistan persistan. useRef docu:https://www.w3schools.com/react/react_useref.asp
    const emailRef = useRef(null)
    const passRef = useRef(null)

    //Creo funciones handlers para signUp y para signIn, creando el usuario en signUp y iniciando la sesion de un usuario ya creado en signIn
    const handleSignUp = (e) => {
        e.preventDefault()

        createUserWithEmailAndPassword(
                auth,
                emailRef.current.value,
                passRef.current.value
            ).then(user => {
                console.log(user)
            }).catch(err => {
                console.log(err)
            })


    }
    const handleSignIn = (e) => {
        e.preventDefault()
        signInWithEmailAndPassword(
                auth,
                emailRef.current.value,
                passRef.current.value
            ).then(user => {
                console.log(user)
            }).catch(err => {
                console.log(err)
            })
    }

    return (
        <div className="login-container">

            <h2 className="login-titulo">Iniciar Sesión</h2>

            <form className="login-form">
                <input ref={emailRef} type="email" className="login-input" placeholder="email"/>
                <input ref={passRef} type="password" className="login-input" placeholder="password"/>
                <button onClick={handleSignIn} className="login-submit" value="Aceptar">Sign in </button>
            </form>
            <div>
                <h4>Aun no estás registrado?</h4>
                <button onClick={handleSignUp}>Sign up</button>
            </div>
        </div>
    )
}

export default Login