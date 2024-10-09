const db = require(`./db`);
const { Flight, Airport } = require(`./models`);

const findFlight = async () => {
  const flight = await flight.findOne();
  console.log(flight);
};

const createFlight = async () => {
  const airport = await Airport.findOne();
  let book = await Flight.create({
    airline: `Hong Kong Express`,
    flightNum: 211,
    cost: 750,
    numOfSeats: 180,
    departingAirport: `Hong Kong Int'l`,
    arrivalAirport: `Jeju Int'l`,
    departureDate_id: airport._id,
  });
  console.log(book);
};

const updateFlight = async () => {
  const updated = await Flight.updateOne(
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
      airline: `Korean Air`,
      flightNum: 1705,
      cost: 600,
      numOfSeats: 325,
      departingAirport: `Jeju Int'l`,
      arrivalAirport: `Cheongju`,
      departureDate_id: `October 7, 2024`,
    }
  );
  console.log(updated);
};

const deleteFlight = async () => {
  let deleted = await Flight.deleteOne({
    airline: `Air Canada`,
    flightNum: 267,
    cost: 375,
    numOfSeats: 200,
    departingAirport: `Toronto Pearson Int'l`,
    arrivalAirport: `Winnipeg Int'l`,
    departureDate_id: `October 6, 2024`,
  });
  console.log(deleted);
};

async function main() {
  try {
    await findFlight();
    await createFlight();
    await updateFlight();
    await deleteFlight();
  } catch (error) {
    console.log(error);
  } finally {
    await db.close();
  }
}

main();
