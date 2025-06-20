import {Col, Form, Row} from "react-bootstrap";

export default function ThirdPage() {
    return(
        <div className= "p-5">
            <div className="d-grid p-5 border border-5 border-secondary">
                <Form>
                    <Row>
                        <Col md={4}>
                            <Form.Group>
                                <Form.Label>Details of probationary period, if any</Form.Label>
                                <Form.Control type="text" placeholder="Enter Notice Period">

                                </Form.Control>
                            </Form.Group>

                        </Col>

                        <Col md={4}>
                            <Form.Group>
                                <Form.Label>Your expected retirement age</Form.Label>
                                <Form.Control type="number" placeholder="Enter Expected Retirement Age">

                                </Form.Control>
                            </Form.Group>
                        </Col>
                        <Col md={4}>
                            <Form.Group>
                                <Form.Label>National Insurance Number</Form.Label>
                                <Form.Control type="text" placeholder="Enter National Insurance Number">

                                </Form.Control>
                            </Form.Group>
                        </Col>

                    </Row>
                </Form>

                <Form className="mt-5">
                    <Row>
                        <Col md={4}>
                            <Form.Group>
                                <Form.Label>please give details of your previous occupation(s)</Form.Label>
                                <Form.Control type="text" placeholder="Enter Previous Occupation">

                                </Form.Control>
                            </Form.Group>

                        </Col>

                        <Col md={4}>
                            <Form.Group>
                                <Form.Label>Previous Occupation/Job Title</Form.Label>
                                <Form.Control type="text" placeholder="Enter Previous Occupation job title">

                                </Form.Control>
                            </Form.Group>
                        </Col>
                        <Col md={4}>
                            <Form.Group>
                                <Form.Label>Previous employer</Form.Label>
                                <Form.Control type="text" placeholder="Enter Previous Employer">

                                </Form.Control>
                            </Form.Group>
                        </Col>

                    </Row>
                </Form>



                <Form className="mt-5">
                    <Row>
                        <Col md={4}>
                            <Form.Group>
                                <Form.Label>Time in employment</Form.Label>
                                <Form.Control type="text" placeholder="Enter Time in Employment">

                                </Form.Control>
                            </Form.Group>

                        </Col>

                        <Col md={4}>
                            <Form.Group>
                                <Form.Label>Notes</Form.Label>
                                <Form.Control type="text" placeholder="Enter notes relating to your previous employment">

                                </Form.Control>
                            </Form.Group>
                        </Col>
                        <Col md={4}>
                            <Form.Group>
                                <Form.Label>Lender</Form.Label>
                                <Form.Control type="text" placeholder="Enter any other information"></Form.Control>
                            </Form.Group>
                        </Col>

                    </Row>
                </Form>

                <Form className="mt-5">
                    <Row>
                        <Col md={4}>
                            <Form.Group>
                                <Form.Label>Owner</Form.Label>
                                <Form.Control type="text" placeholder="Enter Owner"></Form.Control>
                            </Form.Group>
                        </Col>

                        <Col md={4}>
                            <Form.Group>
                                <Form.Label>Amount of Loan outstanding</Form.Label>
                                <Form.Control type="text" placeholder="Enter text"></Form.Control>
                            </Form.Group>
                        </Col>
                        <Col md={4}>
                            <Form.Group>
                                <Form.Label>Term remaining</Form.Label>
                                <Form.Control type="text" placeholder="Enter Remaining Term"></Form.Control>
                            </Form.Group>
                        </Col>
                    </Row>
                </Form>


            </div>
        </div>
    )
}