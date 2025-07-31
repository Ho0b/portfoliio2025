import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import About from './AboutMe';
import NotFoundPage from './NotFoundPage';
import reportWebVitals from './reportWebVitals';
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import ContactFormContainer from './Contact';
import DragonQuestIndex from './projects/webprojects/dqindex';

const router = createBrowserRouter([
  {
    path:"/", element: <App />
  },
  {
    path:"/about", element: <About />
  },
  {
    path:"/contact", element: <ContactFormContainer />
  },
  {
    path:"/projects/dqindex", element: <DragonQuestIndex />
  },
  { path: "*", element: <NotFoundPage /> 
  },
],
{
  basename:"/"
}
);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
