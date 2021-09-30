import logo from "./logo.svg";
import "./App.css";
import HeaderComponent from "./components/header";

import { Provider } from "react-redux";
import store from "./redux/store";
import NoteListComponent from "./components/notelist";

function App() {
  return (
    <div className="">
      <Provider store={store}>
        <HeaderComponent />
        <NoteListComponent/>
      </Provider>
    </div>
  );
}

export default App;
