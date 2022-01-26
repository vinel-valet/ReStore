import ReactDOM from 'react-dom';
import {Provider} from "react-redux";
import {BrowserRouter} from "react-router-dom";
import App from "./components/app/app";
import ErrorBoundry from "./components/error-bounry/error-boundry";
import BookstoreService from "./services/bookstore-service";
import MyContext from "./components/bookstore-service-context/bookstore-service-context";
import store from "./store";


const bookstoreService = new BookstoreService();

ReactDOM.render(
  <Provider store={store}>
    <ErrorBoundry>
      <MyContext.Provider value={bookstoreService}>
        <BrowserRouter>
          <App/>
        </BrowserRouter>
      </MyContext.Provider>
    </ErrorBoundry>
  </Provider>,
  document.getElementById('root')
);