// /src/pages/RenterPage.js

import React,{useEffect} from 'react';
import { useParams } from 'react-router-dom';
import RenterDetails from '../components/renter/RenterDetails';
import RentTimeline from '../components/renter/RentTimeline';
import rentersData from '/src/data/rentersData';

const RenterPage = () => {
    const { id } = useParams();
    const renterData = rentersData.find( ( renter ) => renter.id === parseInt( id ) );
    useEffect( () => {
        window.scrollTo( 0, 0 );
    }, [] );

    return (
        <div className="p-4">
            <RenterDetails renter={renterData} />
            <RentTimeline renter={renterData} />
        </div>
    );
};

export default RenterPage;
