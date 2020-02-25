import React, { useState } from "react";
import Head from 'next/head'

import {
    Col,
    Row,
    Card,
    Form,
    Input,
    Label,
    CardBody,
    Container,
    FormGroup,
    Button,
    Spinner,
} from 'reactstrap';

import { useFormik } from "formik"
import * as Yup from "yup"

const validationSchema = Yup.object().shape({
    email: Yup.string()
        .email()
        .required()
        .test("same", " Wrong Email", data => {
            if (data !== 'support@joinprint.com.hk') {
                return false
            }
            return true
        }),
    password: Yup.string()
        .min(2)
        .max(50)
        .required()
        .test("same", " Wrong Password", data => {
            if (data !== 'support@joinprint.com.hk') {
                return false
            }
            return true
        }),
})

const Login = () => {

    const formik = useFormik({
        initialValues: {
            email: "",
            password: ""
        },
        validationSchema,
        onSubmit: values => {
            setLoading(true)
            localStorage.setItem("email", values.email);
            window.location.href = "/dashboard"
        }
    })

    const [loading, setLoading] = useState(false)

    const showError = field => {
        return <div style={{ color: 'red' }}>{(formik.errors[field] && formik.touched[field] && formik.errors[field]) || " "}</div>
    }

    return (
        <div style={{
            height: '100vh',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
        }}>
            <Head>
                <title>Login</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <Container className="themed-container " fluid="md">
                <Row style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                    <Col xs="10" sm="6">
                        <Card>
                            <CardBody>
                                <Form>
                                    <FormGroup>
                                        <Label>Email</Label>
                                        <Input
                                            placeholder="Email"
                                            name="email"
                                            type='email'
                                            id="email"
                                            value={formik.values.email}
                                            invalid={formik.errors.email}
                                            onChange={formik.handleChange}
                                        />
                                        {showError('email')}
                                    </FormGroup>
                                    <FormGroup>
                                        <Label>Password</Label>
                                        <Input
                                            placeholder="Password"
                                            name="password"
                                            type='password'
                                            id="password"
                                            value={formik.values.password}
                                            invalid={formik.errors.password}
                                            onChange={formik.handleChange}
                                        />
                                        {showError('email')}
                                    </FormGroup>
                                    <Button onClick={formik.handleSubmit} color='primary'>Login {loading && <Spinner color="success" size='sm' />}</Button>
                                </Form>
                            </CardBody>
                        </Card>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default Login
