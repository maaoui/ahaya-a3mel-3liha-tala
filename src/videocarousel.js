import React, { Component } from "react";
import {
  Carousel,
  CarouselCaption,
  CarouselInner,
  CarouselItem,
  Button
} from "mdbreact";

import "./videocarousel.css";
class CarouselPage extends Component {
  render() {
    return (
      <div className="container-fluid">
        <div className="row">
          <div className="col-md-12">
            <Carousel
              activeItem={1}
              length={3}
              showControls={true}
              showIndicators={false}
              className="z-depth-1"
            >
              <CarouselInner>
                <CarouselItem itemId="1">
                  <span>
                    <video className="video-fluid d-block" autoPlay loop>
                      <source
                        src="https://mdbootstrap.com/img/video/Tropical.mp4"
                        type="video/mp4"
                      />
                    </video>
                  </span>
                  <CarouselCaption>
                    <h1 className="video-carousel-title">
                      {" "}
                      Work your way You bring the skill. We'll make earning
                      easy.
                    </h1>
                    <Button color="success">Become a seller</Button>
                    <p>First text</p>
                  </CarouselCaption>
                </CarouselItem>
                <CarouselItem itemId="2">
                  <video className="video-fluid d-block" autoPlay loop>
                    <source
                      src="https://mdbootstrap.com/img/video/forest.mp4"
                      type="video/mp4"
                    />
                  </video>
                </CarouselItem>

                <CarouselItem itemId="3">
                  <video className="video-fluid d-block" autoPlay loop>
                    <source
                      src="https://mdbootstrap.com/img/video/Agua-natural.mp4"
                      type="video/mp4"
                    />
                  </video>
                </CarouselItem>
              </CarouselInner>
            </Carousel>
          </div>
        </div>
      </div>
    );
  }
}

export default CarouselPage;
