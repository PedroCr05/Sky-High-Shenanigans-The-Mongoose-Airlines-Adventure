const { Schema } = require(`mongoose`);

const Flights = new Schema(
  {
    airline: { type: String, required: true },
    flightNum: { type: Number, required: true },
    cost: { type: Number, required: true },
    numOfSeats: { type: Number, required: true },
    departingAirport: {
      type: Schema.Types.ObjectId,
      ref: `Airport`,
    },
    arrivalAirport: { type: Schema.Types.ObjectId, ref: `Airport` },
    arrivalDateAndTime: { type: Date },
    departingDateAndTime: { type: Date },
  },
  { timestamps: true }
);

module.exports = Flights;
