const { Schema } = require(`mongoose`);
const Airports = require(`./airports`);

const Flights = new Schema(
  {
    airline: { type: String, require: true },
    flightNum: { type: Number, require: true },
    cost: { type: Number, require: true },
    numOfseats: { type: Number, require: true },
    departingAirport: { type: String, require: true },
    arrivalAirport: { type: String, require: true },
    departureDate: { type: String, require: true },
    departureTime: { type: String, require: true },
  },
  { timestamps: true }
);

module.exports = Flights;
