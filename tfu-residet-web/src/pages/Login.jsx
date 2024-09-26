import React, { useContext, useState } from "react";
import { Container, Row, Col, Form, FormGroup, Button } from "react-bootstrap";
import '../styles/login.css';
import { Link, useNavigate } from "react-router-dom";
import { authService } from '../services/authService';
import Swal from "sweetalert2";

const Login = () => {
    const [credentials, setCredentials] = useState({
        email: undefined,
        password: undefined
    })

    const { dispatch } = useContext(authService)
    const navigate = useNavigate()

    const handleChange = e => {
        setCredentials(prev => ({ ...prev, [e.target.id]: e.target.value }))
    }

    const handleClick = async e => {
        e.preventDefault()
        Swal.fire({
            icon: 'success',
            title: 'Đăng nhập thành công',
            showConfirmButton: true,
            confirmButtonText: 'OK',
            confirmButtonColor: '#3085d6',
            timer: 1500
        })
        dispatch({ type: 'LOGIN_START' })

        try {
            const res = await fetch('http://localhost:8000/api/v1/auth/login', {
                method: 'post',
                headers: {
                    'content-type': 'application/json'
                },
                credentials: 'include',
                body: JSON.stringify(credentials)
            })

            const result = await res.json()
            if (!res.ok) alert(result.message)
            console.log(result.data)

            dispatch({ type: "LOGIN_SUCCESS", payload: result.data })
            navigate('/')
        } catch (err) {
            dispatch({ type: "LOGIN_FAILURE", payload: err.message })
        }
    }

    return (
        <section>
            <Container>
                <Row>
                    <Col lg='8' className='m-auto'>
                        <div className="login__container d-flex justify-content-between">

                            <div className="login__form">
                                <h2>Login</h2>

                                <Form onSubmit={handleClick}>
                                    <FormGroup>
                                        <input type="email" placeholder='Email' id='email' onChange={handleChange} required />
                                    </FormGroup>
                                    <FormGroup>
                                        <input type="password" placeholder='Password' id='password' onChange={handleChange} required />
                                    </FormGroup>
                                    <Button className='btn secondary__btn auth__btn' type='submit'>Login</Button>
                                </Form>
                                <p>Forgot password?<Link to='/reset-password'>Reset password</Link></p>
                                <p>Don't have an account? <Link to='/register'>Create</Link></p>
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}

export default Login