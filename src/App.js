import React, { Component } from "react";
import "./App.css";
import logo220 from "./images/220.png";
import logo39 from "./images/39.png";
import logo55 from "./images/55.png";
import logo64 from "./images/64.png";
import logo86 from "./images/86.png";
import logo99 from "./images/99.png";
import logo100 from "./images/100.png";
import logo105 from "./images/105.png";
import logo114 from "./images/114.png";
import logo134 from "./images/134.png";
import logo195 from "./images/195.png";
import logo205 from "./images/205.png";
import logo207 from "./images/207.png";
import logo225 from "./images/225.png";
import logo228 from "./images/228.png";
import logo229 from "./images/229.png";
import myPhoto from "./images/myPhoto.jpg";
import photo1 from "./images/photo1.jpg";
import photo2 from "./images/photo2.jpg";
import photo3 from "./images/photo3.jpg";
import { Container, Row, Nav, Button, Card, CardDeck } from "react-bootstrap";

class App extends Component {
  render() {
    return (
      <div>
        <Container className={"body-box"}>
          <div className={"Rectangle-1"}>
            <Row className="nav">
              <Row className={"left-col"}>
                <img src={logo220} alt=""></img>
                <h1>ORGANIC</h1>
              </Row>
              <Row className="right-col">
                <Nav>
                  <Nav.Item className="home">
                    <Nav.Link href="/home">Home</Nav.Link>
                  </Nav.Item>
                  <Nav.Item>
                    <Nav.Link>Products</Nav.Link>
                  </Nav.Item>
                  <Nav.Item>
                    <Nav.Link>Blog</Nav.Link>
                  </Nav.Item>
                  <Nav.Item>
                    <Nav.Link>About Us</Nav.Link>
                  </Nav.Item>
                  <Nav.Item className="contact">
                    <Nav.Link>Contact</Nav.Link>
                  </Nav.Item>
                </Nav>
              </Row>
            </Row>

            <Row className="box-2">
              <Row className="col-6 left-row">
                <h2>Healthy life with</h2>
                <h1 style={{ fontWeight: "bold" }}>Nature Organic</h1>
                <p>
                  Vegetables are the edible parts of a plant that is used in
                  cooking or can be eaten now.
                </p>
                <Button>Explore Now</Button>
              </Row>
              <Row className="col-6 right-row">
                <img className="img-1" src={logo195}></img>
                <img className="img-2" src={logo228}></img>
              </Row>
            </Row>
          </div>

          <div className="Rectangle-2">
            <div className="content">
              <img src={logo114}></img>
              <h2>Welcome to Nature</h2>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Necessitatibus voluptates impedit ut adipisci maxime,
              </p>
            </div>

            <Row className="card">
              <img src={logo207}></img>
              <img src={logo205}></img>
              <img src={logo207}></img>
              <img src={logo207}></img>
            </Row>
          </div>

          <div className="Rectangle-3">
            <h2>Proudly presented by</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Necessitatibus voluptates impedit ut adipisci maxime,
            </p>

            <Row className="card">
              <img src={logo39}></img>
              <img src={logo64}></img>
              <img src={logo55}></img>
              <img src={logo64}></img>
              <img src={logo39}></img>
            </Row>

            <div className="dot">
              <div></div>
              <div style={{ backgroundColor: "#00dbd0" }}></div>
              <div></div>
              <div></div>
            </div>
          </div>

          <div className="Rectangle-4">
            <img className="logo" src={logo134}></img>
            <div className="content">
              <img src={logo86}></img>
              <img className="myPhoto" src={myPhoto}></img>
              <strong>Vishal</strong>
              <div className="feedback">
                <span class="material-icons">star_border</span>
                <span class="material-icons">star_border</span>
                <span class="material-icons">star_border</span>
                <span class="material-icons">star_border</span>
                <span class="material-icons">star_border</span>
              </div>
              <p>
                Thank you for all the amazing produce and products you deliver
                each week...
              </p>
              <p>
                You make my life so easy and bring goodness into our family
                eating.
              </p>
              <p>I've been roasting a lot of brussel sprouts and</p>
              <div className="dot">
                <div style={{ backgroundColor: "#00dbd0" }}></div>
                <div></div>
                <div></div>
                <div></div>
              </div>

              <div className="subscribe">
                <h2>Subscribe to Out Newsletter</h2>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Necessitatibus voluptates impedit ut adipisci maxime,
                </p>
                <form>
                  <input type={"text"} placeholder={"Enter your email"} />
                  <Button>Subscribe</Button>
                </form>
              </div>
            </div>
          </div>

          <div className="Rectangle-5">
            <div className="content">
              <img src={logo114}></img>
              <h2>Read Our Blog</h2>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Necessitatibus voluptates impedit ut adipisci maxime,
              </p>

              <CardDeck>
                <Card>
                  <Card.Img variant="top" src={photo1} />
                  <Card.Body>
                    <Card.Title>Card title</Card.Title>
                    <Card.Text>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Necessitatibus voluptates impedit ut adipisci maxime
                    </Card.Text>
                    <p className="box">
                      Read More
                      <div className="more"></div>
                    </p>
                  </Card.Body>
                </Card>
                <Card>
                  <Card.Img variant="top" src={photo2} />
                  <Card.Body>
                    <Card.Title>Card title</Card.Title>
                    <Card.Text>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Necessitatibus voluptates impedit ut adipisci maxime
                    </Card.Text>
                    <p className="box">
                      Read More
                      <div className="more"></div>
                    </p>
                  </Card.Body>
                </Card>
                <Card>
                  <Card.Img variant="top" src={photo3} />
                  <Card.Body>
                    <Card.Title>Card title</Card.Title>
                    <Card.Text>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Necessitatibus voluptates impedit ut adipisci maxime
                    </Card.Text>
                    <p className="box">
                      Read More
                      <div className="more"></div>
                    </p>
                  </Card.Body>
                </Card>
              </CardDeck>
            </div>
          </div>
        </Container>
        <footer>
          <Container>
            <Row>
              <div className="div-1">
                <img src={logo225}></img>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Necessitatibus voluptates 
                </p>
                <div className="bordr"></div>
                <div className="copyright">
                  <span style={{color: "white"}} class="material-icons">copyright</span>Copyright 2021
                  Nature
                </div>
              </div>

              <div className="div-2">
                <h4>Information</h4>
                <div className="bordr"></div>
                <div>About Us</div>
                <div>Products</div>
                <div>Contact Us</div>
                <div>Terms of Service</div>
              </div>

              <div className="div-3">
                <h4>Follow Us</h4>
                <div className="bordr"></div>
                <div className="social">
                  <img src={logo99}></img>
                  <img src={logo100}></img>
                  <img src={logo105}></img>
                </div>
              </div>
            </Row>
          </Container>
        </footer>
      </div>
    );
  }
}

export default App;
