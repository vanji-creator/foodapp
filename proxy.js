// proxy.js

const axios = require("axios");

module.exports = async (req, res) => {
  try {
    // Make a request to the Swiggy API
    const response = await axios.get(
      "https://www.swiggy.com/dapi/restaurants/list/v5",
      {
        headers: {
          // Add any necessary headers to mimic the same origin
          Origin: "https://www.swiggy.com",
          Referer: "https://www.swiggy.com",
          // Add any other necessary headers
        },
      }
    );
    // Forward the response back to the client
    res.json(response.data);
  } catch (error) {
    // If there's an error, send an error response
    res.status(500).json({ error: error.message });
  }
};
