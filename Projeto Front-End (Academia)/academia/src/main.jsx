import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'

import {
  createBrowserRouter,
  RouterProvider
} from "react-router-dom";

import Home from './Home.jsx';
import CardPayment from './components/routes/CardPayment.jsx';
import PaymentMethodMuscle from './components/routes/PaymentMethodMuscle.jsx';

const router = createBrowserRouter([
  {
    path: '/card',
    element: <CardPayment />,
  },
  {
    path: '/',
    element: <Home />,
  },
  {
    path: "/paymuscle",
    element: <PaymentMethodMuscle />
  }
]);
function App() {
  return <RouterProvider router={router} />;
}
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
