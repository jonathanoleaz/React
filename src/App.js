import React, { Component } from 'react';
import Main from './components/MainComponent';
import './App.css';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { ConfigureStore } from './redux/configureStore';

/**
 * To run this app, is also needed running the following (backend) miniserver, its command: 
 * 'json-server --watch db.json -d 500 -p 3001'
 */
const store = ConfigureStore();

class App extends Component {

    render() {
        return (
            <Provider store={store}>
                <BrowserRouter>
                    <div className="App">
                        <Main />
                    </div>
                </BrowserRouter>
            </Provider>
        );
    }
}

export default App;
