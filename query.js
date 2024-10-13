const db = require(`./db`);
const { Flights, Airports } = require(`./models`);

const findFlight = async () => {
  const flight = await Flights.find();
  console.log(flight);
};

const createFlights = async () => {
  const airportLA = await Airports.find({
    name: `Los Angeles International Airport`,
  });
  const airportAR = await Airports.find({
    name: `Northwest Arkansas National Airport`,
  });

  let flight = await Flights.create({
    airline: `Hong Kong Express`,
    flightNum: 211,
    cost: 750,
    numOfSeats: 180,
    departingAirport: airportLA[0]._id,
    arrivalAirport: airportAR[0]._id,
    arrivalDateAndTime: `October 1, 2024`,
    departingDateAndTime: `October 9, 2024`,
  });
  console.log(flight);
  console.log(`
        =================================
        +=+=[Flight has been booked!]+=+=
        =================================
    `);
};

const updateFlights = async () => {
  const airportLA = await Airports.find({
    name: `Los Angeles International Airport`,
  });
  const airportAR = await Airports.find({
    name: `Northwest Arkansas National Airport`,
  });

  const updated = await Flights.updateOne(
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
      flightNum: 1705,
      cost: 600,
      numOfSeats: 325,
      departingAirport: airportLA[0],
      arrivalAirport: airportAR[0],
      arrivalDateAndTime: `October 3, 2024`,
      departingDateAndTime: `October 10, 2024`,
    }
  );
  console.log(updated);
  console.log(`
        =================================
        +=+=[Flight has been updated]+=+=
        =================================
    `);
};

const deleteFlights = async () => {
  const airportCJU = await Airports.find({
    name: `Jeju International Airport`,
  });
  const airportLA = await Airports.find({
    name: `Los Angeles International Airport`,
  });

  let deleted = await Flights.deleteOne({
    airline: `Hong Kong Express`,
    flightNum: 321,
    cost: 75,
    numOfSeats: 180,
    departingAirport: airportCJU[0],
    arrivalAirport: airportLA[0],
    arrivalDateAndTime: `Sep 22, 2024`,
    departingDateAndTime: `October 07, 2024`,
  });
  console.log(deleted);
  console.log(`
        =================================
        +=+=[Flight has been deleted]+=+=
        =================================
    `);
};

async function main() {
  try {
    await findFlight();
    await createFlights();
    await updateFlights();
    await deleteFlights();
  } catch (error) {
    console.log(error);
  } finally {
    await db.close();
  }
}

main();
