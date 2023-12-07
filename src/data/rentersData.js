// /src/data/rentersData.js

const rentersData = [
    {
        id: 1,
        name: 'Samdariya',
        profession: 'Civil Engineer',
        workplace: 'Samdariya',
        roomNumber: 'Ground Floor Front',
        contactNumber: +918840014322,
        imageUrl: 'https://i.postimg.cc/7JVQHwkW/51664092-78df-4b69-bca9-5bb8455d3e2c.png',
        rentDetails: [
            { date: '2023-11-01', roomRent: 10000, electricityBill: 0, waterBill: 0 },
            // Add more rent payment data as needed
        ],
    },
    {
        id: 2,
        name: 'Ashutosh Pandey',
        profession: 'Engineer',
        contactNumber: +919425734312,
        workplace: 'Reliance Power',
        roomNumber: 'First Floor Front',
        imageUrl: 'https://i.postimg.cc/bdhywgPx/821075c0-022d-436f-861e-4b0e474f3017.png',
        rentDetails: [
            { date: '2023-12-04', roomRent: 8500, electricityBill: 600, waterBill: 200 },
            // Add more rent payment data as needed
        ],
    },
    {
        id: 3,
        name: 'Sujeet Prasad',
        roomNumber: 'First Floor Rear',
        profession: 'Engineer',
        contactNumber: +917000730409,
        workplace: 'Adani',
        imageUrl: 'https://i.postimg.cc/wRHGY3SN/c2c552c0-142c-40f8-8c4a-573b691763b6.png',
        rentDetails: [
            { date: '2023-12-07', roomRent: 7500, electricityBill: 490, waterBill: 200 },
            // Add more rent payment data as needed
        ],
    },
    // Add more renters as needed
];

export default rentersData;
