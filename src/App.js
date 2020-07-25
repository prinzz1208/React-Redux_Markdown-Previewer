import React from 'react';
import './App.scss';
import { Provider } from 'react-redux';
import store from './redux/store';
import Editor from './components/Editor';
import Previewer from './components/Previewer';

function App() {  
  return (
      <Provider store={store}>
        <div className="App">
          <Editor />
          <Previewer />
        </div>
      </Provider>
  );
}

export default App;
