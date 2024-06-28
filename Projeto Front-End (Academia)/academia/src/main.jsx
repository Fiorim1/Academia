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
import PageMuscle from '../../academiaSite/src/components/routes/PageMuscle/PageMuscle.jsx';
import Training from './components/routes/PageMuscle/routes/Training/Training.jsx';
import ChatMuscle from './components/routes/PageMuscle/routes/Chat/ChatMuscle.jsx';
import PixMuscle from './components/routes/PixMuscle.jsx';
import BoletMuscle from './components/routes/BoletMuscle.jsx';
import Login from './components/routes/Login.jsx';
import ForgotPasswordLogin from './components/routes/ForgotPasswordLogin.jsx';
import Register from './components/routes/Register.jsx';
import PerfilChanges from './components/routes/PerfilChanges.jsx';
import PageCross from './components/routes/PageCrosss/PageCross.jsx';
import TrainingCross from "./components/routes/PageCrosss/routes/Training/TrainingCross.jsx"
import ChatCross from './components/routes/PageCrosss/routes/Chat/ChatCross.jsx';
import PageBoxe from './components/routes/PageBoxe/PageBoxe.jsx';
import TrainingBoxe from './components/routes/PageBoxe/routes/Training/TrainingBoxe.jsx';
import ChatBoxe from './components/routes/PageBoxe/routes/Chat/ChatBoxe.jsx';
import PaymentMethodCross from './components/routes/PaymentMethodCross.jsx';
import PixCross from './components/routes/PixCross.jsx';
import BoletCross from './components/routes/BoletCross.jsx';
import CardPaymentCross from './components/routes/CardPaymentCross.jsx';
import PaymentMethodBoxe from './components/routes/PaymentMethoBoxe.jsx';
import PixBoxe from './components/routes/PixBoxe.jsx';
import CardPaymentBoxe from './components/routes/CardPaymentBoxe.jsx';
import BoletBoxe from './components/routes/BoletBoxe.jsx';

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
  },
  {
    path: "/pagemuscle",
    element: <PageMuscle />
  },
  {
    path: "/trainingMuscle",
    element: <Training />
  },
  {
    path: "/chatmuscle",
    element: <ChatMuscle />
  },
  {
    path: "/pixmuscle",
    element: <PixMuscle />
  },
  {
    path: "/boletmuscle",
    element: <BoletMuscle />  
  },
  {
    path: "/login",
    element: <Login />
  },
  {
    path: "/forgotpassword",
    element: <ForgotPasswordLogin />
  },
  {
    path: "/register",
    element: <Register />
  },
  {
    path: "/perfilchanges",
    element: <PerfilChanges />
  },
  {
    path: "/pagecross",
    element: <PageCross />  
  },
  {
    path: "/trainingcross",
    element: <TrainingCross />
  },
  {
    path: "/chatcross",
    element: <ChatCross />
  },
  {
    path: "/pageboxe",
    element: <PageBoxe />
  },
  {
    path: "/trainingboxe",
    element: <TrainingBoxe />
  },
  {
    path: "/chatboxe",
    element: <ChatBoxe />
  },
  {
    path: "/paycross",
    element: <PaymentMethodCross />
  },
  {
    path: "/pixcross",
    element: <PixCross />
  },
  {
    path: "/boletcross",
    element: <BoletCross />
  },
  {
    path: "/cardcross",
    element: <CardPaymentCross />
  },
  {
    path: "/payboxe",
    element: <PaymentMethodBoxe />
  },
  {
    path: "/pixboxe",
    element: <PixBoxe />
  },
  {
    path: "/cardboxe",
    element: <CardPaymentBoxe />
  },
  {
    path: "/boletboxe",
    element: <BoletBoxe />
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
