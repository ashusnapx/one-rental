// src/components/RenterDetails.js
import React, { useState } from 'react';

const RenterDetails = ( { renter } ) => {
    const [ showDetails, setShowDetails ] = useState( false );

    const toggleDetails = () => {
        setShowDetails( !showDetails );
    };

    const sendOnWhatsApp = () => {
        const phoneNumber = renter.contactNumber;

        // Get the latest rent details
        const latestRent = renter.rentDetails[ renter.rentDetails.length - 1 ];

        // Format the date as "Month Year" (e.g., "January 2023")
        const rentDate = new Date( latestRent.date );
        const formattedDate = new Intl.DateTimeFormat( 'en-US', { month: 'long', year: 'numeric' } ).format( rentDate );

        // Customize the message with rent details from the latest rent payment
        const rentMessage = `Hello ${ renter.name },\n\nI have received the rent for ${ formattedDate }.\n\nDate: ${ latestRent.date }\nAmount: ${ latestRent.roomRent }\n`;

        // Create a WhatsApp URL
        const whatsappUrl = `https://wa.me/${ phoneNumber }?text=${ encodeURIComponent( rentMessage ) }`;

        // Open the WhatsApp chat in a new tab
        window.open( whatsappUrl, '_blank' );
    };

    return (
        <div className="mb-8 p-4 bg-white rounded-md shadow-md">
            <div className="flex flex-col md:flex-row items-center justify-between">
                <div className="mb-4 md:mb-0 md:flex-shrink-0">
                    <img
                        src={renter.imageUrl}
                        alt={renter.name}
                        className="w-32 h-32 md:w-40 md:h-40 object-cover rounded-full"
                    />
                </div>
                <div className="md:ml-4">
                    <h2 className="text-xl md:text-2xl font-semibold mb-1">{renter.name}</h2>
                    <p className="text-sm md:text-base text-gray-500 mb-1">{renter.profession}</p>
                    <p className="text-sm md:text-base text-gray-500">{`Works at ${ renter.workplace }`}</p>
                </div>
                <div className="mt-4 md:mt-0 md:ml-4 flex items-center space-x-2">
                    <button
                        className="bg-blue-500 text-white px-4 py-2 rounded"
                        onClick={sendOnWhatsApp}
                    >
                        Send on WhatsApp
                    </button>
                    <button
                        className="bg-green-500 text-white px-4 py-2 rounded"
                        onClick={toggleDetails}
                    >
                        {showDetails ? 'Hide Details' : 'More Details'}
                    </button>
                </div>
            </div>
            {/* Additional Details */}
            {showDetails && (
                <div className="mt-4">
                    <p className="text-sm text-gray-600">
                        <span className="font-semibold">Aadhar Card:</span> {renter.aadharNumber}
                    </p>
                    <p className="text-sm text-gray-600">
                        <span className="font-semibold">Permanent Address:</span> {renter.permanentAddress}
                    </p>
                    <p className="text-sm text-gray-600">
                        <span className="font-semibold">Contact Number:</span> {renter.contactNumber}
                    </p>
                    <p className="text-sm text-gray-600">
                        <span className="font-semibold">Alternate Contact:</span>{' '}
                        {renter.alternateContactNumber || 'N/A'}
                    </p>
                    <p className="text-sm text-gray-600">
                        <span className="font-semibold">People in House:</span> {renter.peopleInHouse}
                    </p>
                </div>
            )}
        </div>
    );
};

export default RenterDetails;
