import React from "react";

function Login() {
    return (
        <>
            <div className="login__site container">
                <div className="login">Zaloguj się</div>
                <center><div className="header__decoration" /></center>
                <form className="login__details">
                    <label>Email</label>
                    <input type="text" />
                    <label>Hasło </label>
                    <input type="password" />
                </form>
                <a>Załóż konto</a>
                <a>Zaloguj się</a>
            </div>
        </>
    );
}
export default Login;