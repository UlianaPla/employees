import { Component } from "react";
import "./app-filter.css";

class AppFilter extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const buttonsData = [
      { name: "all", label: "Все сотрудники", colored: false },
      { name: "raised", label: "На повишение", colored: false },
      { name: "highSalary", label: "З/П больше 1000$", colored: true },
    ];

    const defaultClass = "btn-outline-light";
    const selectedClass = "btn-light";

    const buttons = buttonsData.map(({ name, label, colored }) => {
      const active = this.props.filter === name;
      const buttonClass = active ? selectedClass : defaultClass;
      const style = colored ? { color: "red" } : null;

      return (
        <button
          className={`btn + ${buttonClass}`}
          type="button"
          key={name}
          onClick={() => this.props.onFilterSelect(name)}
          style={style}
        >
          {label}
        </button>
      );
    });

    return <div className="btn-group">{buttons}</div>;
  }
}
export default AppFilter;
