// /src/pages/Dashboard.js

import React from 'react';
import { Link } from 'react-router-dom';
import rentersData from '../data/rentersData.js';

const Dashboard = () => {
    return (
        <div className="p-4">
            <h2 className="text-3xl font-bold mb-6">Renter Dashboard</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                {rentersData.map( ( renter ) => (
                    <Link to={`/renter/${ renter.id }`} key={renter.id}>
                        <div className="bg-white p-4 rounded-md shadow-md cursor-pointer transition transform hover:scale-105">
                            <img
                                src={renter.imageUrl}
                                alt={renter.name}
                                className="w-full h-40 object-cover rounded-md mb-4"
                            />
                            <h3 className="text-xl font-semibold mb-1">{renter.name}</h3>
                            <p className="text-gray-600 mb-2">{`Room: ${ renter.roomNumber }`}</p>
                            <div className="flex justify-end">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                    className="w-6 h-6 text-blue-500"
                                >
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                                </svg>
                            </div>
                        </div>
                    </Link>
                ) )}
            </div>
        </div>
    );
};

export default Dashboard;
