import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";


const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App/>
  </React.StrictMode>
);

export const readingTime = (body) => {
  const wpm = 225;
  const words = body.trim().split(/\s+/).length;
  return `${Math.ceil(words / wpm)} min read`;
};


export const formatDate = (date) => {
  const options = { year: 'numeric', month: 'short', day: 'numeric' };
  const today = new Date(date);

  return today.toLocaleDateString('en-US', options);
};
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
