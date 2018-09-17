import React, { Component } from "react";
import { Button, Collapse, Input } from "mdbreact";
import "./collapse.css";

class collapse extends Component {
  constructor(props) {
    super(props);
    this.toggle = this.toggle.bind(this);
    this.toggle1 = this.toggle1.bind(this);
    this.toggle2 = this.toggle2.bind(this);
    this.toggle3 = this.toggle3.bind(this);
    this.state = {
      collapse: false,
      collapse1: false,
      collapse2: false,
      collapse3: false
    };
  }

  toggle() {
    this.setState({ collapse: !this.state.collapse });
  }
  toggle1() {
    this.setState({ collapse1: !this.state.collapse1 });
  }
  toggle2() {
    this.setState({ collapse2: !this.state.collapse2 });
  }
  toggle3() {
    this.setState({ collapse3: !this.state.collapse3 });
  }

  render() {
    return (
      <div>
        {/* this is th 1nd filter  */}
        <div className="categories-container">
          <div
            className="search-tri"
            color="primary"
            onClick={this.toggle}
            style={{ marginBottom: "1rem" }}
          >
            Delivery Time <i class="fas fa-chevron-down" />
          </div>

          <Collapse isOpen={this.state.collapse}>
            <label class="container">
              24 hours
              <input type="checkbox" />
              <span class="checkmark" />
            </label>

            <label class="container">
              3 days
              <input type="checkbox" />
              <span class="checkmark" />
            </label>

            <label class="container">
              7 days
              <input type="checkbox" />
              <span class="checkmark" />
            </label>

            <label class="container">
              Any
              <input type="checkbox" />
              <span class="checkmark" />
            </label>
          </Collapse>
        </div>
        {/* this is th 2nd filter  */}
        <div>
          <div
            className="search-tri"
            color="primary"
            onClick={this.toggle1}
            style={{ marginBottom: "1rem" }}
          >
            Price Range <i class="fas fa-chevron-down" />
          </div>

          <Collapse isOpen={this.state.collapse1}>
            <div className="price-range-container">
              <label for="exampleForm2">$ </label>
              <input type="text" id="exampleForm2" className="form-control" />
              <label for="exampleForm2"> To $ </label>
              <input type="text" id="exampleForm2" className="form-control" />
            </div>
          </Collapse>
        </div>

        {/* this is th 3nd filter  */}
        <div>
          <div
            className="search-tri"
            color="primary"
            onClick={this.toggle2}
            style={{ marginBottom: "1rem" }}
          >
            Seller Language <i class="fas fa-chevron-down" />
          </div>

          <Collapse isOpen={this.state.collapse2}>
            <label class="container">
              English
              <input type="checkbox" />
              <span class="checkmark" />
            </label>

            <label class="container">
              Frensh
              <input type="checkbox" />
              <span class="checkmark" />
            </label>

            <label class="container">
              Arabic
              <input type="checkbox" />
              <span class="checkmark" />
            </label>
          </Collapse>
        </div>

        {/* this is th 4nd filter  */}
        <div className="categories-container">
          <div
            className="search-tri"
            color="primary"
            onClick={this.toggle3}
            style={{ marginBottom: "1rem" }}
          >
            Seller Location <i class="fas fa-chevron-down" />
          </div>

          <Collapse isOpen={this.state.collapse3}>
            <div class="form-group">
              <label for="sel1">Select the State:</label>
              <select class="custom-select" id="states">
                <option>Any</option>
                <option>Tunis</option>
                <option>Ariana</option>
                <option>Ben Arous</option>
                <option>Manouba</option>
                <option>Nabeul</option>
                <option>Zaghouan</option>
                <option>Bizerte</option>
                <option>Béja</option>
                <option>Jendouba</option>
                <option>Kef</option>
                <option>Siliana</option>
                <option>Sousse</option>
                <option>Monastir</option>
                <option>Mahdia</option>
                <option>Sfax</option>
                <option>Kairouan</option>
                <option>Kasserine </option>
                <option>Sidi Bouzid</option>
                <option>Gabès</option>
                <option>Mednine</option>
                <option>Tataouine</option>
                <option>Gafsa</option>
                <option>Tozeur</option>
                <option>Kebili</option>
              </select>
            </div>
          </Collapse>
        </div>
      </div>
    );
  }
}
export default collapse;
