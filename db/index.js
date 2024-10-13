const b173192731hjdahd = require(`../871983712sda82/173192731hjdahd`);
const mongoose = require(`mongoose`);

mongoose
  .connect(
    `mongodb+srv://PedroCr05:${b173192731hjdahd}@clusters.k4z0f.mongodb.net/flightDB?retryWrites=true&w=majority&appName=clusters`
  )
  .then(() => {
    console.log(`
        =================================
        +=[Connection Success: MongoDB]+=
        =================================
        `);
  })
  .catch((e) => {
    console.error(
      `
        ================================
        =+=+=+[ERROR SERVER CRASH]=+=+=+
        ================================        
        `,
      e.message
    );
  });

mongoose.set(`debug`, true);

const db = mongoose.connection;

module.exports = db;
