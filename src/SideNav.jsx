import React from 'react';

const SideNav = () => (
<div className="bg-white shadow-r pt-4 pb-8 w-16 lg:w-56 h-full">
    <div>
        <img src="/assets/logo.png" alt="logo"/>
    </div>
    <div className="px-0 lg:px-4 text-gray-500">
        <div className="uppercase font-bold mb-4 hidden lg:block">Menu</div>
        <div className="pl-4">
        <div className="flex mt-6 justify-center items-center cursor-pointer">
            <div className="flex-initial mr-2"><img src="/assets/home.png" className="h-4" alt="home"/></div>
            <div className="flex-auto hidden lg:block">Home</div>
        </div>
        <div className="flex mt-6 justify-center items-center cursor-pointer">
            <div className="flex-initial mr-2"><img src="/assets/wallet.png" className="h-4" alt="home"/></div>
            <div className="flex-auto hidden lg:block">Savings</div>
        </div>
        <div className="flex mt-6 justify-center items-center cursor-pointer">
            <div className="flex-initial mr-2"><img src="/assets/bar.png" className="h-4" alt="home"/></div>
            <div className="flex-auto hidden lg:block">Investments</div>
        </div>
        <div className="flex mt-6 justify-center items-center cursor-pointer">
            <div className="flex-initial mr-2"><img src="/assets/transaction.png" className="h-4" alt="home"/></div>
            <div className="flex-auto hidden lg:block">Transactions</div>
        </div>
        <div className="flex mt-6 justify-center items-center cursor-pointer">
            <div className="flex-initial mr-2"><img src="/assets/setting.png" className="h-4" alt="home"/></div>
            <div className="flex-auto hidden lg:block">Settings</div>
        </div>
        </div>
        
    </div>
</div>
)

export default SideNav;