import React, { Component } from 'react'

export default class TestUpoadFile extends Component {

  constructor(props) {
    super(props);
    this.changeHandler = this.changeHandler.bind(this);
  }

  changeHandler(event) {

    event.stopPropagation();
    event.preventDefault();

    var input = document.querySelector('input[type="file"]')
    var data = new FormData()
    data.append('file', input.files[0])
    data.append('user', 'hubot')
    console.log(data);

  }
  render() {
    return (
      <div>
        <form enctype="multipart/form-data">
          <h3>Select image</h3>
          <input type="file" multiple onChange={this.changeHandler} />
          <br /><br />
          <img id="myimage" src="" />
        </form>
      </div>
    )
  }
}
