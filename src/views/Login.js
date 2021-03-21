import React, {useState} from 'react'
import logo from '../assets/img/logo.png'
import '../assets/css/Login.css'

export default function Login() {
    const [isLoading, setIsLoading] = useState(false)
    const [mail, setMail] = useState('')
    const [mailError, setMailError] = useState(false)
    const [password, setPassword] = useState('')
    const [passwordError, setPasswordError] = useState(false)

    const isValid = () => {
        const regxEmail = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
        if(!regxEmail.test(String(mail).toLowerCase()) && password === '') {
            setMailError(true)
            setPasswordError(true)
            return false
        }
        else if(!regxEmail.test(String(mail).toLowerCase())) {
            setMailError(true)
            setPasswordError(false)
            return false
        }
        else if(password === '') {
            setMailError(false)
            setPasswordError(true)
            return false
        }

        setMailError(false)
        setPasswordError(false)
        return true
    }

    const send = e => {
        e.preventDefault();
        if(isValid()) {
            setIsLoading(true)
            console.log(mail, password)
            setTimeout(() => {
                setIsLoading(false)
            }, 1000);
        }
    }

    return isLoading ? (<>Loading ..</> ): (
        <>
            <div className='navbar'>
                <h3 className='navbar-title'>Bienvenido</h3>
            </div>
            <div className='container-login'>
                <form onSubmit={send} className='container-form'>
                    <img src={logo} alt='Limp!' className='container-logo' />
                    <div className='input-form'>
                        <label>Correo Electronico:</label>
                        <input
                            className='input-login'
                            type='email'
                            name='mail' 
                            placeholder='mail@mail.com' 
                            value={mail} 
                            onChange={e => setMail(e.target.value)}
                            required={true}
                        />
                        {mailError && <label className='input-error'>
                            Ingrese un correo valido
                        </label>}
                    </div>
                    <div className='input-form'>
                        <label>Contrasena:</label>
                        <input
                            className='input-login'
                            type='password'
                            name='password' 
                            placeholder='******' 
                            value={password} 
                            onChange={e => setPassword(e.target.value)}
                            required={true}
                        />
                        {passwordError && <label className='input-error'>
                            Debe escribir una contrasena
                        </label>}
                    </div>
                    <input 
                        className='input-login button'
                        type='submit' 
                        value='Ingresar'
                    />
                </form>
            </div>
        </>
    )
}