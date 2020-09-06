import React, { Component } from 'react'

import data from '../Body/data';

class Test extends Component {


  constructor(props) {
    super(props);
    console.log('loaded');
    console.log(data)
    this.shows = this.shows.bind(this);
  }

  shows() {
    return this.state.data.map((item, index) =>
      <div key={index}>
        <h3>{item.id}</h3>
        <h4>{item.name}</h4>
      </div>
    )

  }

  render() {
    return (
      <div>
        <p>susan</p>
      </div>
    )
  }

}
export default Test;
