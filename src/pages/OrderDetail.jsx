// src/OrderDetails.js
import React from 'react';
import { orders } from '../orders';
import LaunchIcon from '@mui/icons-material/Launch';



const OrderDetails = () => {
    return (
        <div className="flex font-sans bg-orange-100">
            <aside className="w-64 bg-gray-100 p-6">
                <button className="w-full py-2 mb-4 bg-red-700 mt-8 rounded-md text-white">Orders</button>
            </aside>
            <main className="flex-grow p-6">
                <header className="">
                    <h1 className="text-2xl font-bold ">Order Details</h1>
                    <div className="flex items-center space-x-24">
                        <div className="flex items-center border-2 border-gray-300 rounded-lg p-2 bg-white shadow-sm mt-2 mb-2">
                            <svg
                                className="w-5 h-5 text-gray-500 mr-2"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                                ></path>
                            </svg>
                            <input
                                type="text"
                                placeholder="Search"
                                className="w-72 border-none focus:ring-0 outline-none"
                            />
                        </div>
                        <div>

                            <button className="flex items-center px-4 py-2 border border-gray-300 rounded-lg bg-white shadow-sm">
                                <svg
                                    className="w-5 h-5 text-gray-500"
                                    fill="none"
                                    stroke="currentColor"
                                    viewBox="0 0 24 24"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2"
                                        d="M3 4a1 1 0 011-1h16a1 1 0 011 1v2a1 1 0 01-.293.707L14 12.414V19a1 1 0 01-1.447.894l-4-2A1 1 0 018 17.618V12.414L3.293 6.707A1 1 0 013 6V4z"
                                    ></path>
                                </svg>
                                Filters
                            </button>
                        </div>
                        <div className="flex items-center border border-gray-300 rounded-lg bg-white shadow-sm px-4 py-2">
                            <svg
                                className="w-5 h-5 text-gray-500 mr-2"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M8 7V3m8 4V3m-6 8h6m-6 4h6m-6 4h6m4-12H5a2 2 0 00-2 2v10a2 2 0 002 2h14a2 2 0 002-2V7a2 2 0 00-2-2z"
                                ></path>
                            </svg>
                            <span className="mr-4 ms-2 ">Today</span>
                            <svg
                                className="w-5 h-5 text-gray-500"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M19 9l-7 7-7-7"
                                ></path>
                            </svg>
                        </div>
                    </div>
                </header>
                <table className="min-w-full border-collapse bg-white">
                    <thead>
                        <tr className="border-b-2">
                            <th className="p-4">Order ID</th>
                            <th className="p-4">Table no</th>
                            <th className="p-4">Customer name</th>
                            <th className="p-4">Order type</th>
                            <th className="p-4">Order status</th>
                            <th className="p-4">Payment</th>
                            <th className="p-4">Order date</th>
                            <th className="p-4">View order</th>
                        </tr>
                    </thead>
                    <tbody>
                        {orders?.map((order, index) => (
                            <tr key={index}>
                                <td className="border-b-2 p-4"><a href="#" className="text-blue-500">{order.id}</a></td>
                                <td className="border-b-2 p-4 text-base font-medium">{order.tableNo}</td>
                                <td className="border-b-2 p-4 text-base font-medium">{order.customer}</td>
                                <td className={`border-b-2 p-4 ${order.type === 'Delivery' ? 'text-red-600' : order.type === 'Dine In' ? 'text-blue-600' : 'text-yellow-400'}`}>{order.type}</td>
                                <td className="border-b-2 p-4">
                                    {order.status === "Order Updated" ? (
                                        <span className="inline-flex items-center rounded-md bg-purple-50 px-2 py-1 text-xs font-medium text-purple-700 ring-1 ring-inset ring-purple-700/10">
                                            {order.status}
                                        </span>
                                    ) : (
                                        <span className="inline-flex items-center rounded-md bg-red-50 px-2 py-1 text-xs font-medium text-red-700 ring-1 ring-inset ring-red-600/10">
                                            {order.status}
                                        </span>
                                    )}
                                </td>
                                <td className="border-b-2 p-4">
                                    {order.payment === "Paid" ? (
                                        <span className="inline-flex items-center rounded-md bg-green-50 px-2 py-1 text-xs font-medium text-green-700 ring-1 ring-inset ring-green-600/20">
                                            {order.payment}
                                        </span>
                                    ) : (
                                        <span className="inline-flex items-center rounded-md bg-red-50 px-2 py-1 text-xs font-medium text-red-700 ring-1 ring-inset ring-red-600/10">
                                            {order.payment}
                                        </span>
                                    )}
                                </td>
                                <td className="border-b-2 p-4 text-base font-medium">{order.date}</td>
                                <td className="border-b-2 p-4"><a href="#" className="text-blue-500"><LaunchIcon /></a></td>
                            </tr>
                        ))}
                    </tbody>
                </table>

            </main>
        </div>
    );
};

export default OrderDetails;
