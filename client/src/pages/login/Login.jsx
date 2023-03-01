import './login.scss'

function Login() {

    return (
    <div className="login">
        <div className="top">
            <div className="wrapper">
                <img
                    className="logo"
                    src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/2560px-Netflix_2015_logo.svg.png"
                    alt=""
                />
            </div>
        </div>
        <div className="container">
            <form>
                <h1>Iniciar sesión</h1>
                <input type="email" placeholder='Email o número de teléfono' />
                <input type="password" placeholder='Contraseña' />
                <button className="loginButton">Iniciar sesión</button>
                <span>¿Primera vez en Netflix? <b>Suscríbete ahora.</b></span>
                <small>
                Esta página está protegida por Google reCAPTCHA para comprobar que no eres un robot.
                <b>Más info.</b>
                </small>
            </form>
        </div>
    </div>
)};

export default Login;