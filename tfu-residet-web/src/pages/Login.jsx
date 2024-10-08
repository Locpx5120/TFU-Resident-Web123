import React, { useContext, useState } from "react";
import { Container, Row, Col, Form, FormGroup, Button } from "react-bootstrap";
import '../styles/login.css';
import { Link, useNavigate } from "react-router-dom";
import { authService } from '../services/authService';
import Swal from "sweetalert2";

const Login = () => {
    const [credentials, setCredentials] = useState({
        email: '',
        password: ''
    });

    const { dispatch } = useContext(authService);
    const navigate = useNavigate();

    // Hàm thay đổi giá trị input
    const handleChange = e => {
        setCredentials(prev => ({ ...prev, [e.target.id]: e.target.value }));
    };

    // Hàm xử lý đăng nhập
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
            const res = await fetch('http://localhost:5045/api/auth/token', {
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
        <section className="login-section">
         <Container>
            <Row>
               <Col lg='8' className='m-auto'>
                  <div className="login-container d-flex justify-content-between">

                     <div className="login-form">
                        <h2>Đăng nhập</h2>

                        <Form onSubmit={handleClick}>
                           <FormGroup>
                              <input type="email" placeholder='Email' id='email' onChange={handleChange} required />
                           </FormGroup>
                           <FormGroup>
                              <input type="password" placeholder='Mật khẩu' id='password' onChange={handleChange} required />
                           </FormGroup>
                           <Button className='btn primary-btn' type='submit'>Đăng nhập</Button>
                        </Form>
                        <p><Link to='/forgot-password'>Quên mật khẩu?</Link></p>
                        <p>Bạn chưa có tài khoản? <Link to='/register'>Đăng ký</Link></p>
                     </div>
                  </div>
               </Col>
            </Row>
         </Container>
      </section>
    );
};

export default Login;
