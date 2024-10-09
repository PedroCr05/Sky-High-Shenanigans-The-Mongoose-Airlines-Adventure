const db = require(`../db`);
const { Airport, Flight } = require(`../models`);

db.on(`error`, console.error.bind(console, `MongoDB connection error:`));

const main = async () => {
  const someAirport = await Airport.find({ name: `airport` });
  const anotherAirport = await Airport.find({ name: `not airport` });

  const flights = [
    {
      airline: `United Airlines`,
      flightNum: 1004,
      cost: 254,
      numOfseats: 219,
      departingAirport: `Seattle-Tacoma Intl`,
      arrivalAirport: `Denver Intl`,
      departureDate_id: `October 3, 2024`,
    },
    {
      airline: `United Airlines`,
      flightNum: 102,
      cost: 118,
      numOfSeats: 318,
      departingAirport: `Houston Bush Int'ctl`,
      arrivalAirport: `Munich Int'l`,
      departureDate_id: `October 4, 2024`,
    },
    {
      airline: `Korean Air`,
      flightNum: 1009,
      cost: 538,
      numOfSeats: 289,
      departingAirport: `Gimpo Int'l`,
      arrivalAirport: `Jeju Int'l`,
      departureDate_id: `October 6, 2024`,
    },
    {
      airline: `Korean Air`,
      flightNum: 1704,
      cost: 717,
      numOfSeats: 325,
      departingAirport: `Jeju Int'l`,
      arrivalAirport: `Cheongju`,
      departureDate_id: `October 8, 2024`,
    },
    {
      airline: `Hong Kong Express`,
      flightNum: 625,
      cost: 95,
      numOfSeats: 180,
      departingAirport: `Tokyo Int'l (Haneda)`,
      arrivalAirport: `Hong Kong Int'l`,
      departureDate_id: `October 6, 2024`,
    },
    {
      airline: `Hong Kong Express`,
      flightNum: 321,
      cost: 75,
      numOfSeats: 180,
      departingAirport: `Jeju Int'l`,
      arrivalAirport: `Hong Kong Int'l`,
      departureDate_id: `October 07, 2024`,
    },
    {
      airline: `Air Canada`,
      flightNum: 267,
      cost: 375,
      numOfSeats: 200,
      departingAirport: `Toronto Pearson Int'l`,
      arrivalAirport: `Winnipeg Int'l`,
      departureDate_id: `October 6, 2024`,
    },
  ];

  await Airport.insertMany(flights);
  console.log(`Constructed newer airports!`);
};

const run = async () => {
  await main();
  db.close();
};

run();
