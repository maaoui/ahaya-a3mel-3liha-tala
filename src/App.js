import React, { Component } from "react";
import CardContainer from "./components/card/card";
import "./App.css";
import SearchSideBar from "./components/searchsidebar/searchsidebar";
import "font-awesome/css/font-awesome.min.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "mdbreact/dist/css/mdb.css";
import NavbarFeatures from "./components/categorienavbar/categorienavbar";
import MainNavBar from "./components/mainnavbar/mainnavbar";
import FooterPage from "./components/footer/footer";
import CarouselPage from "./components/videocarousel/videocarousel";
import Ourfreelancer from "./components/ourfreelancer/ourfreelancer";
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
          <Ourfreelancer />
        </main>
      </div>
    );
  }
}

export default App;
