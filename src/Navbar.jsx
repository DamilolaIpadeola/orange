import React from 'react';

const Navbar = () => (
  <nav className="flex items-center justify-between flex-wrap bg-white py-4 px-6 shadow-md items-center">
    <div className="w-full flex-grow flex items-center w-auto">
      <div className="text-sm lg:flex-grow">
        <div className="relative">
          <input className="bg-white ml-3 focus:outline-none focus:shadow-outline-none rounded-lg py-2 px-4 block w-10/12 appearance-none leading-normal" type="text" placeholder="Search" />
          <i className="fa fa-search absolute top-0 left-0 py-3 text-gray-500" aria-hidden="true"></i>
        </div>
      </div>
      <div className="flex">
        <a href="#" className="inline-block text-sm text-gray-700 mt-4 lg:mt-0 mr-4 hidden lg:block">My Investment</a>
        <div className="hidden lg:block"><i className="fa fa-bell text-gray-700 mr-4" aria-hidden="true"></i></div>
        <a href="#" className="inline-block text-sm text-gray-700 lg:mt-0">Logout</a>
      </div>
    </div>
  </nav>
)

export default Navbar;