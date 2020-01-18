import React from 'react';

const SideNav = () => (
<div className="bg-white shadow-r pt-4 pb-8 w-56 h-full">
    <div>
        <img src="/assets/logo.png" alt="logo"/>
    </div>
    <div className="px-4 text-gray-500">
        <div className="uppercase font-bold mb-4">Menu</div>
        <div className="pl-4">
        <div className="flex mt-6 justify-center items-center cursor-pointer">
            <div className="flex-initial mr-2"><img src="/assets/home.png" className="h-4" alt="home"/></div>
            <div className="flex-auto">Home</div>
        </div>
        <div className="flex mt-6 justify-center items-center cursor-pointer">
            <div className="flex-initial mr-2"><img src="/assets/wallet.png" className="h-4" alt="home"/></div>
            <div className="flex-auto">Savings</div>
        </div>
        <div className="flex mt-6 justify-center items-center cursor-pointer">
            <div className="flex-initial mr-2"><img src="/assets/bar.png" className="h-4" alt="home"/></div>
            <div className="flex-auto">Investments</div>
        </div>
        <div className="flex mt-6 justify-center items-center cursor-pointer">
            <div className="flex-initial mr-2"><img src="/assets/transaction.png" className="h-4" alt="home"/></div>
            <div className="flex-auto">Transactions</div>
        </div>
        <div className="flex mt-6 justify-center items-center cursor-pointer">
            <div className="flex-initial mr-2"><img src="/assets/setting.png" className="h-4" alt="home"/></div>
            <div className="flex-auto">Settings</div>
        </div>
        </div>
        
    </div>
</div>
)

export default SideNav;