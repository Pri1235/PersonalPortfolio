import { Container, Row, Col } from "react-bootstrap";
import circle from "../assets/img/yellow-circle-svgrepo-com.svg";
import priyalimage from "../assets/img/priyal.jpeg";

export const Connect = () => {
  return (
    <section className="connect" id="connect">
      <Container>
        <Row>
          <Col>
            <h1>Hey There!</h1>
          </Col>
        </Row>
        <div className="inner-box">
          <Row>
            <Col md={4}>
              <h2>Always Up for a Chat!</h2>
              <span>
                <h6>
                  you can mail me at <a href="mailto:priyalcd123@gmail.com"  target="_blank">priyalcd123@gmail.com</a>
                </h6>
              </span>
              <span>
                <h6>
                  or at linkedin <a href="https://linkedin.com/in/priyal-chawda-a103571bb"  target="_blank">Priyal Chawda</a>
                </h6>
              </span>
            </Col>
            <Col md={4}>
              <div className="image-container">
                {/* <img className="circle-image" src={circle} alt="Circle"></img> */}
                <img src={priyalimage} className="popup-image"></img>
              </div>

              {/* <img className="circle-image" src={circle} alt="Circle"></img>
              <img src={priyalimage} className="popup-image" ></img> */}
            </Col>
          </Row>
        </div>
      </Container>
    </section>
  );
};
