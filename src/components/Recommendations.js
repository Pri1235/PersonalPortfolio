import { Container,Row,Col, Button} from "react-bootstrap"

export const Recommendation= ()=>{
 return (
    <section className="recommendations" id="recommendations">
        <Container>
            <Row>
                <Col>
                <h1>Some of my recommendations</h1>
                </Col>
            </Row>
            <Row>
                <Col md={4}>
                    <h3>Machine Learning</h3>
                    <p>I found these sources effective for learning these concepts</p>
                </Col>
                <Col md={4}>
                    <div className="re-list">
                        <ul>
                        <li><a href="https://www.youtube.com/@AndrejKarpathy" className="re-links" target="_blank">Zero-to-Hero by Andrej Karapathy</a></li>
                        <li><a href="https://www.youtube.com/@CodeEmporium" className="re-links" target="_blank">Code Emporium </a></li>
                        <li><a href="https://paperswithcode.com/" className="re-links" target="_blank">Papers-With-Code for Research Papers</a></li>
                        <li><a href="https://www.tensorflow.org/tutorials" className="re-links" target="_blank">TensorFLow For learning</a></li>
                        <li><a href="https://www.deeplearningbook.org/" className="re-links" target="_blank">Deep Learning Book by Ian Goodfellow</a></li>
                        <li><a href="https://colah.github.io/" className="re-links" target="_blank">Colah's Blog</a></li>
                        <li><a href="https://course.fast.ai/Lessons/lesson1.html" className="re-links" target="_blank">Practical Deep Learning For Coders</a></li>
                        <li><a href=" https://bipinkrishnan.github.io/ml-recipe-book/about.html" className="re-links" target="_blank">ML Recipe by Bipin Krishnan</a></li>
                       
                        </ul>
                    </div>
                </Col>
            </Row>
            <Row>
                <Col md={4}>
                    <h3>Competitive Programming</h3>
                    <p>Some sites, youtube channels and sheets other than the famous ones!</p>
                </Col>
                <Col md={4}>
                    <div className="re-list">
                        <ul>
                        <li><a href="https://cses.fi/problemset" className="re-links" target="_blank">CSES -questions</a></li>
                        <li><a href="https://www.youtube.com/watch?v=G-uriCpjSOA&list=PLAj_13N2fk-RA6wvOUmWOyUeL9zmWFJoI" className="re-links" target="_blank">Dynamic programming Playlist</a></li>
                        <li><a href="https://www.youtube.com/watch?v=HtSuA80QTyo&list=PLUl4u3cNGP61Oq3tWYp6V_F-5jb5L2iHb" className="re-links" target="_blank">MIT OCW</a></li>
                        <li><a href="https://cp-algorithms.com/index.html" className="re-links" target="_blank">CP-Algorithms</a></li>
                        <li><a href="https://earthshakira.github.io/a2oj-clientside/server/Ladder11.html" className="re-links" target="_blank">A2OJ Ladder</a></li>
                        </ul>
                    </div>
                </Col>
            </Row>
            <Row>
                <Col md={4}>
                    <h3>Miscellaneous</h3>
                    <p>DevOps, System design, Maths,Tech news and more...</p>
                </Col>
                <Col md={4}>
                    <div className="re-list">
                        <ul>
                            <li><a href="https://blog.bytebytego.com/" className="re-links" target="_blank">ByteByteGO</a></li>
                            <li><a href="https://www.youtube.com/@gkcs" className="re-links" target="_blank">Gaurav Sen</a></li>
                            <li><a href="https://www.youtube.com/@Fireship" className="re-links" target="_blank">FireshipIO</a></li>
                            <li><a href="https://www.3blue1brown.com" className="re-links" target="_blank">3Blue1Brown</a></li>
                            <li><a href="https://www.youtube.com/@Computerphile" className="re-links" target="_blank">Computerphile</a></li>
                        </ul>
                    </div>
                </Col>
            </Row>
        </Container>
    </section>
 )
}