const mongoose = require(`mongoose`);
const AirportsSchema = require(`./airports`);
const FlightsSchema = require(`./flights`);

const Airports = mongoose.model(`Airport`, AirportsSchema);
const Flights = mongoose.model(`Flight`, FlightsSchema);

module.exports = {
  Airports,
  Flights,
};
