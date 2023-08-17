import { Container, Row, Col } from "react-bootstrap";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import boatimg from "../assets/img/boat.png";

export const Skills = () => {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };
  return (
    <section className="skill" id="skills">
      <Container>
        <Row>
          <Col>
            <div className="container-text">
              <div className="border-text">
                <h1>Skills</h1>
              </div>
              <div class="content">
                {/* <Col xs={12} md={6} xl={5}>
                  <p>
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                    Debitis ut natus autem facilis ullam eveniet facere fuga
                    reprehenderit. Minima vel ipsum cupiditate architecto
                    repellat itaque aliquid nam qui mollitia accusamus?.
                  </p>
                </Col> */}
                <Row>
                  <Col xs={12} md={4} >
                    <a href="#skills" className="cta"><span className="cta-text">Things I am good at.</span></a>
                    <div className="cta-inner-text">
                       <ul>
                        <li>CPP</li>
                        <li>Python</li>
                        <li>Java</li>
                        <li>MERN Developement</li>
                        <li>MySql</li>
                       </ul>
                    </div>
                  </Col>
                  <Col xs={12} md={4}>
                  <a href="#skills" className="cta1"><span className="cta1-text">Things I Know.</span></a>
                  <div className="cta-inner-text">
                       <ul>
                        <li>JavaScript</li>
                        <li>Flask</li>
                        <li>Docker</li>
                        <li>TensorFlow</li>
                        <li>OpenCV</li>
                        <li>Mendix</li>
                        <li>Excel</li>
                       </ul>
                    </div>
                  </Col>
                  <Col xs={12} md={4}>
                  <a href="#skills" className="cta2"><span className="cta2-text">Things I am Exploring.</span></a>
                  <div className="cta-inner-text">
                       <ul>
                        
                        <li>Deep Learning</li>
                        <li>AWS</li>
                        <li>Research Paper Writing</li>
                        <li>Natural language</li>
                        <li>Processing(NLP)</li>
                        
                       </ul>
                    </div>
                  </Col>
                </Row>
              </div>
              <div className="box-img">
                <img src={boatimg} alt="boatimage"></img>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
      {/* <img className="background-image-left" src={colorSharp}></img> */}
    </section>
  );
};
