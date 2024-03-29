import React from 'react';
import { Outlet } from 'react-router-dom';
import NavComponent from '../components/nav/NavComponent';

const Root = () => {
  return (
    <div className="mx-4 mt-4 md:mx-10 md:mt-6">
      <NavComponent />
      <main className="mt-8 md:mt-10">
        <Outlet />
      </main>
    </div>
  );
};
export default Root;
