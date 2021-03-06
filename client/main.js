import React from 'react';
import ReactDOM from 'react-dom';
import EmployeeList from './components/employee_list';

const App = () => {
  return (
    <div>
      <EmployeeList />
    </div>
  );
}

// After Meteor loads in Browser, render app in DOM
Meteor.startup(() => {
  // render to dom here
  ReactDOM.render(<App />, document.querySelector('.container'));
});
