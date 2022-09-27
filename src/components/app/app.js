import AppInfo from '../app-info/app-info';
import SearchPanel from '../search-panel/search-panel';
import AppFilter from '../app-filter/app-filter';
import EmployeesList from '../eployees-list/employees-list';
import EmployeesAddForm from '../employees-add-form/employees-add-form';

import './app.css';

function App() {

    const data = [
        { name: 'Joshn S.', salary: 800, increase: true, id: 1 },
        { name: 'Alex M.', salary: 3000, increase: false, id: 2 },
        { name: 'Carl W.', salary: 5000, increase: false, id: 3 },
        { name: 'Helen A.', salary: 3500, increase: true, id: 4 },
        { name: 'Boris D.', salary: 900, increase: false, id: 5 },
    ];

    return (
        <div className="app">
            <AppInfo />

            <div className="search-panel">
                <SearchPanel />
                <AppFilter />
            </div>

            <EmployeesList data={data} />
            <EmployeesAddForm />
        </div>
    );
}

export default App;