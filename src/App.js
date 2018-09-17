import React, { Component } from "react";
import CardContainer from "./card";
import "./App.css";
import SearchSideBar from "./searchsidebar";
import "font-awesome/css/font-awesome.min.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "mdbreact/dist/css/mdb.css";
import NavbarFeatures from "./categorienavbar";
import MainNavBar from "./mainnavbar";
import FooterPage from "./footer";
import CarouselPage from "./videocarousel";
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isSideBarOpen: false
    };
  }

  toggleSlideBar = () => {
    this.setState({
      isSideBarOpen: true
    });
  };
  render() {
    return (
      <div className="App" id="outer-container">
        <MainNavBar />
        <SearchSideBar
          toggleSlideBar={this.toggleSlideBar}
          isSideBarOpen={this.state.isSideBarOpen}
        />
        <main id="page-wrap">
          <NavbarFeatures
            isOpen={this.state.menuOpen}
            onStateChange={this.toggleSlideBar}
          />

          <CardContainer />
          <FooterPage />
          
          <CarouselPage />
          
        </main>
      </div>
    );
  }
}

export default App;
