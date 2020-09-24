// --Import the React and ReactDOM libraries
import React from 'react';
import ReactDOM from 'react-dom';



// --Create a react component

// es2015 arrow function
// const App = () => {
const App = function() {
    return <div>hi there!</div>;
};



// --Take the react component and show it on the screen
ReactDOM.render(
    <App />,
    document.querySelector('#root')
);