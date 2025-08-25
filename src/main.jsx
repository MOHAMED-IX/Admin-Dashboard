import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css'
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import App from './App.jsx';
import Dashboard from './page/dashboard/dashboard.jsx';
import Team from './page/team/team.jsx';
import Contacts from './page/contacts/contacts.jsx';
import Invoices from './page/invoices/invoices.jsx';
import Form from './page/form/form.jsx';
import Calendar from './page/calendar/calendar';
import Faq from './page/faq/faq';
import Bar from './page/bar/bar';
import Pie from './page/pie/pie';
import Line from './page/line/line';
import Geography from './page/geography/geography';
import NotFound from './page/NotFound/NotFound';


const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App />}>
      <Route index element={<Dashboard />} />
      <Route path='team' element={<Team />} />
      <Route path='contacts' element={<Contacts />} />
      <Route path='invoices' element={<Invoices />} />
      <Route path='form' element={<Form />} />
      <Route path='calendar' element={<Calendar />} />
      <Route path='faq' element={<Faq />} />
      <Route path='bar' element={<Bar />} />
      <Route path='pie' element={<Pie />} />
      <Route path='line' element={<Line />} />
      <Route path='geography' element={<Geography />} />
      <Route path='*' element={<NotFound />} />
    </Route>
  )
);


ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);