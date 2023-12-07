// /src/components/renter/RentTimeline.js

import React from 'react';

const RentTimeline = ( { renter } ) => {
    if ( !renter || !renter.rentDetails || renter.rentDetails.length === 0 ) {
        return <p className="text-gray-500">No rent details available.</p>;
    }

    return (
        <div className="mt-8 grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
            <h1 className="col-span-full text-4xl font-bold mb-6">Rent Timeline</h1>
            {renter.rentDetails.map( ( payment, index ) => (
                <div key={index} className="bg-white p-6 rounded-md shadow-md">
                    <h3 className="text-xl font-semibold mb-4">{`${ new Date( payment.date ).toLocaleString( 'en-US', { month: 'long', year: 'numeric' } ) }`}</h3>
                    <p className="text-gray-700 mb-2">{`Date: ${ payment.date }`}</p>
                    <div className="flex justify-between">
                        <div className="w-1/2">
                            <p className="text-blue-600 font-semibold">{`Room Rent: ${ payment.roomRent } INR`}</p>
                            <p className="text-green-600 font-semibold">{`Electricity Bill: ${ payment.electricityBill } INR`}</p>
                            <p className="text-indigo-600 font-semibold">{`Water Bill: ${ payment.waterBill } INR`}</p>
                        </div>
                        <div className="w-1/2 text-right">
                            <p className="text-gray-800 font-bold">
                                Total: {payment.roomRent + payment.electricityBill + payment.waterBill} INR
                            </p>
                        </div>
                    </div>
                </div>
            ) )}
        </div>
    );
};

export default RentTimeline;
