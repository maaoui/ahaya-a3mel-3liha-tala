import React, { Component } from "react";
import "./card.css";

import {
  Container,
  Button,
  Fa,
  Modal,
  ModalHeader,
  ModalBody,
  Row,
  Col,
  Card,
  CardImage,
  CardBody,
  CardTitle,
  CardText,
  CardFooter
} from "mdbreact";

class CardContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      modal8: false,
      socialModal: false
    };
  }
  toggleSocialModal = () => {
    this.setState({
      socialModal: !this.state.socialModal
    });
  };
  toggle = () => {
    this.setState({
      modal8: true
    });
  };
  render() {
    return (
      <Container>
        <section className="text-center my-5">
          <h6 className="h6-responsive font-weight-bold text-center my-5">
            Your result for " Graphic AND design"
          </h6>
          <hr />

          <Row className="swing-in-top-fwd">
            <Col lg="3" md="12" className="mb-lg-0 mb-4">
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
                    Lorem ipsum dolor sit amettoggleSocialModal, consectetur
                    adipisicing minima veniam elit.
                  </CardText>
                  <CardFooter className=" px-1">
                    <span className="float-left font-weight-bold">
                      <strong>1439$</strong>
                    </span>

                    <div className="right-card-items">
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
                          <i
                            onClick={() => this.toggleSocialModal()}
                            class="fas fa-share-alt"
                          />
                        </div>
                      </div>
                    </div>
                  </CardFooter>
                </CardBody>
              </Card>
            </Col>
          </Row>
          {/* this is the social media modal  */}
          <div>
            <Modal
              cascading
              isOpen={this.state.socialModal}
              toggle={() => this.toggleSocialModal()}
            >
              <ModalHeader
                className="text-center text-white light-blue darken-3"
                titleClass="w-100"
                tag="h5"
                toggle={() => this.toggleSocialModal()}
              >
                <Fa icon="users" className="text-white mr-2" />
                Spreed the word!
              </ModalHeader>

              <ModalBody className="modal-icons text-center">
                <button
                  className="social-media-btn hvr-grow facebook-icon"
                  tag="a"
                >
                  <Fa icon="facebook" />
                </button>
                <button
                  className="social-media-btn hvr-grow twitter-icon"
                  tag="a"
                >
                  <Fa icon="twitter" />
                </button>
                <button
                  className="social-media-btn hvr-grow google-plus-icon"
                  tag="a"
                >
                  <Fa icon="google-plus" />
                </button>
                <button
                  className="social-media-btn hvr-grow linked-in-icon"
                  tag="a"
                >
                  <i class="fa fa-linkedin-square" aria-hidden="true" />
                </button>
                <button
                  className="social-media-btn hvr-grow instagram-icon"
                  tag="a"
                >
                  <Fa icon="instagram" />
                </button>
                <button
                  className="social-media-btn hvr-grow pinterest-icon"
                  tag="a"
                >
                  <Fa icon="pinterest" />
                </button>
                <button
                  className="social-media-btn hvr-grow youtube-icon"
                  tag="a"
                >
                  <Fa icon="youtube" />
                </button>
                <button
                  className="social-media-btn hvr-grow driblle-icon"
                  tag="a"
                >
                  <Fa icon="dribbble" />
                </button>
                <button className="social-media-btn hvr-grow vk-icon" tag="a">
                  <Fa icon="vk" />
                </button>
                <button
                  className="social-media-btn hvr-grow stack-over-flow"
                  tag="a"
                >
                  <Fa icon="stack-overflow" />
                </button>
                <button
                  className="social-media-btn hvr-grow slack-icon"
                  tag="a"
                >
                  <Fa icon="slack" />
                </button>
                <button
                  className="social-media-btn hvr-grow github-icon "
                  tag="a"
                >
                  <Fa icon="github" />
                </button>
                <button
                  className="social-media-btn hvr-grow comments-icon"
                  tag="a"
                >
                  <Fa icon="comments" />
                </button>
                <button
                  className="social-media-btn hvr-grow email-icon"
                  tag="a"
                >
                  <Fa icon="envelope" />
                </button>
              </ModalBody>
            </Modal>
          </div>
        </section>
      </Container>
    );
  }
}

export default CardContainer;
