import React, { Component } from "react";


class Create extends Component {
  constructor(props) {
    super(props);
    this.state = {
      productTitle: 'Mypoke'
    }
  }
  render() {
    return (
      <div>
        <div> {this.state.productTitle}</div>
      </div>
    );
  }
}

export default Create;