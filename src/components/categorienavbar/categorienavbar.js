import React, { Component } from "react";
import "./categoriesnavbar.css";

import {
  Button,
  Navbar,
  NavbarBrand,
  NavbarNav,
  NavbarToggler,
  Collapse,
  NavItem,
  NavLink,
  Dropdown,
  DropdownToggle,
  DropdownMenu,
  Fa,
  DropdownItem
} from "mdbreact";
import { BrowserRouter as Router } from "react-router-dom";

class NavbarFeatures extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      collapse: false,
      isWideEnough: false
    };
    this.onClick = this.onClick.bind(this);
  }

  onClick() {
    this.setState({
      collapse: !this.state.collapse
    });
  }
  render() {
    return (
      <Router>
        <Navbar
          className="fullcategoriesnav"
          color="white"
          dark
          expand="md"
          scrolling
        >
          <Collapse isOpen={this.state.collapse} navbar>
            <div className="btn-toggle" onClick={this.props.onStateChange}>
              <img
                className="navbar-toogle-sidebar"
                src="./searchlogo.png"
                alt=""
              />
            </div>

            <NavbarNav center className="categories">
              <NavItem>
                <Dropdown className="dropdown-meu-item">
                  <DropdownToggle nav>Graphics & Design</DropdownToggle>
                  <DropdownMenu className="drop-down-menu">
                    <div>
                      <DropdownItem href="#">Logo Design</DropdownItem>
                      <DropdownItem href="#">
                        Business Cards & Stationery
                      </DropdownItem>
                      <DropdownItem href="#">Illustration</DropdownItem>
                      <DropdownItem href="#">
                        Portraits & Caricatures
                      </DropdownItem>
                      <DropdownItem href="#">Cartoons & Comics</DropdownItem>
                      <DropdownItem href="#">Flyers & Brochures</DropdownItem>
                      <DropdownItem href="#">Book & Album Covers</DropdownItem>
                      <DropdownItem href="#">Packaging Design</DropdownItem>
                      <DropdownItem href="#">Web & Mobile Design</DropdownItem>
                      <DropdownItem href="#">Packaging Design</DropdownItem>
                      <DropdownItem href="#">Social Media Design</DropdownItem>
                    </div>
                    <div>
                      <DropdownItem href="#">Banner Ads</DropdownItem>
                      <DropdownItem href="#">Photoshop Editing</DropdownItem>
                      <DropdownItem href="#">
                        Architecture & Floor Plans
                      </DropdownItem>
                      <DropdownItem href="#">
                        3D Models & Product Design
                      </DropdownItem>
                      <DropdownItem href="#">
                        T-Shirts & Merchandise
                      </DropdownItem>
                      <DropdownItem href="#">Presentation Design</DropdownItem>
                      <DropdownItem href="#">Infographic Design</DropdownItem>
                      <DropdownItem href="#">Vector Tracing</DropdownItem>
                      <DropdownItem href="#">Invitations</DropdownItem>
                      <DropdownItem href="#">Other</DropdownItem>
                    </div>
                  </DropdownMenu>
                </Dropdown>
              </NavItem>

              <NavItem>
                <Dropdown className="dropdown-meu-item">
                  <DropdownToggle nav>Digital Marketing</DropdownToggle>
                  <DropdownMenu className="drop-down-menu">
                    <div>
                      <DropdownItem href="#">
                        Social Media Marketing
                      </DropdownItem>
                      <DropdownItem href="#">SEO</DropdownItem>
                      <DropdownItem href="#">Content Marketing</DropdownItem>
                      <DropdownItem href="#">Video Marketing</DropdownItem>
                      <DropdownItem href="#">Email Marketing</DropdownItem>
                      <DropdownItem href="#">
                        Search & Display Marketing
                      </DropdownItem>
                      <DropdownItem href="#">Marketing Strategy</DropdownItem>
                      <DropdownItem href="#">Surveys</DropdownItem>
                      <DropdownItem href="#">Web Analytics</DropdownItem>
                    </div>
                    <div>
                      <DropdownItem href="#">Influencer Marketing</DropdownItem>
                      <DropdownItem href="#">Local Listings</DropdownItem>
                      <DropdownItem href="#">Domain Research</DropdownItem>
                      <DropdownItem href="#">E-Commerce Marketing</DropdownItem>
                      <DropdownItem href="#">Mobile Advertising</DropdownItem>
                      <DropdownItem href="#">Music Promotion</DropdownItem>
                      <DropdownItem href="#">Web Traffic</DropdownItem>
                      <DropdownItem href="#">Vector Tracing</DropdownItem>
                      <DropdownItem href="#">Other</DropdownItem>
                    </div>
                  </DropdownMenu>
                </Dropdown>
              </NavItem>

              <NavItem>
                <Dropdown className="dropdown-meu-item">
                  <DropdownToggle nav>Writing & Translation</DropdownToggle>
                  <DropdownMenu className="drop-down-menu">
                    <div>
                      <DropdownItem href="#">
                        Resumes & Cover Letters
                      </DropdownItem>
                      <DropdownItem href="#">Product Descriptions</DropdownItem>
                      <DropdownItem href="#">Website Content</DropdownItem>
                      <DropdownItem href="#">Technical Writing</DropdownItem>
                      <DropdownItem href="#">
                        Proofreading & Editing
                      </DropdownItem>
                      <DropdownItem href="#">Translation</DropdownItem>
                      <DropdownItem href="#">Creative Writing</DropdownItem>
                      <DropdownItem href="#">Research & Summaries</DropdownItem>
                    </div>
                    <div>
                      <DropdownItem href="#">
                        Articles & Blog Posts
                      </DropdownItem>
                      <DropdownItem href="#">Sales Copy</DropdownItem>
                      <DropdownItem href="#">Press Releases</DropdownItem>
                      <DropdownItem href="#">Transcription</DropdownItem>
                      <DropdownItem href="#">Legal Writing</DropdownItem>
                      <DropdownItem href="#">Email Copy</DropdownItem>
                      <DropdownItem href="#">
                        Business Names & Slogans
                      </DropdownItem>
                      <DropdownItem href="#">Other</DropdownItem>
                    </div>
                  </DropdownMenu>
                </Dropdown>
              </NavItem>

              <NavItem>
                <Dropdown className="dropdown-meu-item">
                  <DropdownToggle nav>Video & Animation</DropdownToggle>
                  <DropdownMenu className="drop-down-menu">
                    <div>
                      <DropdownItem href="#">
                        Whiteboard & Animated Explainers
                      </DropdownItem>
                      <DropdownItem href="#">Intros & Outros</DropdownItem>
                      <DropdownItem href="#">Logo Animation</DropdownItem>
                      <DropdownItem href="#">
                        Slideshows & Promo Videos
                      </DropdownItem>
                      <DropdownItem href="#">
                        Editing & Post Production
                      </DropdownItem>
                      <DropdownItem href="#">Lyric & Music Videos</DropdownItem>
                    </div>
                    <div>
                      <DropdownItem href="#">Spokesperson Videos</DropdownItem>
                      <DropdownItem href="#">
                        Animated Characters & Modeling
                      </DropdownItem>
                      <DropdownItem href="#">Short Video Ads</DropdownItem>
                      <DropdownItem href="#">
                        Live Action Explainers
                      </DropdownItem>
                      <DropdownItem href="#">Product Photography</DropdownItem>
                      <DropdownItem href="#">Other</DropdownItem>
                    </div>
                  </DropdownMenu>
                </Dropdown>
              </NavItem>

              <NavItem>
                <Dropdown className="dropdown-meu-item">
                  <DropdownToggle nav>Music & Audio</DropdownToggle>
                  <DropdownMenu className="drop-down-menu">
                    <div>
                      <DropdownItem href="#">Voice Over</DropdownItem>
                      <DropdownItem href="#">Mixing & Mastering</DropdownItem>
                      <DropdownItem href="#">
                        Producers & Composers
                      </DropdownItem>
                      <DropdownItem href="#">Singer-Songwriters</DropdownItem>
                    </div>
                    <div>
                      <DropdownItem href="#">
                        Session Musicians & Singers
                      </DropdownItem>
                      <DropdownItem href="#">Jingles & Drops</DropdownItem>
                      <DropdownItem href="#">Sound Effects</DropdownItem>
                      <DropdownItem href="#">Other</DropdownItem>
                    </div>
                  </DropdownMenu>
                </Dropdown>
              </NavItem>

              <NavItem>
                <Dropdown className="dropdown-meu-item">
                  <DropdownToggle nav>Programming & Tech</DropdownToggle>
                  <DropdownMenu className="drop-down-menu">
                    <div>
                      <DropdownItem href="#">WordPress</DropdownItem>
                      <DropdownItem href="#">
                        Website Builders & CMS
                      </DropdownItem>
                      <DropdownItem href="#">
                        Web ProgrammingProducers & Composers
                      </DropdownItem>
                      <DropdownItem href="#">Ecommerce</DropdownItem>
                      <DropdownItem href="#">Mobile Apps & Web</DropdownItem>
                      <DropdownItem href="#">Desktop applications</DropdownItem>
                      <DropdownItem href="#">Support & IT</DropdownItem>
                    </div>
                    <div>
                      <DropdownItem href="#">Chatbots</DropdownItem>
                      <DropdownItem href="#">
                        Data Analysis & Reports
                      </DropdownItem>
                      <DropdownItem href="#">Convert Files</DropdownItem>
                      <DropdownItem href="#">Databases</DropdownItem>
                      <DropdownItem href="#">User Testing</DropdownItem>
                      <DropdownItem href="#">QA</DropdownItem>
                      <DropdownItem href="#">Other</DropdownItem>
                    </div>
                  </DropdownMenu>
                </Dropdown>
              </NavItem>

              <NavItem>
                <Dropdown className="dropdown-meu-item">
                  <DropdownToggle nav>Business & administration</DropdownToggle>
                  <DropdownMenu className="drop-down-menu">
                    <div>
                      <DropdownItem href="#">Virtual Assistant</DropdownItem>
                      <DropdownItem href="#">Data Entry</DropdownItem>
                      <DropdownItem href="#">Market Research</DropdownItem>
                      <DropdownItem href="#">Business Plans</DropdownItem>
                      <DropdownItem href="#">Branding Services</DropdownItem>
                      <DropdownItem href="#">Legal Consulting</DropdownItem>
                    </div>
                    <div>
                      <DropdownItem href="#">Financial Consulting</DropdownItem>
                      <DropdownItem href="#">Business Tips</DropdownItem>
                      <DropdownItem href="#">Presentations</DropdownItem>
                      <DropdownItem href="#">Career Advice</DropdownItem>
                      <DropdownItem href="#">Flyer Distribution</DropdownItem>

                      <DropdownItem href="#">Other</DropdownItem>
                    </div>
                  </DropdownMenu>
                </Dropdown>
              </NavItem>

              <NavItem>
                <Dropdown className="dropdown-meu-item">
                  <DropdownToggle nav>Fun & Lifestyle</DropdownToggle>
                  <DropdownMenu className="drop-down-menu">
                    <div>
                      <DropdownItem href="#">Online Lessons</DropdownItem>
                      <DropdownItem href="#">Arts & Crafts</DropdownItem>
                      <DropdownItem href="#">Relationship Advice</DropdownItem>
                      <DropdownItem href="#">
                        Health, Nutrition & Fitness
                      </DropdownItem>
                      <DropdownItem href="#">Astrology & Readings</DropdownItem>
                      <DropdownItem href="#">Spiritual & Healing</DropdownItem>
                      <DropdownItem href="#">Family & Genealogy</DropdownItem>
                      <DropdownItem href="#">Gaming</DropdownItem>
                    </div>
                    <div>
                      <DropdownItem href="#">
                        Greeting Cards & Videos
                      </DropdownItem>
                      <DropdownItem href="#">Your Message On...</DropdownItem>
                      <DropdownItem href="#">Viral Videos</DropdownItem>
                      <DropdownItem href="#">Pranks & Stunts</DropdownItem>
                      <DropdownItem href="#">
                        Celebrity Impersonators
                      </DropdownItem>
                      <DropdownItem href="#">Collectibles</DropdownItem>
                      <DropdownItem href="#">Global Culture</DropdownItem>
                      <DropdownItem href="#">house work</DropdownItem>
                      <DropdownItem href="#">Other</DropdownItem>
                    </div>
                  </DropdownMenu>
                </Dropdown>
              </NavItem>
            </NavbarNav>
          </Collapse>
        </Navbar>
      </Router>
    );
  }
}
export default NavbarFeatures;
