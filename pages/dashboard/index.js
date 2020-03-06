import React, { useState, useEffect } from "react";
import Head from 'next/head'

import {
    Col,
    Row,
    Card,
    Input,
    CardBody,
    Container,
    Button,
    Spinner,
    CardText,
    CardTitle,
    InputGroupAddon,
    InputGroup,
    CardFooter,
} from 'reactstrap';

const Dashboard = () => {

    const [email, setEmail] = useState('')
    const [input, setInput] = useState('')
    const [output, setOutput] = useState('')
    const [loading, setLoading] = useState(false)

    const StringReducer = () => {
        setLoading(true)
        let letterArr = input.split('')
        for (let i = 0; i < letterArr.length - 1; i++) {
            if (letterArr[i] === letterArr[i + 1]) {
                letterArr.splice(i, 2)
                i -= 2
            }
        }
        setTimeout(() => {
            setLoading(false)
            setOutput(letterArr.length ? letterArr.join('') : "Empty String")
        }, 1000);
    }

    const handleChange = (event) => {
        const regex = /^[A-Z]+$/i;
        if (event.target.value.match(regex) || event.target.value === '') {
            setInput(event.target.value.toLowerCase())
        }
    }

    useEffect(() => {
        setEmail(localStorage.getItem("email"))
    })

    return (
        <div
            style={{
                height: '100vh',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
            }}>
            <Head>
                <title>Dashboard</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <Container className="themed-container " fluid="md">
                <h1 style={{ paddingBottom: 100, textAlign: 'center' }}>Welcoming {email}</h1>
                <Row style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                    <Col xs="10" sm='6'>
                        <Card>
                            <CardBody>
                                <CardTitle style={{ fontWeight: 'bold' }}>Answer Number 1</CardTitle>
                                <hr />
                                <ul>
                                    <li>
                                        <CardText>Can't input number and symbol</CardText>
                                    </li>
                                    <li>
                                        <CardText>Only lowercase letters</CardText>
                                    </li>
                                </ul>
                                <InputGroup>
                                    <Input
                                        placeholder="Input"
                                        name="inputAscii"
                                        id="inputAscii"
                                        value={input}
                                        onChange={handleChange}
                                    />
                                    <InputGroupAddon addonType="prepend">
                                        <Button color='primary' onClick={StringReducer}>Process {loading && <Spinner color="success" size='sm' />}</Button>
                                    </InputGroupAddon>
                                </InputGroup>
                            </CardBody>
                            <CardFooter>Output : {output}</CardFooter>
                        </Card>
                    </Col>
                    <Col xs="10" sm='6'>
                        <Card>
                            <CardBody>
                                <CardTitle style={{ fontWeight: 'bold' }}>Answer Number 2</CardTitle>
                                <hr />
                                <CardText>I have tested it in my local database, and this is the query that I did for the second question</CardText>
                            </CardBody>
                            <CardFooter>
                                <code>select CEIL(AVG(Salary) - AVG(REPLACE(Salary, '0', ''))) from EMPLOYEES;</code>
                            </CardFooter>
                        </Card>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default Dashboard