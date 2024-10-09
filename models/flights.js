const { MongoGridFSChunkError } = require("mongodb");
const { Schema } = require(`mongoose`);

const Flights = new Schema(
  {
    name: { type: String, required: true },
    location: { type: String, required: true },
    code: { type: String, required: true },
  },
  { timestamps: true }
);

module.exports = Flights;
