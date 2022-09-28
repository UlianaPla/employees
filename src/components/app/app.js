import { Component } from 'react';

import AppInfo from '../app-info/app-info';
import SearchPanel from '../search-panel/search-panel';
import AppFilter from '../app-filter/app-filter';
import EmployeesList from '../eployees-list/employees-list';
import EmployeesAddForm from '../employees-add-form/employees-add-form';

import './app.css';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: [
                { name: 'Joshn S.', salary: 800, increase: true, id: 1 },
                { name: 'Alex M.', salary: 3000, increase: false, id: 2 },
                { name: 'Carl W.', salary: 5000, increase: false, id: 3 },
                { name: 'Helen A.', salary: 3500, increase: true, id: 4 },
                { name: 'Boris D.', salary: 900, increase: false, id: 5 },
            ]
        }
        this.maxId = 5;
    }

    deleteItem = (id) => {
        this.setState(({ data }) => {
            return {
                data: data.filter(elem => elem.id !== id)
            }
        })
    }

    addItem = (name, salary) => {
        const newItem ={
            name, salary, increase:false,
            id: ++this.maxId
        }

        this.setState(({ data }) => {
            const result = [...data, newItem];
            return {
                data: result
            }
        });
    }

    render() {
        return (
            <div className="app">
                <AppInfo />

                <div className="search-panel">
                    <SearchPanel />
                    <AppFilter />
                </div>

                <EmployeesList
                    data={this.state.data}
                    onDelete={this.deleteItem} />
                <EmployeesAddForm 
                    onAdd={this.addItem}/>
            </div>
        );
    }
}

export default App;