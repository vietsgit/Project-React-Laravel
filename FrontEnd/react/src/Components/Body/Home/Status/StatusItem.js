import React, { Component } from 'react';
import "./StatusItem.css";

class StatusItem extends Component {
    render() {
        return (
            <div className="status">
                <div id="user">
                    <img className="img" src={"http://127.0.0.1:8000/" + this.props.item.avatar} alt="" />
                    <div id="information">
                        <p> <b>{this.props.item.name} </b></p>
                        <p>0175 susan</p>
                    </div>
                    <div className="menu">
                        <img src="Logo/IMG_20200806_144630.jpg" />
                    </div>
                </div>
                <div id="posts">
                    <div className="content">
                        <p>
                            {this.props.item.content}
                        </p>
                    </div>
                    <div className="photo">
                        <img src={"http://127.0.0.1:8000/" + this.props.item.image} alt="" />
                    </div>
                    <div className="function">
                        <button onClick={this.props.onClickLike} onMouseEnter={this.props.onMouseEnterLike} onMouseLeave={this.props.onMouseLeaveLike}>👌 {this.props.numberLike} </button>
                        <button>💬</button>
                        <button>🔁</button>
                    </div>
                </div>
            </div>
        )
    }
}
export default StatusItem;