import { Component } from "react";
import "./app-filter.css";

class AppFilter extends Component {
  constructor(props) {
    super(props);
    this.state = {
      filter: "all",
    };
  }

  onUpdateFilter = (e) => {
    const filter = e.target.getAttribute("data-filter");
    this.setState({ filter });

    this.props.onUpdateFilter(filter);
  };

  render() {
    const defaultClass = "btn btn-outline-light";
    const selectedClass = "btn btn-light";
    const filter = this.state.filter;

    return (
      <div className="btn-group">
        <button
          className={filter === "all" ? selectedClass : defaultClass}
          type="button"
          data-filter="all"
          onClick={this.onUpdateFilter}
        >
          Все сотрудники
        </button>

        <button
          className={filter === "raised" ? selectedClass : defaultClass}
          type="button"
          data-filter="raised"
          onClick={this.onUpdateFilter}
        >
          На повишение
        </button>

        <button
          className={filter === "highSalary" ? selectedClass : defaultClass}
          type="button"
          data-filter="highSalary"
          onClick={this.onUpdateFilter}
        >
          З/П больше 1000$
        </button>
      </div>
    );
  }
}
export default AppFilter;
