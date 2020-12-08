import React from "react";
import { Link } from "react-router-dom";
import Container from "../components/Container";
import { Row, Col } from "reactstrap";
import Button from "../components/Button";
import Counter from "../components/Counter";
import { useStoreContext } from '../utils/GlobalStore';

function Dinein() {
    const [state] = useStoreContext();

    return (
        <>
            <Counter />
            <Container>
                <Row>
                    <Col sm="12" md={{ size: 6, offset: 3 }} className="text-center" style={{ marginTop: 50, marginBottom: 50 }}>
                        <h4>Get the items you love!</h4>
                        <Link to="/alacarte">
                            <Button type={"button"} btn={"btn btn1 btn-lrg"}>À La Carte</Button>
                        </Link>
                    </Col>
                </Row>
                <Row>
                    <Col sm="12" md={{ size: 6, offset: 3 }} className="text-center" style={{ marginBottom: 50 }}>
                        <h4>Try our delicious dishes!</h4>
                        <Link to={!state.userLoggedIn ? "/signinsignup": "/rules"}>
                            <Button type={"button"} btn={"btn btn1 btn-lrg"}>All You Can Eat</Button>
                        </Link>
                    </Col>
                </Row>
            </Container>
        </>)

}

export default Dinein;