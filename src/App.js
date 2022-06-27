import React from "react";
import "./App.css";
import Content from "./components/Content/Content";
import Sidebar from "./components/Sidebar/Sidebar";

import { Provider } from "react-redux";
import store from "./redux/store/store";

function App() {

  return (
    <Provider store={store}>

    <main className="App">
      <div className="App-container">
        <Sidebar />
        <Content />
      </div>
    </main>
    </Provider>
  );
}

export default App;
