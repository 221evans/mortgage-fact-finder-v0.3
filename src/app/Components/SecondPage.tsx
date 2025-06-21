import {Col, Form, Row} from "react-bootstrap";

export default function SecondPage(){
    return(
        <div className= "p-5">

            <div className="d-grid p-5 border border-5 border-secondary">
                <Form>
                    <Row>
                        <Col md={4}>
                            <Form.Group>
                                <Form.Label>Nationality</Form.Label>
                                <Form.Control type="text" placeholder="Enter Nationality">

                                </Form.Control>
                            </Form.Group>

                        </Col>

                        <Col md={4}>
                            <Form.Group>
                                <Form.Label>Country of Residence</Form.Label>
                                <Form.Control type="text" placeholder="Enter Country of residence">

                                </Form.Control>
                            </Form.Group>
                        </Col>
                        <Col md={4}>
                            <Form.Group>
                                <Form.Label>Do you have any Dependants?</Form.Label>

                                <Form.Select>
                                    <option value="">Select</option>
                                    <option value="yes">Yes</option>
                                    <option value="no">No</option>
                                </Form.Select>
                            </Form.Group>
                        </Col>

                    </Row>
                </Form>

                <Form className="mt-5">
                    <Row>
                        <Col md={4}>
                            <Form.Group>
                                <Form.Label>Date moved into your current address</Form.Label>
                                <Form.Control type="date" placeholder="Enter Date ">

                                </Form.Control>
                            </Form.Group>

                        </Col>

                        <Col md={4}>
                            <Form.Group>
                                <Form.Label>Previous address if less than 3 years</Form.Label>
                                <Form.Control type="text" placeholder="Enter Previous Address">

                                </Form.Control>
                            </Form.Group>
                        </Col>
                        <Col md={4}>
                            <Form.Group>
                                <Form.Label>Employment status</Form.Label>
                                <Form.Select>
                                    <option value="">Select</option>
                                    <option value="employed">Employed</option>
                                    <option value="self-employed">Self Employed</option>
                                    <option value="retired">Retired</option>
                                    <option value="unemployed">Not Employed</option>
                                </Form.Select>

                            </Form.Group>
                        </Col>

                    </Row>
                </Form>

                <Form className="mt-5">
                    <Row>
                        <Col md={4}>
                            <Form.Group>
                                <Form.Label>Current employer/Name of Business</Form.Label>
                                <Form.Control type="text" placeholder="Enter current employer name">

                                </Form.Control>
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
                                <Form.Label>Occupation / Job Title</Form.Label>
                                <Form.Control type="text" placeholder="Enter Occupation">

                                </Form.Control>
                            </Form.Group>
                        </Col>

                    </Row>
                </Form>

                <Form className="mt-5">
                    <Row>
                        <Col md={4}>
                            <Form.Group>
                                <Form.Label>On what basis?
                                    (Permanent/Temp/Contract)</Form.Label>
                                <Form.Select>
                                    <option value="">Select</option>
                                    <option value="permanent">Permanent</option>
                                    <option value="temp">Temporary</option>
                                    <option value="contract">Contract</option>
                                </Form.Select>
                            </Form.Group>

                        </Col>

                        <Col md={4}>
                            <Form.Group>
                                <Form.Label>If contract worker, specify end of term of contract</Form.Label>
                                <Form.Control type="text" placeholder="Specify the end of term of your contract">

                                </Form.Control>
                            </Form.Group>
                        </Col>
                        <Col md={4}>
                            <Form.Group>
                                <Form.Label>Current employment start date</Form.Label>
                                <Form.Control type="date" placeholder="Enter Employment Start Date ">

                                </Form.Control>
                            </Form.Group>
                        </Col>

                    </Row>
                </Form>

            </div>
        </div>
    )
}