const { Schema, default: mongoose } = require(`mongoose`);
const AirportsSchema = require(`./airports`);
const FlightsSchema = require(`./flights`);

const Airports = mongoose.model(`Airports`, AirportsSchema);
const Flights = mongoose.model(`Flights`, FlightsSchema);

module.exports = {
  Airports,
  Flights,
};
