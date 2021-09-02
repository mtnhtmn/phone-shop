import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {Provider} from 'react-redux'
import store from "./store/store";

/* 
    try to use prettier extension in your files to format the code
    its important that all your code will be written the same way
    same spaces and same code splitting
    its important for readability and and maintenance

    you have an extension in VS code called prettier 
    search in the extension and download it

    https://prettier.io/

    also they have a NPM package that there you can configure how you want to format the code 
    and you can add a command in your package json to format all your files by the rules you set

    https://prettier.io/docs/en/install.html

    (very recommended!)
*/
ReactDOM.render(<Provider store={store}>
        <App/>
    </Provider>, document.getElementById('root'));
