import React from 'react';
import Navbar from './Navbar'
import SideNav from './SideNav';
import Analysis from './Analysis';

const App = () => (
    <div className="bg-gray-400 flex">
      <div className="flex-initial">
      <SideNav/>
      </div>
      <div className="flex-auto">
      <Navbar/>
      <Analysis/>
      </div>

    </div>
);

export default App;
