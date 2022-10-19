import { Component } from "react";
import "./app-info.css";

class AppInfo extends Component {

  constructor(props) {
    super(props);
  }

  render() {
    const {totalCount, increasedCount} = this.props;
    return (
      <div className="app-info">
        <h1>Учет сотрудников в компании N</h1>
        <h2>Общее число сотрудников: {totalCount}</h2>
        <h2>Премию получат: {increasedCount}</h2>
      </div>
    );
  }
}
export default AppInfo;
