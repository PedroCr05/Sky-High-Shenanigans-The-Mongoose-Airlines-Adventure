const db = require(`../db`);
const { Airports } = require(`../models`);

db.on(`error`, console.error.bind(console, `MongoDB connection error:`));

const main = async () => {
  await Airports.deleteMany();
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
      name: `Gimpo Int'l`,
      location: `Seoul, South Korea`,
      code: `GMP`,
    },
    {
      name: `Houston Bush Int'ctl`,
      location: `House Texas`,
      code: `IAH`,
    },
    {
      name: `Jeju International Airport`,
      location: `Jeju City, South Korea`,
      code: `CJU`,
    },
    {
      name: `Cheongju International Airport`,
      location: `Cheongju, South Korea`,
      code: `CJJ`,
    },
    {
      name: `Haneda Airport`,
      location: `Ōta, Tokyo, Japan`,
      code: `HND`,
    },
  ];

  await Airports.insertMany(airports);
  console.log(`
        =================================
        +=+=+=+[Airports created!]=+=+=+=
        =================================
    `);
};

const run = async () => {
  await main();
  db.close();
};

run();
