import React, {useState} from 'react'
import { useDispatch, useSelector } from "react-redux";
import {useHistory} from 'react-router-dom'
import logo from '../assets/img/logo.png'
import '../assets/css/Login.css'

import Loader from '../components/Loader/Loader'

import { userData, loginFetch } from "../redux/slices/loginSlice";

export default function Login() {
    const { loading, error } = useSelector(userData)
    const dispatch = useDispatch()
    const history = useHistory();
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
            dispatch(loginFetch({mail, password}, history))
        }
    }

    return loading ? (<Loader /> ): (
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
            {error && <div>{error}</div>}
        </>
    )
}