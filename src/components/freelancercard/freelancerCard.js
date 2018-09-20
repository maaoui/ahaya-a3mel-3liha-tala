import React, { Component } from "react";
import "./freelancerCard.css";
import { View, Mask } from "mdbreact";
class FreelancerCard extends Component {
  render() {
    return (
      <View zoom>
        <img
          src="https://mdbootstrap.com/img/Photos/Others/nature-sm.jpg"
          className="img-fluid rounded-circle hoverable"
          alt=""
        />
        <Mask className="flex-center">
          <p className="white-text">Zoom effect</p>
        </Mask>
      </View>
    );
  }
}
export default FreelancerCard;
