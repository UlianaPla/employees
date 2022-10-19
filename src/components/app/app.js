import { Component } from "react";

import AppInfo from "../app-info/app-info";
import SearchPanel from "../search-panel/search-panel";
import AppFilter from "../app-filter/app-filter";
import EmployeesList from "../eployees-list/employees-list";
import EmployeesAddForm from "../employees-add-form/employees-add-form";

import "./app.css";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [
        { name: "Joshn S.", salary: 800, increase: true, rise: true, id: 1 },
        { name: "Alex M.", salary: 3000, increase: false, rise: false, id: 2 },
        { name: "Carl W.", salary: 5000, increase: false, rise: false, id: 3 },
        { name: "Helen A.", salary: 3500, increase: true, rise: false, id: 4 },
        { name: "Boris D.", salary: 900, increase: false, rise: false, id: 5 },
      ],
      term: "",
      filter: "all",
    };
    this.maxId = 5;
  }

  deleteItem = (id) => {
    this.setState(({ data }) => {
      return {
        data: data.filter((elem) => elem.id !== id),
      };
    });
  };

  addItem = (name, salary) => {
    const newItem = {
      name,
      salary,
      increase: false,
      rise: false,
      id: ++this.maxId,
    };

    this.setState(({ data }) => {
      const result = [...data, newItem];
      return {
        data: result,
      };
    });
  };

  onToggleProp = (id, prop) => {
    this.setState(({ data }) => ({
      data: data.map((item) => {
        if (item.id === id) {
          return { ...item, [prop]: !item[prop] };
        }
        return item;
      }),
    }));
  };

  searchEmp = (items, term) => {
    if (term.length === 0) {
      return items;
    }

    return items.filter((item) => item.name.indexOf(term) > -1);
  };

  filterEmp = (items, filter) => {
    let result;

    switch (filter) {
      case "raised":
        result = items.filter((item) => item.raise);
        break;
      case "highSalary":
        result = items.filter((item) => item.salary > 1000);
        break;
      case "all":
      default:
        result = items;
        break;
    }

    return result;
  };

  onUpdateSearch = (term) => {
    this.setState({ term });
  };

  onFilterSelect = (filter) => {
    this.setState({ filter });
  };

  render() {
    const { data, term, filter } = this.state;
    const employees = data.length;
    const increased = data.filter((item) => item.increase).length;
    const visibleData = this.searchEmp(this.filterEmp(data, filter), term);

    return (
      <div className="app">
        <AppInfo totalCount={employees} increasedCount={increased} />

        <div className="search-panel">
          <SearchPanel onUpdateSearch={this.onUpdateSearch} />
          <AppFilter filter={filter} onFilterSelect={this.onFilterSelect} />
        </div>

        <EmployeesList
          data={visibleData}
          onDelete={this.deleteItem}
          onToggleProp={this.onToggleProp}
        />
        <EmployeesAddForm onAdd={this.addItem} />
      </div>
    );
  }
}

export default App;
