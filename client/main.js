import React from 'react';
import ReactDOM from 'react-dom';

const App = () => {
  return (
    <div>Hello there</div>
  );
}

// After Meteor loads in Browser, render app in DOM
Meteor.startup(() => {
  // render to dom here
  ReactDOM.render(<App />, document.querySelector('.container'));
});
