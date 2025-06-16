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
                                    <Form.Control type="name" placeholder="Enter Title">

                                    </Form.Control>
                                </Form.Group>

                            </Col>

                            <Col md={4}>
                                <Form.Group>
                                    <Form.Label>First Name</Form.Label>
                                    <Form.Control type="name" placeholder="Enter First Name">

                                    </Form.Control>
                                </Form.Group>
                            </Col>
                            <Col md={4}>
                                <Form.Group>
                                    <Form.Label>Middle Name (Optional)</Form.Label>
                                    <Form.Control type="name" placeholder="Enter Middle Name">

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
                                <Form.Control type="name" placeholder="Enter Last Name">

                                </Form.Control>
                            </Form.Group>

                        </Col>

                        <Col md={4}>
                            <Form.Group>
                                <Form.Label>Previous Name (Optional)</Form.Label>
                                <Form.Control type="name" placeholder="Enter Previous Name">

                                </Form.Control>
                            </Form.Group>
                        </Col>
                        <Col md={4}>
                            <Form.Group>
                                <Form.Label>Current Address</Form.Label>
                                <Form.Control type="name" placeholder="Enter Current Address">

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