const cron = require("node-cron");

module.exports = () => {
  cron.schedule("*/1 * * * *", () => {
    // This function will run every 5 minutes
    console.log("Running cron job...");
    // Perform your desired action here, such as making an API call to your Next.js application
  });
};
