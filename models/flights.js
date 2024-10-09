const { Schema, SchemaType } = require(`mongoose`);

const Flights = new Schema(
  {
    airline: { type: String, require: true },
    flightNum: { type: Number, require: true },
    cost: { type: Number, require: true },
    numOfseats: { type: Number, require: true },
    departingAirport: { type: String, require: true },
    arrivalAirport: { type: String, require: true },
    departureDate_id: { type: Schema.Types.ObjectId, ref: `departureDate_id ` },
  },
  { timestamps: true }
);

module.exports = Flights;
