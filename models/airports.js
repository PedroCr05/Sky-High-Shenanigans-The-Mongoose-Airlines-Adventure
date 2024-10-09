const { Schema } = require(`mongoose`);

const Airports = new Schema(
  {
    airline: ``,
    flightNum: 1,
    cost: 1,
    numOfseats: 1,
    departingAirport: ``,
    arrivalAirport: ``,
    departureDate: ``,
    departureTime: ``,
  },
  { timestamps: true }
);

module.exports = Airports;
