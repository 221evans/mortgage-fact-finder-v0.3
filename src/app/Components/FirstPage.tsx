import {Col, Form, Row} from "react-bootstrap";

export default function FirstPage(){
    return(
        <>
            <div className= "p-5">

                <div className="d-grid p-5 border border-5 border-secondary">
                    <Form>
                        <Row>
                            <Col md={4}>
                                <Form.Group>
                                    <Form.Label>Title</Form.Label>
                                    <Form.Control type="text" placeholder="Enter Title">

                                    </Form.Control>
                                </Form.Group>

                            </Col>

                            <Col md={4}>
                                <Form.Group>
                                    <Form.Label>First Name</Form.Label>
                                    <Form.Control type="text" placeholder="Enter First Name">

                                    </Form.Control>
                                </Form.Group>
                            </Col>
                            <Col md={4}>
                                <Form.Group>
                                    <Form.Label>Middle Name (Optional)</Form.Label>
                                    <Form.Control type="text" placeholder="Enter Middle Name">

                                    </Form.Control>
                                </Form.Group>
                            </Col>

                        </Row>
                    </Form>

                <Form className="mt-5">
                    <Row>
                        <Col md={4}>
                            <Form.Group>
                                <Form.Label>Last name</Form.Label>
                                <Form.Control type="text" placeholder="Enter Last Name">

                                </Form.Control>
                            </Form.Group>

                        </Col>

                        <Col md={4}>
                            <Form.Group>
                                <Form.Label>Previous Name (Optional)</Form.Label>
                                <Form.Control type="text" placeholder="Enter Previous Name">

                                </Form.Control>
                            </Form.Group>
                        </Col>
                        <Col md={4}>
                            <Form.Group>
                                <Form.Label>Current Address</Form.Label>
                                <Form.Control type="text" placeholder="Enter Current Address">

                                </Form.Control>
                            </Form.Group>
                        </Col>

                    </Row>
                </Form>

                    <Form className="mt-5">
                        <Row>
                            <Col md={4}>
                                <Form.Group>
                                    <Form.Label>Gender</Form.Label>
                                    <Form.Select>
                                        <option value="">Select Gender</option>
                                        <option value="Male">Male</option>
                                        <option value="Female">Female</option>

                                    </Form.Select>

                                </Form.Group>

                            </Col>

                            <Col md={4}>
                                <Form.Group>
                                    <Form.Label>Enter Date of Birth</Form.Label>
                                    <Form.Control type="date">

                                    </Form.Control>
                                </Form.Group>
                            </Col>
                            <Col md={4}>
                                <Form.Group>
                                    <Form.Label>Age</Form.Label>
                                    <Form.Control type="number" placeholder="Enter Age">

                                    </Form.Control>
                                </Form.Group>
                            </Col>

                        </Row>
                    </Form>

                    <Form className="mt-5">
                        <Row>
                            <Col md={4}>
                                <Form.Group>
                                    <Form.Label>Telephone Number</Form.Label>
                                    <Form.Control type="number" placeholder="Enter Phone Number">
                                    </Form.Control>
                                </Form.Group>

                            </Col>

                            <Col md={4}>
                                <Form.Group>
                                    <Form.Label>Email Address</Form.Label>
                                    <Form.Control type="text" placeholder="Enter Email Address">

                                    </Form.Control>
                                </Form.Group>
                            </Col>
                            <Col md={4}>
                                <Form.Group>
                                    <Form.Label>Marital Status</Form.Label>
                                    <Form.Control type="text" placeholder="Enter Marital Status">

                                    </Form.Control>
                                </Form.Group>
                            </Col>

                        </Row>
                    </Form>

                </div>
            </div>
        </>
    )
}