import { Container, Row, Col ,Card,Button} from "react-bootstrap";
import image1 from "../assets/img/image_processing20220204-30382-1xi0cz.gif";
import image2 from "../assets/img/moving-car.gif";
import image3 from "../assets/img/java-img.gif";
import image4 from "../assets/img/lpo.png";
import image5 from "../assets/img/plants.gif";
import image6 from "../assets/img/gify-guitar.gif";

export const Project = () => {
  

  return (
    <section className="projects" id="projects">
      <Container>
        <Row>
          <Col>
            <h2>Projects & Blogs</h2>
            <h6>
              🚀 Here are some of my past Projects and Blogs 
            </h6>
          </Col>
          
        </Row>
        <Row>
          <Col md={4}>
            <Card className="card-box">
            <img src={image1}></img>
              <Card.Body>
              {/* <img src={image1}></img> */}
                <Card.Title>Play with kernels</Card.Title>
                <Card.Text>
                  Image Processing task
                </Card.Text>
                <Button variant="primary" href="https://playwithkernel.streamlit.app/"  target="_blank">View Project</Button>
              </Card.Body>
            </Card>
          </Col>
          <Col md={4}>
            <Card className="card-box">
            <img src={image2}></img>
              <Card.Body>
                <Card.Title>Spot the NumberPlate!</Card.Title>
                <Card.Text>
                  Automatic Nuber Plate Detection using OpenCV & Python
                </Card.Text>
                <Button variant="primary" href="https://github.com/Pri1235/ANPR/tree/master"  target="_blank">View Code</Button>
              </Card.Body>
            </Card>
          </Col>
          <Col md={4}>
            <Card className="card-box">
            <img src={image3}></img>
              <Card.Body>
                <Card.Title>Text Compression</Card.Title>
                <Card.Text>
                  Huffman Coding Implemenation in Java
                </Card.Text>
                <Button variant="primary" href="https://github.com/Pri1235/java_project"  target="_blank">View Code</Button>
              </Card.Body>
            </Card>
          </Col>
          <Col md={4}>
            <Card className="card-box">
            <img src={image4}></img>
              <Card.Body>
                <Card.Title> What are Neural Networks🤔</Card.Title>
                
                <Button variant="primary" href="https://medium.com/@p._./neural-nets-299072b6e45f" target="_blank">View Project</Button>
              </Card.Body>
            </Card>
          </Col>
          <Col md={4}>
            <Card className="card-box">
            <img src={image5}></img>
              <Card.Body>
                <Card.Title>Transformer is all you need! 🤖</Card.Title>
                
                <Button variant="primary" href="https://medium.com/@p._./transformer-is-all-you-need-7335552ca0f6" target="_blank">View Project</Button>
              </Card.Body>
            </Card>
          </Col>
          <Col md={4}>
            <Card className="card-box">
            <img src={image6}></img>
              <Card.Body>
                <Card.Title>Kernels: Image Processing💡</Card.Title>
                
                <Button variant="primary" href="https://medium.com/@p._./kernels-13ec5a4ec95" target="_blank">View Project</Button>
              </Card.Body>
            </Card>
          </Col>
          {/* Add more Col components for additional projects */}
        </Row>
      </Container>
    </section>
  );
};
