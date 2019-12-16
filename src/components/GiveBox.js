import React from "react";
import { connect } from "react-redux";
import jsonServer from "../api/jsonServer";
import "./GiveBox.css";

class GiveBox extends React.Component {
  state = { responData: "", responData2: "" };

  renderList() {
    if (this.props.fileTxt.fileTxt) {
      return this.props.fileTxt.fileTxt.map((str, index) => {
        return (
          <p
            data-index={index}
            className="tdTalker"
            onMouseOver={this.moverEvent}
            key={index}
          >
            {str}
          </p>
        );
      });
    }
  }

  renderListCol() {
    return (
      <div>
        <p>{this.state.responData}</p>
        <p>{this.state.responData2}</p>
      </div>
    );
  }

  moverEvent = async event => {
    const response = await jsonServer.get("/apiLine", {
      params: {
        line: event.target.dataset.index
      }
    });
    let jsonData = JSON.parse(response.data);

    this.setState({
      responData: jsonData.res[0][0],
      responData2: jsonData.res[1][0]
    });
  };

  render() {
    return (
      <div className="ui segment">
        <div className="headers">
          <h1 className="ui header before">Before</h1>
          <h1 className="ui header after">After</h1>
        </div>
        <div className="ui two column very relaxed grid">
          <div className="column">{this.renderList()}</div>
          <div className="column result">{this.renderListCol()}</div>
        </div>
        <div className="ui vertical divider">and</div>
      </div>
    );
  }
}
const mapStateToProps = state => {
  return { fileTxt: state.fileTxt };
};

export default connect(mapStateToProps)(GiveBox);
