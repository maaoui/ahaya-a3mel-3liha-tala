import React, { Component } from "react";
import "./card.css";
import {
  Button,
  Fa,
  ModalHeader,
  Modal,
  ModalBody,
  Container,
  Row,
  Col,
  Card,
  CardImage,
  CardBody,
  CardTitle,
  CardText,
  CardFooter,
  Tooltip
} from "mdbreact";

class CardContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      modal8: false
    };
  }
  toggle = () => {
    this.setState({
      modal8: true
    });
  };
  render() {
    return (
      <Container>
        <section className="text-center my-5">
          <h2 className="h1-responsive font-weight-bold text-center my-5">
            Your result for " Graphic AND design"
          </h2>
          <hr />

          <Row className="swing-in-top-fwd">
            <Col lg="4" md="12" className="mb-lg-0 mb-4">
              <Card wide ecommerce className="view zoom">
                <CardImage
                  cascade
                  src="https://mdbootstrap.com/img/Photos/Horizontal/E-commerce/Products/img (55).jpg"
                  top
                  alt="sample photo"
                />
                <CardBody cascade className="text-center">
                  <a href="" className="text-muted">
                    <h5>Camera</h5>
                  </a>
                  <CardTitle>
                    <strong>
                      <a href="">GoPro</a>
                    </strong>
                  </CardTitle>
                  <CardText>
                    Lorem ipsum dolor sit amet, consectetur adipisicing minima
                    veniam elit.
                  </CardText>
                  <CardFooter className=" px-1">
                    <span className="float-left font-weight-bold">
                      <strong>1439$</strong>
                    </span>
                    <div className="float-right">
                      <div
                        className="heart-logo"
                        placement="top"
                        tag="a"
                        component="i"
                        componentClass="fa fa-eye grey-text ml-3"
                      >
                        <i class="fas fa-heartbeat" />
                      </div>
                    </div>

                    <div className="float-right">
                      <div
                        className="share-logo"
                        placement="top"
                        tag="a"
                        component="i"
                        componentClass="fa fa-eye grey-text ml-3"
                      >
                        <i class="fas fa-share-alt" />
                      </div>
                    </div>
                  </CardFooter>
                </CardBody>
              </Card>
            </Col>
          </Row>
        </section>
      </Container>
    );
  }
}

export default CardContainer;
