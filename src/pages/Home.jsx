import React from 'react'
import Navbar from '../components/Navbar';
import Sidebar from '../components/Sidebar';
import Dashboard from '../components/Dashboard';

const Home = () => {
  return (
    <>
      <div>
        <Navbar />
      </div>
      <div className="flex gap-4 px-4 md:px-[120px] md:gap-12">
        <div className="basis-1/6">
          <Sidebar />
        </div>
        <div className="basis-5/6 mt-28 h-[80vh] overflow-auto">
          <Dashboard />
        </div>
      </div>
    </>
  );
}

export default Home
