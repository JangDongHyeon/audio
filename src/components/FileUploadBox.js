import React from "react";
import { connect } from "react-redux";
import "./FileUploadBox.css";
import { fileTxt } from "../actions/index";
import jsonServer from "../api/jsonServer";
class FileUploadBox extends React.Component {
  handleChange(e) {
    let file = e.target.files[0];

    let fileReader = new FileReader();
    fileReader.onload = () => {
      let fileName = file.name;
      jsonServer.get("/api", {
        params: {
          fileName: fileName
        }
      });
      let afterStr = fileReader.result.split("\n");
      let filterStr = afterStr.filter(str => str.length > 1);

      this.props.fileTxt(filterStr);
    };
    fileReader.readAsText(file);
  }
  render() {
    return (
      <div className="ui middle aligned center aligned grid container">
        <div className="ui fluid segment">
          <input
            type="file"
            onChange={this.handleChange.bind(this)}
            accept="text/plain"
            className="inputfile"
            id="embedpollfileinput"
          />
          <label
            htmlFor="embedpollfileinput"
            className="ui huge red right floated button"
          >
            <i className="ui upload icon"></i>
            Upload TXT
          </label>
        </div>
      </div>
    );
  }
}

//export default FileUploadBox;
export default connect(null, { fileTxt: fileTxt })(FileUploadBox);
