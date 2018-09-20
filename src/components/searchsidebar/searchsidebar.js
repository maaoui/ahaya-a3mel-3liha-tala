import React from "react";
import "./sidebar.css";
import { scaleRotate as Menu } from "react-burger-menu";
import Collapse from "../collapse/collapse";

class SearchSideBar extends React.Component {
  showSettings(event) {
    event.preventDefault();
  }

  render() {
    return (
      <Menu
        outerContainerId={"outer-container"}
        pageWrapId={"page-wrap"}
        isOpen={this.props.isSideBarOpen}
      >
       
        <Collapse />
      </Menu>
    );
  }
}
export default SearchSideBar;
