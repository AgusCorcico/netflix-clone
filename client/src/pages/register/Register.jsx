import { useRef, useState } from 'react';
import './register.scss'

function Register() {

    const [email, setEmail] = useState("")
    const emailRef = useRef()

    const [password, setPassword] = useState("")
    const passwordRef = useRef()

    const handleStart = () => {
        setEmail(emailRef.current.value)
    }

    const handleFinish = () => {
        setPassword(passwordRef.current.value)
    }


    return (
    <div className="register">
        <div className="top">
            <div className="wrapper">
                <img
                    className="logo"
                    src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/2560px-Netflix_2015_logo.svg.png"
                    alt=""
                />
                <button className="loginButton">Iniciar sesión</button>
            </div>
        </div>
        <div className="container">
            <h1>Películas y series ilimitadas y mucho más.</h1>
            <h2>Disfruta donde quieras. Cancela cuando quieras.</h2>
            <p>¿Quieres ver Netflix ya? Ingresa tu email para crear una cuenta o reiniciar tu membresía de Netflix.</p>
            {
                !email ? (
                <div className="input">
                    <input type="email" placeholder='direccion de email' ref={emailRef}/>
                    <button className="registerButton" onClick={handleStart}>Suscribirse.</button>
                </div>
                )
                : (
                <form className="input">
                    <input type="password" placeholder='contraseña' ref={passwordRef}/>
                    <button className="registerButton" onClick={handleFinish}>Comenzar</button>
                </form>
                )
            }
        </div>
    </div>
)};

export default Register;