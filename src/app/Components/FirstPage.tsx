import {Col, Form, Row} from "react-bootstrap";

export default function FirstPage(){
    return(
        <>
            <div className="d-grid">
                <Form>
                    <Row>
                        <Col md={6}>
                            <Form.Group>
                                <Form.Label>First Name</Form.Label>
                                <Form.Control type="name" placeholder="Enter Name">

                                </Form.Control>
                            </Form.Group>

                        </Col>

                        <Col>
                            <Form.Group>
                                <Form.Label>Last Name</Form.Label>
                                <Form.Control type="name" placeholder="Enter Name">

                                </Form.Control>
                            </Form.Group>
                        </Col>

                    </Row>
                </Form>
            </div>
        </>
    )
}