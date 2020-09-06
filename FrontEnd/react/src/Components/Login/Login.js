import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import "./Login.css";

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      image: []
    };

    this.signUp = this.signUp.bind(this);
    this.signIn = this.signIn.bind(this);
    this.onSignInSubmit = this.onSignInSubmit.bind(this);
    this.onSignUpSubmit = this.onSignUpSubmit.bind(this);
    this.checkUser = this.checkUser.bind(this);
    this.changeHandler = this.changeHandler.bind(this);
  }

  checkUser() {
    var id = localStorage.getItem("User_id");
    if (id !== null) {
      this.props.history.push('/home');
    } else {
      this.props.history.push('/');
    }
  }

  onSignInSubmit(event) {
    event.preventDefault();

    let username = event.target['username'].value;
    let password = event.target['password'].value;

    let Account = {
      username: username,
      password: password
    }
    let AccountInJson = JSON.stringify(Account);
    console.log(AccountInJson);

    fetch("http://127.0.0.1:8000/api/user/login", {
      method: "post",
      headers: {
        "Content-Type": "application/json"
      },
      body: AccountInJson
    })
      .then((response) => {
        console.log(response.status);
        if (response.status === 200) {
          return response.json();
        } else {
          response = null;
          return response;
        }
      }).then((response) => {
        if (response !== null) {
          console.log(response);
          localStorage.removeItem("User_id");
          localStorage.setItem("User_id", response);
          alert("welcome back to Facebook (*:*) ");
          this.props.history.push('/home');
        } else {
          localStorage.removeItem("User_id");
          alert('username or paseword incorect');
          this.props.history.push('/');
        }
      });
  }

  changeHandler(event) {
    event.stopPropagation();
    event.preventDefault();
    var { image } = this.state;
    var files = event.target.files;
    var file = files[0];
    var fileReader = new FileReader();

    fileReader.onload = function (progressEvent) {
      var url = fileReader.result;
      image.push(url);
      var myImg = document.getElementById("avata");
      myImg.src = url;
    }
    fileReader.readAsDataURL(file);
    this.setState({ image });
  }

  onSignUpSubmit(event) {
    event.preventDefault();
    event.stopPropagation();
    let name = event.target['name'].value;
    let gender = event.target['gender'].value;
    let birthday = event.target['birthday'].value;
    let username = event.target['username'].value;
    let password = event.target['password'].value;

    let user = {
      name: name,
      gender: gender,
      birthday: birthday,
      image: this.state.image[0],
      username: username,
      password: password
    }
    let userInJson = JSON.stringify(user);
    console.log(userInJson);
    fetch("http://127.0.0.1:8000/api/user/create", {
      method: "post",
      headers: {
        "Content-Type": "application/json"
      },
      body: userInJson
    }).then((response) => {
      if (response.status === 200) {
        return response.json();
      } else {
        response = null;
        return response;
      }
    }).then((response) => {
      if (response !== null) {
        console.log(response);
        alert("Đăng ký thành công => Cùng nhau trãi nghiệm những tính năng vượt trội của facebook nào :)");
        localStorage.removeItem("User_id");
        localStorage.setItem("User_id", response);
        this.props.history.push('/home');
      } else {
        localStorage.removeItem("User_id");
        alert('Đăng ký không thành công vui lòng kiểm tra lại thông tin của bạn');
      }
    });

  }

  signUp() {
    const container = document.getElementById('container');
    container.classList.add("right-panel-active");
  }

  signIn() {
    const container = document.getElementById('container');
    container.classList.remove("right-panel-active");
  }

  render() {
    return (
      <div className="container" onLoad={this.checkUser} >
        <div className="cen">
          <div className="form-container sign-in-container">
            <form onSubmit={this.onSignInSubmit}>
              <h1>Welcome! Let sign in</h1>
              <br />
              <div>
                <input className="frmin" type="text" name="username" placeholder="Username" />
              </div>
              <br />
              <div>
                <input className="frmin" type="password" name="password" placeholder="Password" />
              </div>
              <br />
              <button className="btn" type="submit">Sign In</button>
            </form>
          </div>
        </div>
        <br />
        <hr />

        {/* <div className="cen">
          <h1>Or create an account</h1>
          <form onSubmit={this.onSignUpSubmit}>
            <table className="">
              <tbody>
                <tr>
                  <form nctype="multipart/form-data">
                    <td>Upload ur avatar:</td>
                    <td>
                      <input className="frmin" type="file" name="image" multiple onChange={this.changeHandler} />
                      <img id="avata" src="" />
                    </td>
                  </form>
                </tr>
                <tr>
                  <td>ur name</td>
                  <td><input className="frmin" type="text" name="name" placeholder="Name" /></td>
                </tr>
                <tr>
                  <td>Gender:</td>
                  <td>
                    <input className="frmin-gen" type="radio" name="gender" value="Nam" />
                    <label for="male">Male</label>
                    <input className="frmin-gen" type="radio" name="gender" value="Nu" />
                    <label for="female">Female</label>
                  </td>
                </tr>
                <tr>
                  <td>ur birthday</td>
                  <td><input className="frmin" type="date" name="birthday" /></td>
                </tr>
                <tr>
                  <td>Enter username</td>
                  <td><input className="frmin" type="text" name="username" placeholder="Username" /></td>
                </tr>
                <tr>
                  <td>Enter password</td>
                  <td><input className="frmin" type="text" name="password" placeholder="Password" /></td>
                </tr>
                <tr>
                  <td></td>
                  <td><button className="btn" type="submit">Sign Up</button></td>
                </tr>
              </tbody>
            </table>
          </form>
        </div> */}
      </div>
    )
  }
}

export default withRouter(Login);