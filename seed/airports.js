const db = require(`../db`);
const { Airports } = require(`../models`);

db.on(`error`, console.error.bind(console, `MongoDB connection error:`));

const main = async () => {
  const airports = [
    {
      name: `Los Angeles International Airport`,
      location: `California`,
      code: `KLAX`,
    },
    {
      name: `Northwest Arkansas National Airport`,
      location: `Arkansas`,
      code: `XNA`,
    },
    {
      name: `Incheon International Airport`,
      location: `South Korea`,
      code: `ICN`,
    },
    {
      name: `Sydney Kingsford Smith Airport`,
      location: `New South Wales`,
      code: `SYD`,
    },
  ];

  await Flights.insertMany(flights);
  console.log(`Constructed new flights!`);
};

const run = async () => {
  await main();
  db.close();
};

run();
