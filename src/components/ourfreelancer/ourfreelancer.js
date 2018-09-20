import React, { Component } from "react";
import FreelancerCard from "../freelancercard/freelancerCard";
import "./ourfreelancer.css";
class Ourfreelancer extends Component {
  render() {
    return (
      <div>
        <h1>Join our freelancers community</h1>
        <div className="freelancer-cards">
          <FreelancerCard />
        </div>
      </div>
    );
  }
}
export default Ourfreelancer;
