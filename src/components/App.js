import React from "react";
import GiveBox from "./GiveBox";
import FileUploadBox from "./FileUploadBox";
import Header from "./Header";
const App = () => {
  return (
    <div className="ui container">
      <Header />
      <GiveBox />
      <FileUploadBox />
    </div>
  );
};

export default App;
