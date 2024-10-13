const db = require(`../db`);
const { Airports, Flights } = require(`../models`);

db.on(`error`, console.error.bind(console, `MongoDB connection error:`));

const main = async () => {
  await Flights.deleteMany();
  const airportLA = await Airports.find({
    name: `Los Angeles International Airport`,
  });
  const airportAR = await Airports.find({
    name: `Northwest Arkansas National Airport`,
  });

  const airportICN = await Airports.find({
    name: `Incheon International Airport`,
  });

  const airportGMP = await Airports.find({
    name: `Gimpo Int'l`,
  });

  const airportIAH = await Airports.find({
    name: `Houston Bush Int'ctl`,
  });

  const airportCJU = await Airports.find({
    name: `Jeju International Airport`,
  });

  const airportCJJ = await Airports.find({
    name: `Cheongju International Airport`,
  });

  const airportHND = await Airports.find({
    name: `Haneda Airport`,
  });

  const flights = [
    {
      airline: `United Airlines`,
      flightNum: 1004,
      cost: 254,
      numOfSeats: 219,
      departingAirport: airportLA[0],
      arrivalAirport: airportAR[0],
      arrivalDateAndTime: `October 3, 2024`,
      departingDateAndTime: `October 10, 2024`,
    },
    {
      airline: `United Airlines`,
      flightNum: 102,
      cost: 118,
      numOfSeats: 318,
      departingAirport: airportIAH[0],
      arrivalAirport: airportICN[0],
      arrivalDateAndTime: `October 4, 2024`,
      departingDateAndTime: `October 9, 2024`,
    },
    {
      airline: `Korean Air`,
      flightNum: 1009,
      cost: 538,
      numOfSeats: 289,
      departingAirport: airportGMP[0],
      arrivalAirport: airportCJU[0],
      arrivalDateAndTime: `October 6, 2024`,
      departingDateAndTime: `October 11, 2024`,
    },
    {
      airline: `Korean Air`,
      flightNum: 1704,
      cost: 717,
      numOfSeats: 325,
      departingAirport: airportCJU[0],
      arrivalAirport: airportCJJ[0],
      arrivalDateAndTime: `Sep 30, 2024`,
      departingDateAndTime: `October 8, 2024`,
    },
    {
      airline: `Hong Kong Express`,
      flightNum: 625,
      cost: 95,
      numOfSeats: 180,
      departingAirport: airportHND[0],
      arrivalAirport: airportCJJ[0],
      arrivalDateAndTime: `Sep 28, 2024`,
      departingDateAndTime: `October 6, 2024`,
    },
    {
      airline: `Hong Kong Express`,
      flightNum: 321,
      cost: 75,
      numOfSeats: 180,
      departingAirport: airportCJU[0],
      arrivalAirport: airportLA[0],
      arrivalDateAndTime: `Sep 22, 2024`,
      departingDateAndTime: `October 07, 2024`,
    },
    {
      airline: `United Airlines`,
      flightNum: 267,
      cost: 375,
      numOfSeats: 200,
      departingAirport: airportLA[0],
      arrivalAirport: airportLA[0],
      arrivalDateAndTime: `October 5, 2024`,
      departingDateAndTime: `October 6, 2024`,
    },
  ];

  await Flights.insertMany(flights);
  console.log(`
        =================================
        +=+=+=+=[Flights Created!]+=+=+=+
        =================================
    `);
};

const run = async () => {
  await main();
  db.close();
};

run();
