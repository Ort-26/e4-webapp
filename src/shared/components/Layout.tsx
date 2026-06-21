import { Outlet } from 'react-router-dom';
import { Navbar } from './Navbar';

export const Layout = () => {
  return (
    <>
      <main className="min-vh-100 bg-dark ">
        <Navbar />
        <main className="container card border-secondary shadow-lg overflow-hidden custom-container-bg mt-5 pt-2">
          <Outlet />
        </main>
      </main>
    </>
  );
};