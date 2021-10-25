import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./app/app";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter as Router } from "react-router-dom";
import { Provider } from "react-redux";
import { createStore, applyMiddleware ,combineReducers } from "redux";
import thunk from "redux-thunk";
import authReducer from "./redux/reducers/auth-reducer";
import PhysicianDataReducer from "./redux/reducers/physician-reducer";
import ImmunizationDataReducer from "./redux/reducers/immunization-reducer";
import DemographicsDataReducer from "./redux/reducers/demographics-reducer";


const rootReducer = combineReducers({
  auth: authReducer,
  physiciandata: PhysicianDataReducer,
  DemographicsData : DemographicsDataReducer,
  immunization :ImmunizationDataReducer,
});

let store = createStore(rootReducer, applyMiddleware(thunk));

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <Provider store={store}>
        <App />
      </Provider>
    </Router>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
