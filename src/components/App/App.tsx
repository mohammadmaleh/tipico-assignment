import * as React from "react";
import { Provider } from "react-redux";
import configureStore from "../../redux";
import SearchRepositories from "../../containers/SearchRepositories/SearchRepositories";

const store = configureStore();
const App: React.FC = () => {
  return (
    <Provider store={store}>
      <SearchRepositories />
    </Provider>
  );
};

export default App;
