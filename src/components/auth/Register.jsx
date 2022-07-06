import { Button, Card, Container, Form, FormControl, FormGroup, FormLabel, Row , Col } from 'react-bootstrap'
import React from 'react'
import CardHeader from 'react-bootstrap/esm/CardHeader'
import avatar from './assets/images/avatar.jpg'

const Register = () => {
  return (
    <>
        <Container>
            <Row className='justify-content-center mt-5'>
                <Col md={6}>
                    <Card className='p-2'>
                        <CardHeader>
                            <h1>Sign Up</h1>
                        </CardHeader>
                        <Form>
                            <FormGroup className='mb-3 mt-3'>
                                <FormControl type="text" className='form-control' placeholder='Enter Your Name' name="name"></FormControl>
                            </FormGroup>

                            <FormGroup className='mb-3'>
                                <FormControl type="email" className='form-control' placeholder='Enter Your Email Address' name="email"></FormControl>
                            </FormGroup>

                            <FormGroup className='mb-3'>
                                <FormControl type="password" className='form-control' placeholder='Password'  name="password"></FormControl>
                            </FormGroup>

                            <FormGroup className='mb-3'>
                                <FormControl type="password" className='form-control' placeholder='Confirm Password' name="confirmpassword"></FormControl>
                            </FormGroup>

                            <FormGroup className='mb-3'>
                                <FormControl type="file" className='form-control' name="photo" ></FormControl>
                                <br></br>
                                <img src={avatar} height="100px" width="100px" style={{ objectFit : "cover" }}></img>
                            </FormGroup>

                            <FormGroup className='mb-3'>
                                <Button variant="primary" type="submit">
                                    Sign Up
                                </Button>
                            </FormGroup>
                        </Form>
                     </Card>
                </Col>
            </Row>
        </Container>
    </>
  )
}

export default Register