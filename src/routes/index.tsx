import React, { FC, ReactElement } from 'react';
import Home from '../views/Home';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import CountryDetails from '../views/CountryDetails';

export const AppRoutes = {
  HOME : "/",
  COUNTRY_DETAILS: "/country/:id"

}
const AppRouter = () => {
  let routes = [
    { path: AppRoutes.HOME, component: <Home /> },
    { path: AppRoutes.COUNTRY_DETAILS, component: <CountryDetails /> },
  ];
  return <div>
       <BrowserRouter>
        <Routes>
          {routes?.map((route, index) => {
            return (
              <Route
                key={index}
                path={route?.path}
                element={route?.component}
              />
            );
          })}
          {/* <Route path="*" element={<Navigate to={appRoutes.AUTH} />} /> */}
        </Routes>
      </BrowserRouter>
  </div>;
};

export default AppRouter;
