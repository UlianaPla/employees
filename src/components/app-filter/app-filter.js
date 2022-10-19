import { Component } from "react";
import "./app-filter.css";

class AppFilter extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const buttonsData = [
      { name: "all", label: "Все сотрудники" },
      { name: "raised", label: "На повишение" },
      { name: "highSalary", label: "З/П больше 1000$" },
    ];

    const defaultClass = "btn btn-outline-light";
    const selectedClass = "btn btn-light";

    const buttons = buttonsData.map(({ name, label }) => {
      const active = this.props.filter === name;
      
      return (
        <button
          className={active ? selectedClass : defaultClass}
          type="button"
          key={name}
          onClick={() => this.props.onFilterSelect(name)}
        >
          {label}
        </button>
      );
    });

    return <div className="btn-group">{buttons}</div>;
  }
}
export default AppFilter;
